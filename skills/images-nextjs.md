# Работа с изображениями в Next.js

## Компонент Image
```tsx
import Image from 'next/image'
```
Автоматически оптимизирует: сжимает, конвертирует в WebP, lazy loading.

## fill — занять весь родительский блок
```tsx
<div className="relative">           {/* родитель ДОЛЖЕН быть position: relative */}
  <Image src="/photo.jpg" fill alt="..." className="object-cover" />
</div>
```

## object-fit варианты
| класс | поведение |
|---|---|
| `object-contain` | вписать целиком, сохранить пропорции (могут быть пустые полосы) |
| `object-cover` | заполнить контейнер, обрезать лишнее |
| `object-fill` | растянуть до контейнера (искажает пропорции) |

## object-position — откуда кадрировать
```tsx
className="object-cover object-top"     // кадрировать снизу (оставить верх)
className="object-cover object-center"  // кадрировать равномерно с краёв
className="object-cover object-right"   // кадрировать слева (оставить правый край)
```

## PNG vs JPG для аватаров
- **PNG с прозрачностью** (`avatar-front.png`) — хорошо для наложения на цветной фон, но `object-contain` оставляет пустые края из-за прозрачных областей
- **JPG** (`avatar_front_half.jpg`) — непрозрачный, фон изображения должен совпадать с фоном страницы; `object-cover` работает предсказуемо

## sizes — подсказка для оптимизации
```tsx
<Image
  src="..."
  fill
  sizes="(max-width: 768px) 80vw, 520px"
  // на мобильном — 80% ширины экрана, на десктопе — 520px
/>
```
Помогает браузеру загрузить правильный размер файла.

## priority — без lazy loading
```tsx
<Image src="..." fill priority />
```
Использовать для изображений выше fold (видимых без прокрутки).
