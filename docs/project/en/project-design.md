# Project Design

This document describes the design principles used in the Next.js Radix Theme project, with a focus on fluid typography and stylistic choices.

## Fluid Typography

The project uses a fluid typography system based on CSS's `clamp()` function, inspired by [Utopia.fyi](https://utopia.fyi/). This approach allows text size to automatically adapt based on screen width, without needing to define multiple breakpoints.

### Basic Principles

Fluid typography works by defining:

1. A minimum font size for small screens (330px)
2. A maximum font size for large screens (1240px)
3. A fluid interpolation between these two values

### Typographic Scale

Our typographic scale is defined as follows:

| Level | Small screen (330px) | Large screen (1240px) | CSS Variable |
| ----- | -------------------- | --------------------- | ------------ |
| -2    | 12.5px               | 12.8px                | `--step--2`  |
| -1    | 15px                 | 16px                  | `--step--1`  |
| 0     | 18px                 | 20px                  | `--step-0`   |
| 1     | 21.6px               | 25px                  | `--step-1`   |
| 2     | 25.92px              | 31.25px               | `--step-2`   |
| 3     | 31.104px             | 39.0625px             | `--step-3`   |
| 4     | 37.3248px            | 48.8281px             | `--step-4`   |
| 5     | 44.7898px            | 61.0352px             | `--step-5`   |

### Line Heights

Line heights are also fluid and adapted to each text level:

#### Small text (ratio 1.3)

- `--lh--2`: 16.25px → 16.64px
- `--lh--1`: 19.5px → 20.8px

#### Normal text (ratio 1.4)

- `--lh-0`: 25.2px → 28px
- `--lh-1`: 30.24px → 35px

#### Headings (progression towards ratio 1.6)

- `--lh-2`: 36.288px → 43.75px
- `--lh-3`: 43.5456px → 54.6875px
- `--lh-4`: 52.2547px → 68.3594px
- `--lh-5`: 62.7057px → 85.4493px

### Implementation

The implementation uses CSS's `clamp()` function to create a fluid transition between minimum and maximum sizes:

```css
--step-0: clamp(1.125rem, 1.0797rem + 0.2198vw, 1.25rem);
--lh-0: clamp(1.575rem, 1.5141rem + 0.3044vw, 1.75rem);
```

This approach provides:

- Typography that adapts proportionally to screen size
- Better readability on all devices
- Reduced CSS code (fewer media queries)
- A smoother user experience

## Fluid Spacing

Our fluid spacing system also uses CSS's `clamp()` function to create margins and padding that adapt to screen size. This system is based on the same fundamental values as our typography system.

### Spacing Scale

Our spacing scale is defined as follows:

| Name | Small screen (330px) | Large screen (1240px) | CSS Variable  |
| ---- | -------------------- | --------------------- | ------------- |
| 3xs  | 5px                  | 5px                   | `--space-3xs` |
| 2xs  | 9px                  | 10px                  | `--space-2xs` |
| xs   | 14px                 | 15px                  | `--space-xs`  |
| s    | 18px                 | 20px                  | `--space-s`   |
| m    | 27px                 | 30px                  | `--space-m`   |
| l    | 36px                 | 40px                  | `--space-l`   |
| xl   | 54px                 | 60px                  | `--space-xl`  |
| 2xl  | 72px                 | 80px                  | `--space-2xl` |
| 3xl  | 108px                | 120px                 | `--space-3xl` |

### Spacing Pairs

In addition to fixed spacings, we've defined spacing pairs that allow for a fluid transition between two spacing sizes:

| Name    | Small screen (330px) | Large screen (1240px) | CSS Variable      |
| ------- | -------------------- | --------------------- | ----------------- |
| 3xs-2xs | 5px                  | 10px                  | `--space-3xs-2xs` |
| 2xs-xs  | 9px                  | 15px                  | `--space-2xs-xs`  |
| xs-s    | 14px                 | 20px                  | `--space-xs-s`    |
| s-m     | 18px                 | 30px                  | `--space-s-m`     |
| m-l     | 27px                 | 40px                  | `--space-m-l`     |
| l-xl    | 36px                 | 60px                  | `--space-l-xl`    |
| xl-2xl  | 54px                 | 80px                  | `--space-xl-2xl`  |
| 2xl-3xl | 72px                 | 120px                 | `--space-2xl-3xl` |

### Custom Pairs

We've also defined custom pairs for specific use cases:

| Name | Small screen (330px) | Large screen (1240px) | CSS Variable  |
| ---- | -------------------- | --------------------- | ------------- |
| s-l  | 18px                 | 40px                  | `--space-s-l` |

### Usage

These spacing variables can be used for margins, padding, grid gaps, and other spatial properties:

```css
.card {
	padding: var(--space-m);
	margin-bottom: var(--space-l);
}

.hero {
	padding: var(--space-xl) 0;
}

.content-gap {
	gap: var(--space-s-m);
}
```

## Fluid Grid System

Our fluid grid system is designed to adapt to different screen sizes while maintaining consistent proportions.

### Basic Configuration

```css
:root {
	--grid-max-width: 77.5rem; /* 1240px */
	--grid-gutter: var(
		--space-s-l,
		clamp(1.125rem, 0.6264rem + 2.4176vw, 2.5rem)
	);
	--grid-columns: 12;
}
```

### Grid Container

The grid container defines the maximum content width and adds gutters on the sides:

```css
.fluid-grid-container {
	max-width: var(--grid-max-width);
	padding-inline: var(--grid-gutter);
	margin-inline: auto;
}
```

### Grid

The grid itself uses CSS Grid with fluid gutters:

```css
.fluid-grid {
	display: grid;
	gap: var(--grid-gutter);
}
```

### Usage

Here's how to use the grid system in your HTML:

```html
<div class="fluid-grid-container">
	<div class="fluid-grid" style="grid-template-columns: repeat(12, 1fr);">
		<div style="grid-column: span 4;">Column 1</div>
		<div style="grid-column: span 4;">Column 2</div>
		<div style="grid-column: span 4;">Column 3</div>
	</div>
</div>
```

For responsive layouts, you can use media queries or modern CSS functions like `minmax()`:

```css
.responsive-grid {
	display: grid;
	gap: var(--grid-gutter);
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

## Application in the Project

### Base Text

The site's base text uses `--step-0` with a line height of `--lh-0`.

### Heading Hierarchy

- H1: `--step-5` / `--lh-5`
- H2: `--step-4` / `--lh-4`
- H3: `--step-3` / `--lh-3`
- H4: `--step-2` / `--lh-2`
- H5: `--step-1` / `--lh-1`
- H6: `--step-0` / `--lh-0`

### Small Text

Small text (such as footnotes, captions) uses `--step--1` with a line height of `--lh--1`.

### Component Spacing

- Small components (cards, buttons): `--space-xs` to `--space-s`
- Medium components (sections, forms): `--space-m` to `--space-l`
- Large components (heroes, banners): `--space-xl` to `--space-3xl`
- Spacing between sections: `--space-l-xl` or `--space-xl-2xl`

## Advantages of This Approach

1. **Consistency**: All elements follow the same proportional scale
2. **Adaptability**: The design automatically adapts to all screen sizes
3. **Maintainability**: Changes can be made in one place
4. **Performance**: Less CSS code to load and process
5. **Visual harmony**: Spacing and text sizes are proportional

## Resources

For more information on fluid systems and the calculations used, see:

- [Utopia.fyi Type Calculator](https://utopia.fyi/type/calculator)
- [Utopia.fyi Space Calculator](https://utopia.fyi/space/calculator)
- [Utopia.fyi Grid Calculator](https://utopia.fyi/grid/calculator)
- [CSS Tricks: Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/)
- [Smashing Magazine: Fluid Typography](https://www.smashingmagazine.com/2016/05/fluid-typography/)
