# Next.js App Router (v16)

## Структура файлов
```
app/
  layout.tsx       — общая обёртка для всех страниц (шрифты, мета, body)
  page.tsx         — главная страница /
  design/
    page.tsx       — страница /design
    ivy/
      page.tsx     — страница /design/ivy
  blog/
    page.tsx       — страница /blog
```

Каждая папка = маршрут. Файл `page.tsx` внутри = страница этого маршрута.

## Метаданные и viewport

```tsx
// app/layout.tsx
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  colorScheme: 'only light',  // запрет тёмной темы браузером
}

export const metadata: Metadata = {
  title: 'Заголовок страницы',
  description: 'Описание для SEO',
  openGraph: { ... },  // превью при шаринге в соцсети
}
```

## 'use client' vs серверный компонент
- По умолчанию все компоненты серверные (нет интерактивности)
- Добавить `'use client'` в начало файла если нужны: `useState`, `useEffect`, обработчики событий, framer-motion

## Навигация
```tsx
import { useRouter } from 'next/navigation'
const router = useRouter()
router.push('/design')  // переход на страницу
```

## Шрифты Google
```tsx
import { Cormorant_Garamond } from 'next/font/google'
const font = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] })
// подключить через className или CSS variable
```

## Image компонент
```tsx
import Image from 'next/image'
<Image src="/avatar/photo.jpg" alt="..." fill className="object-cover" />
```
`fill` — занимает 100% родительского элемента (родитель должен быть `position: relative`).
