# Framer Motion — анимации

## Установка
```bash
npm install framer-motion
```

## Базовый вход (fade in)
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  контент
</motion.div>
```

## Hover-состояния и интерактивность
```tsx
<motion.div
  animate={{ opacity: isActive ? 1 : 0.3 }}
  transition={{ duration: 0.4, ease: 'easeInOut' }}
>
```

## 3D наклон (используется для аватара)
```tsx
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

const rawX = useMotionValue(0)
const springX = useSpring(rawX, { stiffness: 55, damping: 18 })
const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])

// обновлять на mousemove:
rawX.set(e.clientX / window.innerWidth - 0.5)

<motion.div style={{ rotateY, perspective: 900 }}>
```

## Смена изображений (cross-fade)
```tsx
{images.map(({ key, src }) => (
  <motion.div
    key={src}
    className="absolute inset-0"
    animate={{ opacity: active === key ? 1 : 0 }}
    transition={{ duration: 0.45 }}
  >
    <Image src={src} fill ... />
  </motion.div>
))}
```
Все изображения рендерятся одновременно, нужное показывается через opacity.

## Staggered анимация (буквы появляются по одной)
```tsx
{['D','I','A','N','A'].map((letter, i) => (
  <motion.span
    key={i}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 + i * 0.05 }}
  >
    {letter}
  </motion.span>
))}
```
