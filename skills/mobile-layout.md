# Мобильная вёрстка

## Разделение мобильной и десктопной версии
В одном файле два блока `<main>`:
```tsx
{/* Только мобильный */}
<main className="md:hidden h-[100svh] overflow-hidden flex flex-col">
  ...
</main>

{/* Только десктоп */}
<main className="hidden md:block h-screen">
  ...
</main>
```

## h-[100svh] vs h-screen
`h-screen` = 100vh — не учитывает адресную строку браузера (Chrome/Safari на iOS).
`h-[100svh]` = 100svh (small viewport height) — вычитает адресную строку. Правильный вариант для мобильных.

## Вертикальная раскладка страницы (flex-col)
```tsx
<main className="flex flex-col h-[100svh]">
  <div className="shrink-0">  {/* фиксированная шапка */}
  <div className="flex-1 min-h-0">  {/* растягивается, занимает остаток */}
  <div className="shrink-0">  {/* фиксированная навигация снизу */}
</main>
```
`flex-1 min-h-0` — ключевая пара: `flex-1` растягивает блок, `min-h-0` позволяет ему сжиматься если контент не помещается.

## Абсолютное позиционирование внутри flex-1
Внутренний блок с `position: relative` (или `overflow: hidden`) + дочерние `absolute`:
```tsx
<div className="flex-1 relative overflow-hidden min-h-0">
  <div className="absolute top-0 bottom-0 left-4 right-0">  {/* аватар */}
  <div className="absolute left-4 top-0 bottom-0">           {/* текст */}
</div>
```

## Шрифты в vw для адаптивности
```tsx
style={{ fontSize: '9vw' }}  // масштабируется с шириной экрана
```
Вместо фиксированных px — текст всегда пропорционален экрану.

## Активные состояния на touch
```tsx
className="active:opacity-60"  // визуальный отклик при тапе
```
