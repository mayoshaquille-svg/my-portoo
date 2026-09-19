# DESIGN.md — Mayo IT Support Portfolio

## Identity: "The Service Desk Console"

Dark-first operations console aesthetic. Layered surfaces, mono telemetry labels, one accent color used sparingly for active state/CTA only. Porto-inspired layering principles, not colors.

## Colors

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `--background` | `#f8f8f6` | `#0c0c0c` | Page background |
| `--surface-0` | `#ffffff` | `#141414` | Card/panel surface |
| `--surface-1` | `#f0efeb` | `#1c1c1c` | Raised surface, secondary bg |
| `--surface-2` | `#e8e7e3` | `#242424` | Highest surface, hover state |
| `--foreground` | `#171717` | `#ededed` | Primary text |
| `--muted-foreground` | `#6b6b6b` | `#8a8a8a` | Secondary text |
| `--subtle` | `#8a8a8a` | `#6b6b6b` | Mono labels, telemetry |
| `--accent` | `#b45309` (amber-700) | `#fbbf24` (amber-400) | Signal: CTAs, active nav, status dots |
| `--accent-muted` | `#fef3c7` (amber-100) | `rgba(251,191,36,0.12)` | Accent background tints |
| `--border` | `#d4d3cf` | `#2a2a2a` | Default borders |
| `--border-accent` | `#d97706` | `#f59e0b` | Accent borders (CTA, timeline) |

**Accent: Amber** — ops/support identity (status panels, warning indicators), distinct from porto's indigo. <=10% screen coverage.

**Contrast**: amber-700 on white = 4.7:1 (AA). amber-400 on #141414 = 9.8:1 (AAA).

## Typography

- **Sans**: Inter — UI body text
- **Mono**: JetBrains Mono — section eyebrows, telemetry labels, nav brand, status badges
- **Eyebrow format**: `NN · SectionName` (middot, mono, 11px, uppercase, tracking-widest)
- **Heading hierarchy**: h1 > h2 > h3 strict, no skipped levels

## Surfaces & Elevation

Three surface layers, not flat borders:
- `bg-surface-0`: Default cards, navbar, footer
- `bg-surface-1`: Alternating section backgrounds, secondary panels
- `bg-surface-2`: Hover states, active elements
- `.console-glow`: Subtle amber ring on hover for key cards (pillars, contact, troubleshooting steps)

## Components

| Component | Treatment |
|-----------|-----------|
| Badge | `rounded-sm`, mono, 11px, uppercase, `accent` variant for highlights |
| Button | `accent` primary (amber), `secondary` (surface-1 + border), `outline`, `ghost` |
| SectionHeader | accent Badge eyebrow + h2 + muted description |
| Navbar | `surface-0/80` + backdrop-blur, accent dot brand mark, accent text for active |
| Card | `border-border bg-surface-0` with optional `.console-glow` |
| Separator | `bg-border` (default) |

## Section Variety

| Section | Background | Card Treatment | Layout |
|---------|------------|----------------|--------|
| Hero | `bg-background` | Telemetry card with console-glow | Split 3/5 + 2/5 |
| About | `bg-background` | Bento 8/4 + left-accent pillars | Grid 12-col |
| Capabilities | `bg-surface-1` | Flow rail + matrix cards, accent icons | Full-width flow + 2-col grid |
| Skills | `bg-surface-1` | Ledger card, dot indicators, accent category icons | Single card, 2-col inner grid |
| Experience | `bg-background` | Timeline with accent rail + alternating nodes | Center-rail timeline |
| Contact | `bg-surface-1` | Split bento, console-glow on email | 2-col grid |
| Footer | `bg-surface-0` | Icon-only social, accent brand dot | Minimal bar |

## Animation

- `.reveal` + `.reveal-delay-N`: staggered scroll-in (CSS @keyframes)
- `prefers-reduced-motion`: all animations/transitions killed
- No framer-motion, no parallax, no bounce, no infinite loops
- Hover: `transition-colors` on interactive, `.console-glow` on key cards

## Rules

- No gradient-text, no glass/blur (except navbar), no glow-blob, no emoji
- Mono labels only for: eyebrows, telemetry, status, nav brand
- Accent on-screen: <=10% (CTAs, active nav, status dots, timeline rail, left borders)
- Brand icons: `components/ui/brand-icons.tsx` (GitHub + LinkedIn, contact + footer only)
- All other icons: Lucide
- Server Components default; client islands: navbar + theme toggle only
- Responsive: 375/768/1024/1440, no overflow, 44px touch targets
- Content truth: no fabricated metrics/SLA/credentials
- Contact stays dummy: `hello@example.com`, `example.com` URLs + TODO
