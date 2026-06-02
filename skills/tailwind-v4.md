# Tailwind CSS v4

## Что изменилось по сравнению с v3
Tailwind v4 использует CSS-файл вместо `tailwind.config.js`.
Конфигурация пишется прямо в `globals.css`.

## Настройка темы
```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-bg: #F4F0EB;
  --color-ink: #2f2f2b;
  --color-accent: #D72638;

  --font-display: var(--font-cormorant);
  --font-sans: var(--font-space-grotesk);
}
```

После этого в JSX можно использовать:
```tsx
className="bg-bg text-ink font-display text-accent"
```

## Opacity modifier
```tsx
className="text-ink/60"   // opacity 60%
className="bg-ink/10"     // opacity 10%
```

## Адаптивность (breakpoints)
```tsx
className="hidden md:block"        // скрыть на мобильном, показать на md+
className="md:hidden"              // только мобильный
className="flex md:flex-row"       // flex-col на мобильном, flex-row на md+
```

Дефолтные breakpoints: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.

## Позиционирование
```tsx
className="absolute inset-0"           // top:0 right:0 bottom:0 left:0
className="absolute left-4 top-0"     // left: 16px, top: 0
className="left-[22%]"                 // произвольное значение в []
```

## Утилиты
```tsx
className="shrink-0"      // не сжиматься во flex-контейнере
className="min-h-0"       // позволить flex-ребёнку сжаться
className="h-[100svh]"   // 100% small viewport height (учитывает адресную строку браузера)
```
