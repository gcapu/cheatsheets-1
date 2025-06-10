---
title: Tailwind CSS
category: CSS
weight: -2
tags: [Featured]
keywords:
  - flexbox
  - grid
  - responsive design
  - spacing
  - sizing
  - typography
intro: |
  A quick reference for the [Tailwind CSS](https://tailwindcss.com/) utility-first framework. This guide covers the most common classes.
---

See also: [Tailwind for Beginners](./tailwind-for-beginners)
{: .-crosslink}

## Core Concepts
{: .-two-column}

### Utility-First

Tailwind is a utility-first CSS framework. Instead of writing custom CSS, you apply pre-existing utility classes directly in your HTML.

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
```

### Responsive Design

Use responsive utility variants to build adaptive user interfaces. Prefixes like `sm:`, `md:`, `lg:`, `xl:` let you apply styles at different screen sizes.

```html
<img class="w-16 md:w-32 lg:w-48" src="...">
```

This makes the image width `w-16` on small screens, `w-32` on medium screens, and `w-48` on large screens.

### State Variants

Tailwind allows you to style elements in different states using variant prefixes like `hover:`, `focus:`, `active:`, `disabled:`, etc.

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
```

The button will have a darker background on hover.

### Default Breakpoints

| Breakpoint | Value | CSS |
| --- | --- | --- |
| `sm` | 640px | `@media (min-width: 640px)` |
| `md` | 768px | `@media (min-width: 768px)` |
| `lg` | 1024px | `@media (min-width: 1024px)` |
| `xl` | 1280px | `@media (min-width: 1280px)` |
| `2xl` | 1536px | `@media (min-width: 1536px)` |

## Flexbox
{: .-two-column}

### Flexbox

| Class | Property |
| --- | --- |
| `flex` | `display: flex` |
| `inline-flex` | `display: inline-flex` |
| `flex-row` | `flex-direction: row` |
| `flex-row-reverse` | `flex-direction: row-reverse` |
| `flex-col` | `flex-direction: column` |
| `flex-col-reverse` | `flex-direction: column-reverse` |
| `flex-wrap` | `flex-wrap: wrap` |
| `flex-nowrap` | `flex-wrap: nowrap` |
| `flex-1` | `flex: 1 1 0%` |
| `flex-auto` | `flex: 1 1 auto` |
| `flex-initial` | `flex: 0 1 auto` |
| `flex-none` | `flex: none` |

### Justify Content

| Class | Property |
| --- | --- |
| `justify-start` | `justify-content: flex-start` |
| `justify-end` | `justify-content: flex-end` |
| `justify-center` | `justify-content: center` |
| `justify-between` | `justify-content: space-between` |
| `justify-around` | `justify-content: space-around` |
| `justify-evenly` | `justify-content: space-evenly` |

### Align Items

| Class | Property |
| --- | --- |
| `items-start` | `align-items: flex-start` |
| `items-end` | `align-items: flex-end` |
| `items-center` | `align-items: center` |
| `items-baseline` | `align-items: baseline` |
| `items-stretch` | `align-items: stretch` |

## Grid
{: .-two-column}

### Grid

| Class | Property |
| --- | --- |
| `grid` | `display: grid` |
| `inline-grid` | `display: inline-grid` |
| `gap-4` | `gap: 1rem` |
| `gap-x-4` | `column-gap: 1rem` |
| `gap-y-4` | `row-gap: 1rem` |

### Grid columns

| Class | Property |
| --- | --- |
| `grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr))` |
| `col-span-2` | `grid-column: span 2 / span 2` |
| `col-start-2` | `grid-column-start: 2` |
| `col-end-4` | `grid-column-end: 4` |

### Grid rows

| Class | Property |
| --- | --- |
| `grid-rows-3` | `grid-template-rows: repeat(3, minmax(0, 1fr))` |
| `row-span-2` | `grid-row: span 2 / span 2` |
| `row-start-2` | `grid-row-start: 2` |
| `row-end-4` | `grid-row-end: 4` |

## Spacing
{: .-two-column}

### Padding

| Class | Property |
| --- | --- |
| `p-0` | `padding: 0px` |
| `p-4` | `padding: 1rem` (16px) |
| `px-4` | `padding-left: 1rem; padding-right: 1rem` |
| `py-4` | `padding-top: 1rem; padding-bottom: 1rem` |
| `pt-4` | `padding-top: 1rem` |
| `pr-4` | `padding-right: 1rem` |
| `pb-4` | `padding-bottom: 1rem` |
| `pl-4` | `padding-left: 1rem` |

### Margin

| Class | Property |
| --- | --- |
| `m-0` | `margin: 0px` |
| `m-4` | `margin: 1rem` (16px) |
| `mx-auto` | `margin-left: auto; margin-right: auto` |
| `my-4` | `margin-top: 1rem; margin-bottom: 1rem` |
| `mt-4` | `margin-top: 1rem` |
| `mr-4` | `margin-right: 1rem` |
| `mb-4` | `margin-bottom: 1rem` |
| `ml-4` | `margin-left: 1rem` |

## Sizing
{: .-two-column}

### Width

| Class | Property |
| --- | --- |
| `w-0` | `width: 0px` |
| `w-px` | `width: 1px` |
| `w-4` | `width: 1rem` (16px) |
| `w-1/2` | `width: 50%` |
| `w-full` | `width: 100%` |
| `w-screen` | `width: 100vw` |
| `w-auto` | `width: auto` |
| `w-min` | `width: min-content` |
| `w-max` | `width: max-content` |
| `w-fit` | `width: fit-content` |

### Height

| Class | Property |
| --- | --- |
| `h-0` | `height: 0px` |
| `h-px` | `height: 1px` |
| `h-4` | `height: 1rem` (16px) |
| `h-full` | `height: 100%` |
| `h-screen` | `height: 100vh` |
| `h-auto` | `height: auto` |

## Typography
{: .-two-column}

### Font Size

| Class | Property |
| --- | --- |
| `text-xs` | `font-size: 0.75rem` (12px) |
| `text-sm` | `font-size: 0.875rem` (14px) |
| `text-base` | `font-size: 1rem` (16px) |
| `text-lg` | `font-size: 1.125rem` (18px) |
| `text-xl` | `font-size: 1.25rem` (20px) |
| `text-2xl` | `font-size: 1.5rem` (24px) |

### Font Weight

| Class | Property |
| --- | --- |
| `font-thin` | `font-weight: 100` |
| `font-extralight` | `font-weight: 200` |
| `font-light` | `font-weight: 300` |
| `font-normal` | `font-weight: 400` |
| `font-medium` | `font-weight: 500` |
| `font-semibold` | `font-weight: 600` |
| `font-bold` | `font-weight: 700` |
| `font-extrabold` | `font-weight: 800` |
| `font-black` | `font-weight: 900` |

### Text Color

| Class | Property |
| --- | --- |
| `text-transparent` | `color: transparent` |
| `text-black` | `color: #000` |
| `text-white` | `color: #fff` |
| `text-gray-500` | `color: #6B7280` |
| `text-red-500` | `color: #EF4444` |
| `text-blue-500` | `color: #3B82F6` | 