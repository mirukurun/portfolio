# Отключение тёмной темы (Dark Mode Prevention)

## Проблема
Устройства с включённой тёмной темой (особенно Chrome на Android) могут принудительно
перекрашивать страницу даже если задать цвета явно через CSS.

## Решение — три уровня защиты

### 1. CSS (globals.css)
```css
html {
  color-scheme: only light;  /* ВАЖНО: "only light", не "light only" — порядок слов имеет значение */
  background-color: #F4F0EB !important;
}

@media (prefers-color-scheme: dark) {
  html, body, main {
    background-color: #F4F0EB !important;
    color: #2f2f2b !important;
  }
}
```

### 2. Next.js Viewport (layout.tsx)
```tsx
export const viewport: Viewport = {
  colorScheme: 'only light',
}
```
Это генерирует в HTML: `<meta name="color-scheme" content="only light">`

### 3. HTML атрибут (layout.tsx)
```tsx
<html style={{ colorScheme: 'light' }}>
```

## Частая ошибка
`color-scheme: light only` — **не работает** (неправильный порядок).
`color-scheme: only light` — **работает**.

## Inline стили для мобильных блоков
Для надёжности дублировать цвета прямо в компоненте:
```tsx
<main style={{ backgroundColor: '#F4F0EB', color: '#2f2f2b' }}>
```
