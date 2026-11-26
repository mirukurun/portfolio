"""Build the cursor-following avatar clips in public/avatar/video/.

    python3 scripts/gaze-video.py path/to/kling_clip.mp4

Each output frame is the picture on top and its alpha matte below (a "packed alpha"
video), because H.264 has no alpha channel and Safari can't play WebM alpha.
GazeVideo.tsx joins the halves on a canvas.

- crop the 1280×720 clip to the 720×720 square around the head
- grade the grey #D5D5D5 background up to the page cream
- background = light pixels connected to the frame edge (flood fill), so eye
  whites and face highlights inside the outline stay opaque; anti-aliased hair edges
  get partial alpha and are un-mixed from the background colour
- every frame a keyframe (-g 1) so seeking is instant
"""

import subprocess
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

SRC = sys.argv[1]
OUT = Path(__file__).resolve().parent.parent / "public" / "avatar" / "video"
OUT.mkdir(parents=True, exist_ok=True)
S = 720
GRADE = "crop=720:720:280:0,colorchannelmixer=rr=1.1455:gg=1.1268:bb=1.1033"
BG_V = 241.0  # background brightness after grading
DARK_V = 35.0  # hair/outline brightness: what a semi-transparent edge pixel is mixed from
LOOSE = 200  # pixels at least this bright may belong to the background
CLEAR = 234  # background pixels this bright are fully transparent

raw = subprocess.run(
    ["ffmpeg", "-v", "error", "-i", SRC, "-vf", GRADE, "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
    check=True, capture_output=True,
).stdout
frames = np.frombuffer(raw, np.uint8).reshape(-1, S, S, 3)
print(f"{len(frames)} frames")

bg_rgb = np.median(frames[0, :40, :40].reshape(-1, 3), axis=0)


def matte(rgb: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    f = rgb.astype(np.float32)
    v = f.mean(axis=2)
    labels, _ = ndimage.label(v >= LOOSE)
    edge = np.unique(np.concatenate([labels[0], labels[-1], labels[:, 0], labels[:, -1]]))
    region = np.isin(labels, edge[edge > 0])
    region = ndimage.binary_dilation(region, iterations=1)  # catch the outermost AA pixel
    a = np.ones_like(v)
    a_bg = np.clip((BG_V - v) / (BG_V - DARK_V), 0, 1)
    a_bg[v >= CLEAR] = 0
    a[region] = a_bg[region]
    # un-mix the cream background out of semi-transparent edge pixels
    semi = (a > 0.02) & (a < 0.98)
    am = a[semi][:, None]
    f[semi] = np.clip((f[semi] - (1 - am) * bg_rgb) / am, 0, 255)
    f[a <= 0.02] = bg_rgb
    return f.astype(np.uint8), (a * 255).round().astype(np.uint8)


packed = np.empty((len(frames), S * 2, S, 3), np.uint8)
for i, fr in enumerate(frames):
    rgb, a = matte(fr)
    packed[i, :S] = rgb
    packed[i, S:] = a[:, :, None]
    if i == 0:
        Image.fromarray(np.dstack([rgb, a])).resize((480, 480), Image.LANCZOS).save(
            OUT / "gaze-poster.webp", quality=82
        )


def encode(name: str, scale: str | None, crf: int) -> None:
    vf = ["-vf", f"scale={scale},format=yuv420p"] if scale else ["-vf", "format=yuv420p"]
    subprocess.run(
        ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{S}x{S*2}",
         "-r", "24", "-i", "-", *vf, "-c:v", "libx264", "-g", "1", "-crf", str(crf),
         "-preset", "slow", "-movflags", "+faststart", str(OUT / name)],
        input=packed.tobytes(), check=True,
    )


encode("gaze-720.mp4", None, 20)
encode("gaze-480.mp4", "480:960", 22)
for p in sorted(OUT.iterdir()):
    print(p.name, p.stat().st_size // 1024, "KB")
