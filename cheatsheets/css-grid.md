---
title: CSS Grid
category: CSS
updated: 2019-08-23
prism_languages: [css]
intro: |
  [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) is a two-dimensional layout system for the web, allowing developers to create complex and responsive user interfaces.
---

### Container

```css
.grid-container {
```
{: .-setup}

```css
  /* Display properties */
  display: grid;
  display: inline-grid;
```

```css
  /* Columns and rows */
  grid-template-columns: 1rem 2rem 1rem; /* Measurement units */
  grid-template-columns: 25% 50% 25%; /* Percentage units */
  grid-template-columns: 1rem auto 1rem 2fr; /* Fill remaining widths with auto or fr units */
  grid-template-columns: repeat(12, 1fr); /* Repeat columns without needing to write them */
  grid-template-columns: subgrid; /* Use column tracks defined on parent grid */
  
  grid-template-rows: 1rem 10% auto repeat(5, 10px); /* Mix any group, same rules work for rows */
  grid-template-rows: subgrid; /* Use row tracks defined on parent grid */
```

```css
  /* Automatic columns and rows */

  grid-auto-columns: 10px; /* No matter how many columns of content end up in the grid, each column will be this same width */
  grid-auto-rows: 1rem; /* No matter how many rows of content end up in the grid, each row will be this same height */
```

```css
  /* Areas */
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer"; /* Grid-style */

  grid-template-areas: "header header" "main aside" "footer footer"; /* Inline-style */
```

```css
  /* Template shorthand */
  grid-template:
    "header header" auto
    "main aside" 100vh
    "footer footer" 10rem
    / 80% 20%;

  /* The above is the same as below long-hand */
  grid-template-columns: 80% 20%;
  grid-template-rows: auto 100vh 10rem;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
```

```css
  /* Gaps */
  grid-row-gap: 1rem;
  grid-column-gap: 0.5rem; /* Define values separately */

  grid-gap: 1rem 0.5rem; /* Short-hand for row / column */
  grid-gap: 1rem; /* Gap in both dimensions */
```

```css
  /* Item justification (horizontal or column alignment) */
  justify-items: start; /* Align items to the left */
  justify-items: center; /* Align items centered within its column */
  justify-items: end; /* Align items to the right */
  justify-items: stretch; /* (default) Fills available area (horizontally) */
```

```css
  /* Item alignment (vertical or row alignment) */
  align-items: start; /* Align items to the top */
  align-items: center; /* Align items centered within its row */
  align-items: end; /* Align items to the bottom */
  align-items: stretch; /* (default) Fills available area (vertically) */
```

```css
  /* Place item shorthand */
  place-items: start stretch;

  /* The above is the same as below long-hand */
  align-items: start;
  justify-items: stretch;
```

```css
  /* Content justification (horizontal or column alignment) */
  justify-content: start; /* Align content to the left */
  justify-content: center; /* Align content centered horizontally within the grid */
  justify-content: end; /* Align content to the right */
  justify-content: stretch; /* (default) Fills available area (horizontally) */

  justify-content: space-around; /* Chooses a space for both sides of the columns like a left and right margin */
  justify-content: space-between; /* Chooses a space to go between columns, no margins on outside of content */
  justify-content: space-evenly; /* Chooses a space that goes between all columns and edges consistently */
```