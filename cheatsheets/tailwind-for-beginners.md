---
title: Tailwind CSS for Beginners
category: CSS
weight: -2
keywords:
  - flexbox
  - grid
  - responsive design
  - spacing
  - sizing
  - typography
intro: |
  A beginner-friendly introduction to the [Tailwind CSS](https://tailwindcss.com/) utility-first framework. This guide explains what the most common classes do. AI Generated.
---

See also: [Expert Cheatsheet](./tailwind)
{: .-crosslink}

## Core Concepts
{: .-two-column}

### What is Tailwind?

Tailwind is a utility-first CSS framework. This means that instead of writing CSS rules yourself, you use special classes in your HTML to style your elements. It's like having a huge set of Lego blocks that you can use to build any design you want.

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <!-- This looks complex, but it's just a set of instructions! -->
</div>
```

### Responsive Design

One of Tailwind's superpowers is making your site look good on any screen size. You can apply different styles for small (`sm`), medium (`md`), large (`lg`), and extra-large (`xl`) screens.

```html
<!-- This image gets wider on bigger screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
```

### Hover and Focus States

You can easily change how an element looks when a user interacts with it, like when they hover their mouse over a button or select an input field.

```html
<!-- This button changes color on hover -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

### Default Breakpoints

These are the screen sizes where your responsive styles will kick in.

| Breakpoint | Minimum Width | Typical Device |
| --- | --- | --- |
| `sm` | 640px | Small tablets, large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

## Flexbox Layout
{: .-two-column}

### Creating a Flex Container

Use these classes to create a flexbox container, which is a powerful way to arrange items.

| Class | Description |
| --- | --- |
| `flex` | Makes items arrange in a row or column. |
| `inline-flex`| Like `flex`, but doesn't take up the full width. |
| `flex-row` | Arranges items in a row (left to right). |
| `flex-col` | Stacks items in a column (top to bottom). |
| `flex-wrap` | Allows items to wrap to the next line if they run out of space. |
| `flex-nowrap`| Prevents items from wrapping. |

### Alignment and Spacing

These classes help you position and space out the items inside a flex container.

| Class | Description |
| --- | --- |
| `justify-center` | Centers items horizontally. |
| `justify-between`| Pushes items to the edges, with even space between them. |
| `items-center` | Centers items vertically. |

## Grid Layout
{: .-two-column}

### Creating a Grid

Grid is another powerful layout tool, great for creating two-dimensional layouts (rows and columns).

| Class | Description |
| --- | --- |
| `grid` | Turns an element into a grid container. |
| `inline-grid` | A grid container that doesn't take up the full width. |
| `gap-4` | Adds space between all grid items. |
| `gap-x-4` | Adds space only between columns. |
| `gap-y-4` | Adds space only between rows. |

### Spanning Items

You can make an item take up more than one column or row.

| Class | Description |
| --- | --- |
| `grid-cols-3` | Creates a grid with 3 equal-width columns. |
| `grid-rows-3` | Creates a grid with 3 equal-height rows. |
| `col-span-2` | Makes an item span across 2 columns. |
| `row-span-2` | Makes an item span across 2 rows. |


## Spacing
{: .-two-column}

### Padding

Padding adds space inside an element's border. Think of it as cushioning.

| Class | Description |
| --- | --- |
| `p-4` | Adds padding on all sides. |
| `px-4` | Adds padding on the left and right. |
| `py-4` | Adds padding on the top and bottom. |
| `pt-4` | Adds padding only to the top. |

### Margin

Margin adds space outside an element's border, pushing other elements away.

| Class | Description |
| --- | --- |
| `m-4` | Adds margin on all sides. |
| `mx-auto`| Centers an element horizontally. |
| `my-4` | Adds margin on the top and bottom. |
| `mt-4` | Adds margin only to the top. |

## Sizing
{: .-two-column}

### Width

Control the width of your elements.

| Class | Description |
| --- | --- |
| `w-4` | Sets a fixed width (e.g., `1rem` or `16px`). |
| `w-1/2` | Sets the width to 50% of its container. |
| `w-full` | Sets the width to 100% of its container. |
| `w-screen` | Sets the width to 100% of the screen. |
| `w-auto` | The browser calculates the width. |

### Height

Control the height of your elements.

| Class | Description |
| --- | --- |
| `h-4` | Sets a fixed height (e.g., `1rem` or `16px`). |
| `h-full` | Sets the height to 100% of its container. |
| `h-screen` | Sets the height to 100% of the screen. |
| `h-auto` | The browser calculates the height. |

## Typography
{: .-two-column}

### Font Size

Control the size of your text.

| Class | Description |
| --- | --- |
| `text-sm` | Small text. |
| `text-base` | Normal, default text size. |
| `text-lg` | Large text. |
| `text-xl` | Extra large text. |

### Font Weight

Control how bold your text is.

| Class | Description |
| --- | --- |
| `font-light` | Light text. |
| `font-normal` | Normal text weight. |
| `font-medium` | A bit bolder than normal. |
| `font-bold` | Bold text. |

### Text Color

Change the color of your text.

| Class | Description |
| --- | --- |
| `text-black` | Black text. |
| `text-white` | White text. |
| `text-gray-500`| A medium shade of gray. |
| `text-red-500` | A medium shade of red. | 