---
title: "Mayo — IT Support Portfolio"
palette: monochrome
typography_sans: "Inter"
typography_mono: "JetBrains Mono"
elevation: flat-tonal
radius: 0.375rem
grid_breakpoints: [640, 1024]
container_max: 64rem
---

# DESIGN SYSTEM

## 1. Overview

This is a **monochrome engineering** portfolio for an IT Support specialist. The design language is deliberately austere — black/white only, no accent color, no gradient, no decorative flourish. The visual identity communicates precision, reliability, and technical clarity through:

- Strict black-and-white palette with inverted light/dark themes
- JetBrains Mono used for labels, badges, and section eyebrows — establishing a technical, engineering-first tone
- Flat cards with thin borders, no shadows, no depth tricks
- Muted gray alternating sections creating rhythm without color

The portfolio reads like documentation, not a marketing page. Every element earns its place.

---

## 2. Colors

### Light Mode
| Token | Hex | Role |
|---|---|---|
| `--background` | `#ffffff` | Page background |
| `--foreground` | `#000000` | Primary text |
| `--primary` | `#000000` | Button fills, high-emphasis actions |
| `--primary-foreground` | `#ffffff` | Text on primary |
| `--border` | `#cccccc` | Card borders, separators, dividers |
| `--muted` | `#f5f5f5` | Alt section bg, button hover fills, badge fills |
| `--muted-foreground` | `#666666` | Secondary text, descriptions |
| `--subtle` | `#737373` | Tertiary text — labels, eyebrows, timestamps |

### Dark Mode
| Token | Hex | Role |
|---|---|---|
| `--background` | `#000000` | Page background |
| `--foreground` | `#ffffff` | Primary text |
| `--primary` | `#ffffff` | Button fills (inverted) |
| `--primary-foreground` | `#000000` | Text on primary (inverted) |
| `--border` | `#333333` | Card borders, separators |
| `--muted` | `#1a1a1a` | Alt section bg, hover fills |
| `--muted-foreground` | `#a3a3a3` | Secondary text |
| `--subtle` | `#737373` | Tertiary text — unchanged between modes |

### Color Rules
- **Primary** = pure black (light) or pure white (dark). Used for buttons and high-emphasis elements only.
- **Muted** = near-background tint. Used for alternating section backgrounds (`bg-muted`) and hover states.
- **Subtle** = always `#737373`. Never changes between themes. Reserved for monospaced labels, eyebrows, timestamps.
- **No accent color exists.** The design is achromatic by intention.

---

## 3. Typography

### Font Stacks
| Role | Font | Fallbacks | Usage |
|---|---|---|---|
| Sans | Inter (Next.js `font-sans`) | `ui-sans-serif, system-ui, sans-serif` | Body text, headings, descriptions, buttons |
| Mono | JetBrains Mono (Next.js `font-mono`) | — | Section eyebrows, badges, card labels, timestamps, sheet titles |

### Type Scale
| Size | Tailwind Class | px | Usage |
|---|---|---|---|
| `xs` | `text-xs` | 12 | Eyebrows (`01 / About`), timestamps, fine print |
| `sm` | `text-sm` | 14 | Body text, button labels, badge text, card content |
| `base` | `text-base` | 16 | Paragraph descriptions |
| `lg` | `text-lg` | 18 | Hero description |
| `xl` | `text-xl` | 20 | — |
| `2xl` | `text-2xl` | 24 | Section titles (mobile) |
| `3xl` | `text-3xl` | 30 | Section titles (desktop) |
| `4xl` | `text-4xl` | 36 | Hero title (mobile) |
| `5xl` | `text-5xl` | 48 | Hero title (desktop) |

### Type Treatments
- **Headings**: `font-semibold tracking-tight` — Inter semibold, tight letter-spacing
- **Eyebrows/labels**: `font-mono text-xs uppercase tracking-widest` — JetBrains Mono, all-caps, wide tracking
- **Body**: `text-sm leading-6` or `text-base leading-7` — relaxed line-height for readability
- **Badge text**: `font-mono text-xs font-medium` — monospace at 12px, medium weight
- **Section title**: `text-2xl/3xl font-semibold tracking-tight` — scales with breakpoint

### Font Usage Pattern
```
JetBrains Mono (mono) → labels, badges, eyebrows, timestamps, sheet headers
Inter (sans)          → everything else: headings, body, buttons, links
```

---

## 4. Layout

### Container
- Max width: `max-w-5xl` = **64rem (1024px)**
- Horizontal padding: `px-4` (mobile) → `sm:px-6` (≥640px)
- Centered: `mx-auto w-full`

### Breakpoints
| Token | Value | Behavior |
|---|---|---|
| Base | 0–639px | Single column, mobile layout |
| `sm` | ≥640px | Padding increases, font sizes bump up, horizontal flex layouts activate |
| `md` | ≥768px | Desktop nav appears, mobile sheet hidden |
| `lg` | ≥1024px | 3-column grids (projects, troubleshooting flow) |

### Grid Patterns
| Pattern | Tailwind | Usage |
|---|---|---|
| 1-col | `grid grid-cols-1` | Default mobile, experience list |
| 2-col | `sm:grid-cols-2` | About facts, capabilities, skills |
| 3-col | `lg:grid-cols-3` | Project cards, troubleshooting flow |

Gap: `gap-4` (16px) consistently across all grids.

### Spacing Scale
| Token | Value | Usage |
|---|---|---|
| Section vertical padding | `py-12 sm:py-16` | Content sections |
| Hero vertical padding | `py-16 sm:py-24` | Hero section (larger) |
| Card padding | `p-4` to `p-5` | Cards, fact items |
| Between sections | `Separator` (1px line) | After hero, inside footer |
| Between content groups | `mt-6` | After section headers |
| Between items | `gap-1` to `gap-4` | Varies by context |

### Alternating Sections
- **On-white sections**: Hero, About, Projects, Experience
- **On-muted sections**: Capabilities, Skills, Contact — use `bg-muted` background

---

## 5. Elevation

The design is **flat with tonal variation**. No drop shadows, no glass effects, no blur.

| Layer | Treatment |
|---|---|
| Page | Solid background (`--background`) |
| Sections | Tonal shift via `bg-muted` — no border, just color contrast |
| Cards | `border border-border bg-background` — thin border, same bg as page |
| Sheet overlay | `bg-black/60` — semi-transparent dark overlay |
| Sheet panel | `shadow-lg` — only elevated element in the system |
| Navbar | `sticky top-0` with `border-b border-border` — stays flat, grounded by bottom border |

### Separation Hierarchy
1. **Page-level**: 1px `Separator` component (`bg-border h-px`)
2. **Card-level**: `border border-border` on card wrappers
3. **Section-level**: `bg-muted` background alternation
4. **Navbar**: `border-b` bottom line

No z-index stacking complexity beyond: navbar (`z-40`), sheet (`z-50`).

---

## 6. Shapes

### Border Radius
| Token | Value | Tailwind Class | Usage |
|---|---|---|---|
| `--radius` | `0.375rem` | `rounded-md` | Cards, buttons, sheet close button, fact items |
| Full | `9999px` | `rounded-full` | Badge pill shape |

### Shape Rules
- **Cards**: Always `rounded-md` (6px). Never rounded-lg, never sharp.
- **Buttons**: `rounded-md` (6px). Same radius as cards.
- **Badges**: `rounded-full` — pill shape is the one exception.
- **Sheet overlay**: No radius (full-bleed).
- **Icons**: Square bounding boxes (`h-4 w-4`, `h-5 w-5`), no wrapper radius.

### Border Style
- All borders: `1px solid var(--border)` — hairline weight
- Border color is the only separator mechanism — no shadows, no dividers with height

---

## 7. Components

### Button
- **Variants**: `default` (primary bg), `secondary` (muted bg), `outline` (border only), `ghost` (hover fill only)
- **Sizes**: `default` (h-10), `sm` (h-9), `lg` (h-11), `icon` (h-11 w-11)
- **Hover**: Opacity shift — `hover:opacity-85` (default), `hover:opacity-80` (secondary), `hover:bg-muted` (outline/ghost)
- **Focus**: `focus-visible:outline-2 focus-visible:outline-offset-2`
- **Disabled**: `disabled:pointer-events-none disabled:opacity-50`
- **Icons**: 4px gap (`gap-2`), SVG constrained to `size-4`
- **Min touch target**: 44px (`min-h-[44px]` on links/buttons in nav/footer)

### Badge
- **Variants**: `default` (muted bg, bordered), `outline` (border only, muted-foreground text)
- **Shape**: Pill (`rounded-full`)
- **Font**: `font-mono text-xs font-medium` — always monospace
- **Usage**: Section eyebrows (`01 / About`), tech tags, status indicators, hero label

### Card (ad-hoc pattern, not a component)
- Wrapper: `rounded-md border border-border bg-background p-4` or `p-5`
- No hover state, no interactive behavior
- Used in: About facts, capability groups, project cards, experience items, troubleshooting steps

### SectionHeader
- **Structure**: Badge (eyebrow) → h2 title → optional description paragraph
- **Eyebrow**: `Badge variant="outline"` with monospace uppercase text
- **Title**: `text-2xl sm:text-3xl font-semibold tracking-tight`
- **Description**: `max-w-2xl text-base leading-7 text-muted-foreground`
- **Spacing**: `gap-3` between elements, `mt-6` below for content

### Navbar
- **Position**: `sticky top-0 z-40`
- **Border**: `border-b border-border`
- **Height**: `h-16`
- **Layout**: Flexbox, logo left, nav links center-right
- **Desktop**: Horizontal link list with `md:flex`
- **Mobile**: Sheet drawer triggered by ghost icon button
- **Logo**: `font-mono text-sm font-semibold uppercase tracking-widest`
- **Nav links**: `text-sm text-muted-foreground hover:text-foreground` with `rounded-md px-3`

### Sheet (Mobile Nav)
- **Overlay**: `bg-black/60`
- **Panel**: Right side, `w-3/4 max-w-sm`, `border-l border-border`
- **Title**: `font-mono text-sm uppercase tracking-widest`
- **Close button**: Ghost icon, `h-11 w-11` touch target
- **Nav items**: `min-h-[44px]` links with `hover:bg-muted`

### Separator
- 1px line using `bg-border`
- Horizontal: `h-px w-full`
- Vertical: `h-full w-px`
- Decorative by default (`decorative={true}`)

### ThemeToggle
- Ghost icon button, toggles between Sun/Moon icons
- Uses `next-themes` for dark mode switching
- Present in both desktop nav and mobile sheet header

---

## 8. Dos and Don'ts

### Do
- **Use monochrome only.** The achromatic palette is the identity. Don't introduce hue.
- **Alternate sections with `bg-muted`** to create visual rhythm without color.
- **Use JetBrains Mono for all labels, eyebrows, and badges.** It signals technical credibility.
- **Maintain 44px minimum touch targets** on interactive elements.
- **Keep cards flat** — border + background, no shadows, no elevation tricks.
- **Use opacity hover states** on primary buttons, not color shifts.
- **Keep the design austere** — this is documentation, not decoration.
- **Respect `prefers-reduced-motion`** — the CSS already disables animations.

### Don't
- **Don't add accent colors.** The monochrome palette is deliberate.
- **Don't add drop shadows to cards.** The only shadow is on the Sheet panel.
- **Don't use `rounded-lg` or `rounded-xl` on cards.** The radius is `rounded-md` (6px) everywhere.
- **Don't use gradient backgrounds.** Flat solid fills only.
- **Don't break the container width** — always `max-w-5xl mx-auto`.
- **Don't use Inter for labels or eyebrows.** Those stay monospace.
- **Don't add animation beyond what exists.** The system is intentionally motion-restrained.
- **Don't stack z-index layers** — only navbar (`z-40`) and sheet (`z-50`) use z-index.
- **Don't invent new card styles.** The `border bg-background rounded-md p-5` pattern is consistent.
- **Don't use colored hover states on links.** Always `hover:text-foreground` or `hover:bg-muted`.
