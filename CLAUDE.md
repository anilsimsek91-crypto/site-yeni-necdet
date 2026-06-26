# CLAUDE.md — Böri Next.js Project Instructions

## Project Identity

This project is a premium fashion e-commerce website for a brand named **Böri**.

Böri sells modern clothing products inspired by ancient Turkic civilizations, especially Göktürk, Kıpçak, Hun, Bozkır culture, tamga symbols, runic marks, steppe geometry, leather, stone, bronze, and natural material textures.

The website must feel like a **premium international fashion brand**, not a souvenir shop, not a nationalist website, not a historical museum, and not a fantasy/viking-inspired brand.

Core positioning:

> Ancient Turkic visual memory translated into modern premium menswear.

## Technology Stack

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components where appropriate
- Client Components only where interactivity is needed
- Mobile-first responsive development
- No animation libraries
- No Framer Motion
- No GSAP
- No unnecessary third-party UI kits
- No heavy component libraries

Preferred structure:

```txt
/app
  /page.tsx
  /products
    /page.tsx
    /[slug]
      /page.tsx
  /collections
    /page.tsx
  /about
    /page.tsx
/components
  Header.tsx
  Footer.tsx
  Hero.tsx
  ProductCard.tsx
  ProductSlider.tsx
  EditorialBlock.tsx
  ProductGrid.tsx
  ProductDetail.tsx
  MotifFrame.tsx
  Button.tsx
/data
  products.ts
  collections.ts
/lib
  utils.ts
/styles
  globals.css
```

## Development Rules

1. Build mobile-first.
2. Then scale up to tablet and desktop.
3. Keep the interface minimal, expensive, and editorial.
4. Avoid generic Shopify-template feeling.
5. Do not overuse motif graphics.
6. Do not use loud red, flag-like colors, or excessive gold.
7. Use subtle bronze accents only.
8. Prioritize spacing, typography, imagery, and layout.
9. All components must be reusable.
10. Keep code clean and production-ready.
11. Avoid unnecessary state.
12. Avoid overengineering.
13. Use semantic HTML.
14. Use accessible buttons, links, labels, and alt text.
15. Optimize images using Next.js `<Image />`.
16. Do not hardcode repeated product UI manually; use mapped data.
17. Do not add animations unless explicitly requested.

## Visual Direction

Design must follow `DESIGN.md`.

Primary visual characteristics:

- Dark cinematic base
- Premium editorial typography
- Subtle Turkic motifs
- Sliding product cards
- Warm stone / sand / linen contrast areas
- Very restrained bronze accents
- Large product imagery
- Quiet luxury feeling
- Masculine but refined
- Minimal navigation
- Sharp product presentation

## Mobile-First Rules

Mobile is the primary experience.

Mobile requirements:

- Header must be clean and compact.
- Product cards should scroll horizontally.
- Hero section should stack vertically.
- Text must remain readable.
- CTA must be easy to tap.
- Product detail page must show image first, then product info.
- No tiny decorative elements that damage usability.
- Motifs should not clutter small screens.
- Maintain premium spacing even on mobile.

Desktop requirements:

- Hero can use split layout.
- Product slider can show multiple overlapping cards.
- Editorial sections can use asymmetrical layouts.
- Product detail can use two-column layout.

## No Animation Requirement

Do not implement complex animations.

Allowed micro-interactions:

- Simple hover background change
- Border color change
- Image scale on hover
- Button hover opacity or background
- Horizontal native scroll for product cards

Not allowed:

- Scroll-triggered animation
- Page transition animation
- Parallax animation
- GSAP
- Framer Motion
- Complex JS animation
- Autoplay carousel

## Content Tone

Tone should be:

- Premium
- Sparse
- Confident
- Cultural but not explanatory
- Editorial
- Minimal

Avoid long paragraphs.

Good examples:

- “Rooted in the steppe. Worn by the future.”
- “Ancient symbols. Modern legacy.”
- “Not heritage as decoration. Heritage as structure.”
- “Carved from memory. Built for today.”
- “The material speaks.”

Avoid:

- “Türk tarihinin eşsiz motifleriyle tasarlanmış tişörtler”
- “Atalarımızın izinde”
- “Şanlı tarihimiz”
- Any political, ideological, or propaganda-like language

## Performance Targets

- Lighthouse mobile performance should be prioritized.
- Avoid large JS bundles.
- Use optimized images.
- Use CSS instead of JS where possible.
- Keep fonts limited to 2 families max.
- Avoid unnecessary npm packages.
- Use static data first.
- The initial version does not need a backend.

## Initial Scope

Build a frontend-only e-commerce prototype.

Required pages:

1. Homepage
2. Collection / products listing page
3. Product detail page
4. About / brand story page

Required components:

- Header
- Footer
- Hero
- Product horizontal slider
- Product card
- Product grid
- Editorial block
- Product detail layout
- Motif frame
- CTA button

Do not build:

- Real payment
- Real authentication
- Admin panel
- Database
- Cart backend
- Checkout backend

For cart, only create visual/static UI if needed.

## Final Instruction

The final output must look like a premium fashion website with subtle ancient Turkic DNA.  
Do not make it look like a standard template, costume brand, museum website, or nationalist merchandise store.
