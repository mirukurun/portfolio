'use client'

import { useEffect, useRef, useState } from 'react'

/*
 * Avatar video that looks at the cursor (or finger) in every direction.
 *
 * The clip is one loop of the head: front (frame 0) → right (≈26) → down (≈64)
 * → left (≈100) → front again (144 ≡ 0). So the angle from the face to the
 * pointer picks a frame on that loop, and the playhead eases toward it along the
 * shorter way round. Every frame is a keyframe (ffmpeg -g 1), so seeks are instant.
 *
 * The files are made by scripts/gaze-video.py: each frame holds the picture on
 * top and its alpha matte below, joined here on a canvas, so the page (and the
 * red DIANA / HORBYK letters behind her) shows around the head.
 */

const FPS = 24
const LOOP = 144 // frames in one loop; frame 144 looks the same as frame 0

// Pointer angle (degrees, screen space: 0 = right, 90 = down) → video frame.
// Angles run from -90 (up) to 270 (up again); frames are unwrapped so they only rise.
const KEYS: [number, number][] = [
  [-90, 0],    // up → face front
  [-45, 12],   // up-right
  [0, 26],     // right
  [45, 46],    // down-right
  [90, 64],    // down
  [135, 86],   // down-left
  [180, 100],  // left
  [225, 112],  // up-left
  [250, 114],
  [262, 136],  // jump over the blink at 118–128 so she never rests with eyes shut
  [270, 144],  // up → front
]

// Where the face sits in the (square) video, as a fraction of its width/height.
const FACE_X = 0.5
const FACE_Y = 0.38

const EASE = 0.14 // share of the remaining distance covered per 60 Hz frame

function angleToFrame(deg: number) {
  if (deg < -90) deg += 360
  for (let i = 1; i < KEYS.length; i++) {
    const [a1, f1] = KEYS[i]
    const [a0, f0] = KEYS[i - 1]
    if (deg <= a1) return f0 + ((deg - a0) / (a1 - a0)) * (f1 - f0)
  }
  return 0
}

const mod = (n: number, m: number) => ((n % m) + m) % m

type Props = {
  /** Full-quality clip for wide screens and the light one for ≤ 900 px. */
  src: string
  srcSmall: string
  poster: string
  /** CSS object-position of the video inside its box, e.g. '50% 50%'. */
  position?: string
  className?: string
  style?: React.CSSProperties
}

export function GazeVideo({ src, srcSmall, poster, position = '50% 50%', className, style }: Props) {
  const boxRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const box = boxRef.current
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!box || !video || !canvas) return
    const out = canvas.getContext('2d')
    const work = document.createElement('canvas').getContext('2d', { willReadFrequently: true })
    if (!out || !work) return

    let disposed = false
    let objectUrl: string | null = null
    let target = 0 // frame we want (0..LOOP)
    let current = 0 // eased playhead, in frames
    let shown = -1 // frame last asked of the video
    let seeking = false
    let seekStarted = 0
    let visible = true
    let raf = 0
    let last = performance.now()
    const [posX, posY] = position.split(' ').map((p) => parseFloat(p) / 100)

    // ── Load the whole clip into memory so every seek is instant ──
    // (only once the box is on screen: the hidden mobile/desktop twin never loads)
    let started = false
    const load = () => {
      started = true
      const url = window.matchMedia('(max-width: 900px)').matches ? srcSmall : src
      fetch(url)
        .then((r) => (r.ok ? r.blob() : Promise.reject(r.status)))
        .then((blob) => {
          if (disposed) return
          objectUrl = URL.createObjectURL(blob)
          video.src = objectUrl
        })
        .catch(() => {
          if (!disposed) video.src = url // plain link as a fallback
        })
    }

    // iPhone (Safari, Telegram) paints no frames until the video has played once,
    // and may never fire loadeddata — so play+pause right away, show on whichever comes first.
    const onMeta = () => {
      video.muted = true
      video.currentTime = 0.5 / FPS
      const p = video.play()
      if (p) p.then(() => video.pause()).catch(() => {})
      else video.pause()
    }
    // Join the halves: picture (top) gets its alpha from the matte (bottom)
    const draw = () => {
      const w = video.videoWidth
      const h = video.videoHeight / 2
      if (!w || !h) return
      if (work.canvas.width !== w) {
        work.canvas.width = w
        work.canvas.height = h * 2
        canvas.width = w
        canvas.height = h
      }
      work.drawImage(video, 0, 0)
      const img = work.getImageData(0, 0, w, h * 2)
      const d = img.data
      const half = w * h * 4
      for (let i = 0; i < half; i += 4) d[i + 3] = d[half + i + 1]
      out.putImageData(img, 0, 0) // the matte half falls outside the canvas
    }
    const onShow = () => {
      if (!video.paused) video.pause()
      draw()
      setReady(true)
    }
    const onSeeked = () => {
      seeking = false
      draw()
    }
    video.addEventListener('loadedmetadata', onMeta)
    video.addEventListener('loadeddata', onShow)
    video.addEventListener('canplay', onShow)
    video.addEventListener('playing', onShow)
    video.addEventListener('seeked', onSeeked)

    // ── Pointer → target frame, from the pointer's absolute position (no drift) ──
    const aim = (clientX: number, clientY: number) => {
      const r = box.getBoundingClientRect()
      const vw = video.videoWidth || 1
      const vh = video.videoHeight / 2 || 1
      const s = Math.max(r.width / vw, r.height / vh) // object-fit: cover
      const faceX = r.left + (r.width - vw * s) * posX + FACE_X * vw * s
      const faceY = r.top + (r.height - vh * s) * posY + FACE_Y * vh * s
      const dx = clientX - faceX
      const dy = clientY - faceY
      // Pointer on the face itself → look straight ahead
      if (Math.hypot(dx, dy) < Math.min(r.width, r.height) * 0.14) target = 0
      else target = angleToFrame((Math.atan2(dy, dx) * 180) / Math.PI)
    }
    const onPointer = (e: PointerEvent) => aim(e.clientX, e.clientY)
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) aim(t.clientX, t.clientY)
    }
    window.addEventListener('pointermove', onPointer, { passive: true })
    window.addEventListener('pointerdown', onPointer, { passive: true })
    window.addEventListener('touchstart', onTouch, { passive: true })
    window.addEventListener('touchmove', onTouch, { passive: true })

    // ── Off screen → no seeking ──
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !started) load()
    })
    io.observe(box)

    // ── Ease the playhead toward the target, same speed at 60 and 120 Hz ──
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const dt = Math.min(now - last, 100)
      last = now
      let diff = mod(target - current, LOOP)
      if (diff > LOOP / 2) diff -= LOOP // go the shorter way round the loop
      const k = 1 - Math.pow(1 - EASE, dt / (1000 / 60))
      current = Math.abs(diff) < 0.02 ? target : mod(current + diff * k, LOOP)

      if (!visible || video.readyState < 1) return
      if (seeking) {
        if (now - seekStarted < 400) return
        seeking = false // a seeked event got lost; don't stall forever
      }
      const frame = mod(Math.round(current), LOOP)
      if (frame === shown) return
      shown = frame
      seeking = true
      seekStarted = now
      video.currentTime = (frame + 0.5) / FPS // new seek only after the last one finished
    }
    raf = requestAnimationFrame(tick)

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('touchstart', onTouch)
      window.removeEventListener('touchmove', onTouch)
      video.removeEventListener('loadedmetadata', onMeta)
      video.removeEventListener('loadeddata', onShow)
      video.removeEventListener('canplay', onShow)
      video.removeEventListener('playing', onShow)
      video.removeEventListener('seeked', onSeeked)
      video.removeAttribute('src')
      video.load()
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [src, srcSmall, position])

  return (
    <div ref={boxRef} className={className} style={style}>
      {/* Poster: the front-facing frame, so she's there at once on any device */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ objectFit: 'cover', objectPosition: position, opacity: ready ? 0 : 1, transition: 'opacity 0.6s ease' }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ objectFit: 'cover', objectPosition: position, opacity: ready ? 1 : 0, transition: 'opacity 0.6s ease' }}
      />
      {/* The source of the frames; never shown itself */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
        tabIndex={-1}
        className="absolute w-px h-px opacity-0 pointer-events-none"
      />
    </div>
  )
}
