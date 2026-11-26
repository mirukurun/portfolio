'use client'

import { GazeVideo } from '@/components/GazeVideo'

export type Zone = 'design' | 'marketing' | 'blog' | 'services' | null

export const GAZE_VIDEO = {
  src: '/avatar/video/gaze-720.mp4',
  srcSmall: '/avatar/video/gaze-480.mp4',
  poster: '/avatar/video/gaze-poster.webp',
}

// Fade the bottom edge, where the neck outline meets the frame
export const GAZE_MASK: React.CSSProperties = {
  maskImage: 'linear-gradient(to bottom, #000 82%, transparent 98%)',
  WebkitMaskImage: 'linear-gradient(to bottom, #000 82%, transparent 98%)',
}

interface AvatarProps {
  onClick: () => void
}

/** Desktop avatar: the video head follows the cursor anywhere on the page. */
export function Avatar({ onClick }: AvatarProps) {
  return (
    <div
      style={{ height: '64vh', width: '64vh', maxWidth: '720px', maxHeight: '720px' }}
      className="relative cursor-pointer select-none"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label="Open CV — Diana Horbyk"
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <GazeVideo {...GAZE_VIDEO} className="absolute inset-0" style={GAZE_MASK} />
    </div>
  )
}
