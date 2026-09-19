# DESIGN.md — Mayo IT Support Portfolio

## Visual Identity

**Palette**: Monochrome grayscale only. No accent colors.
**Fonts**: Inter (UI), JetBrains Mono (mono labels/data).
**Icons**: Lucide (all UI) + custom brand SVGs (GitHub, LinkedIn only).

## Section Variety Map

Each section uses a distinct visual treatment to create rhythm across the page.

| Section | Treatment | Key Pattern |
|---------|-----------|-------------|
| Hero | Thesis + artifact split | Ticket ledger strip with stagger animation |
| About | Bento grid (8/4) | Profile panel + quick facts sidebar + pillar cards |
| Capabilities | 2-column grid | Left-bordered cards + horizontal troubleshooting flow |
| Projects | Alternating editorial | 12-col grid, 7/5 split, alternating order, spec column |
| Skills | Ledger-style single card | Category separators with dot-list rows |
| Experience | Timeline | Vertical line, alternating period labels, center nodes |
| Contact | 2-column bento | Direct card + social card with brand icons |
| Footer | Minimal bar | Icon-only social links, brand icons |

## Brand Icons

`components/ui/brand-icons.tsx` — `GithubIcon` + `LinkedinIcon`
- Inline SVGs with `currentColor` (inherits from parent)
- `aria-hidden="true"` on all instances
- Size prop: 16px default, 20px for contact cards
- Used in: contact section + footer only

## Eyebrow Format

All section eyebrows use: `NN · SectionName` (middot separator, not slash).

## Animation

- Hero: CSS `@keyframes stagger-reveal` with `prefers-reduced-motion` fallback
- No framer-motion. No parallax. No bounce/infinite loops.
- Transitions: `transition-colors` for hover states only.

## Layout Rules

- Max width: `max-w-5xl` (1024px)
- Mobile-first, 375px no-overflow
- `scroll-mt-24` on all sections (nav offset)
- `scroll-padding-top: 6rem` on `html`
- 44px minimum touch targets
- `focus-visible` ring on interactive elements
