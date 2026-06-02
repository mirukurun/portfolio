'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

export type Zone = 'design' | 'marketing' | 'blog' | null

interface AvatarProps {
  hoveredZone: Zone
  onClick: () => void
}

const AVATAR_STATES = [
  { key: null, src: '/avatar/avatar-front.png' },
  { key: 'design', src: '/avatar/avatar-left.png' },
  { key: 'marketing', src: '/avatar/avatar-right.png' },
  { key: 'blog', src: '/avatar/avatar-bottom.png' },
] as const

function getTransform(zone: Zone) {
  if (zone === 'design') return { rotate: -4, x: -14, y: 0 }
  if (zone === 'marketing') return { rotate: 4, x: 14, y: 0 }
  if (zone === 'blog') return { rotate: 0, x: 0, y: 12 }
  return { rotate: 0, x: 0, y: 0 }
}

export function Avatar({ hoveredZone, onClick }: AvatarProps) {
  const { rotate, x, y } = getTransform(hoveredZone)

  // Raw normalised cursor position: -0.5 (left/top) → +0.5 (right/bottom)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Smooth spring — slight lag makes it feel organic, not mechanical
  const springX = useSpring(rawX, { stiffness: 55, damping: 18 })
  const springY = useSpring(rawY, { stiffness: 55, damping: 18 })

  // Map cursor position to subtle 3-D head tilt (max ±6° horizontal, ±4° vertical)
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5)
      rawY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  return (
    // Outer wrapper sets the perspective so 3-D rotations look correct
    <div style={{ perspective: '900px' }}>
      <motion.div
        // Zone-based: 2-D rotation + translate
        animate={{ rotate, x, y }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        // Eye-tracking: continuous 3-D tilt toward cursor
        style={{
          rotateX,
          rotateY,
          height: '64vh',
          width: '64vh',
          maxWidth: '520px',
          maxHeight: '520px',
        }}
        className="relative cursor-pointer select-none"
        onClick={onClick}
        tabIndex={0}
        role="button"
        aria-label="Open CV — Diana Horbyk"
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
      >
        {AVATAR_STATES.map(({ key, src }) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            animate={{ opacity: hoveredZone === key ? 1 : 0 }}
            initial={false}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image
              src={src}
              alt="Diana Horbyk"
              fill
              className="object-contain object-bottom"
              priority={key === null}
              sizes="(max-width: 768px) 80vw, 520px"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
