# FRONTEND.md — Böri Frontend Specification

## 1. Website Purpose

The website is a premium frontend e-commerce experience for **Böri**, a modern menswear brand inspired by ancient Turkic heritage.

The site should sell the feeling of the brand before selling the products.

The user should immediately feel:

- Premium
- Minimal
- Dark
- Cultural
- Masculine
- Editorial
- Modern
- Trustworthy

## 2. Core Pages

### 2.1 Homepage `/`

Homepage must communicate the brand’s full visual world.

Required sections:

1. Mobile-first header
2. Hero section
3. Horizontal sliding product cards
4. Featured collection / editorial block
5. Product preview grid
6. Brand story teaser
7. Footer

### 2.2 Products Page `/products`

A simple product listing page.

Required:

- Page title
- Category/filter area visually
- Product grid
- Product cards
- Premium spacing
- Mobile 1-column grid
- Tablet 2-column grid
- Desktop 3 or 4-column grid

Filters can be static in the first version.

Suggested filters:

- All
- T-Shirts
- Hoodies
- Sweatshirts
- Accessories

### 2.3 Product Detail Page `/products/[slug]`

Required:

- Large product image
- Product title
- Price
- Color options
- Size options
- Add to cart button
- Material details
- Print details
- Story / motif explanation
- Related products

Mobile order:

1. Product image
2. Product title
3. Price
4. Options
5. Add to cart
6. Details
7. Related products

Desktop order:

- Left: large image / image gallery
- Right: sticky product information panel

### 2.4 About Page `/about`

Required:

- Brand manifesto
- Short origin story
- Cultural inspiration
- Material / production philosophy
- Large editorial image block

Avoid long historical explanations.

## 3. Header

Header must be minimal and premium.

Mobile:

- Logo left
- Menu button right
- Cart icon/text right
- Dark translucent background
- Sticky top

Desktop:

- Logo left
- Navigation center/right
- Cart/search right

Navigation items:

- Collection
- Lookbook
- About
- Journal
- Cart

Design:

- Thin uppercase text
- High letter spacing
- Small size
- Subtle bronze hover
- No heavy borders

## 4. Hero Section

Hero must be cinematic.

Mobile layout:

- Text first or image first depending visual balance
- Large serif headline
- Short supporting text
- One CTA
- Hero image below or behind with dark overlay

Desktop layout:

- Split layout
- Left: headline and CTA
- Right: large campaign image
- Background: dark material texture or subtle tamga mark

Hero text:

```txt
Rooted in the steppe.
Worn by the future.
```

Subtext:

```txt
Premium menswear shaped by ancient Turkic symbols, steppe geometry and modern restraint.
```

CTA:

```txt
Explore Collection
```

## 5. Product Slider

This is a key visual feature.

Requirement:

- Horizontal scrolling product cards
- Native scroll, no animation library
- On mobile, cards should swipe naturally
- On desktop, multiple cards visible
- Center/featured card can be larger
- Cards may slightly overlap on large screens if it looks premium
- Each card should have subtle motif details around the corners

Card visual style:

- Dark card background
- Large product image
- Thin bronze/stone border
- Tiny tamga mark in one corner
- Low-opacity geometric texture
- Product title in serif
- Category or collection in uppercase small sans-serif
- “Explore →” text link

Card hover desktop only:

- Slight image scale
- Border becomes warmer
- Background deepens
- No dramatic animation

## 6. Product Card Component

ProductCard props:

```ts
type ProductCardProps = {
  title: string
  slug: string
  category: string
  price?: number
  image: string
  motif?: string
  variant?: "dark" | "light"
}
```

Required elements:

- Product image
- Product name
- Category/collection
- Price if available
- Link to product detail
- Decorative motif frame

Accessibility:

- Image must have alt text
- Entire card can be clickable but should remain semantic

## 7. MotifFrame Component

Create a reusable visual component for subtle Turkic-inspired borders.

It should support:

```ts
type MotifFrameProps = {
  children: React.ReactNode
  variant?: "corner" | "border" | "background"
  intensity?: "low" | "medium"
}
```

Usage:

- Product cards
- Hero background
- Editorial blocks
- Product detail image frame

Rules:

- Motifs must be subtle.
- Motifs must never reduce readability.
- Motifs must not look like clipart.
- Use CSS borders, pseudo-elements, SVG line marks, or background patterns.

## 8. Product Grid

Used on `/products`.

Mobile:

- 1 column

Tablet:

- 2 columns

Desktop:

- 3 or 4 columns

Product cards here should be cleaner than homepage slider cards.

Required:

- Image
- Name
- Price
- Collection
- Hover state on desktop

## 9. Editorial Blocks

Editorial blocks make the site feel premium.

Use:

- Large serif headlines
- Short poetic copy
- Large images
- Warm stone / dark contrast backgrounds
- Asymmetrical layout on desktop
- Stacked layout on mobile

Example copy:

```txt
Not heritage as decoration.
Heritage as structure.
```

```txt
The mark is quiet. The memory is not.
```

## 10. Product Detail Layout

Visual priority:

1. Product photography
2. Product name
3. Price
4. Purchase options
5. Material credibility
6. Cultural story

Avoid clutter.

Product info example:

```txt
Kıpçak Wolf T-Shirt
₺1.250
Color: Void Black / Sand / Linen
Size: S / M / L / XL
```

Details:

- 100% cotton
- Premium screen print
- Oversized fit
- Limited production
- Inspired by steppe geometry and tamga forms

## 11. Footer

Footer should be calm and premium.

Required columns:

- Brand
- Collection
- Support
- Social

Footer copy:

```txt
Ancient symbols. Modern legacy.
```

Support links:

- Shipping
- Returns
- Contact
- Size Guide

## 12. Responsive Rules

Use Tailwind mobile-first classes.

Breakpoints:

- Default: mobile
- `sm`: large phones
- `md`: tablets
- `lg`: desktop
- `xl`: large desktop

Mobile priorities:

- Fast loading
- Clear product cards
- Large tap areas
- Minimal text
- No visual clutter

Desktop priorities:

- Editorial composition
- Strong whitespace
- Larger imagery
- Refined product slider

## 13. Styling Rules

Use Tailwind CSS with custom theme tokens.

Recommended theme colors:

```ts
colors: {
  void: "#0E0E0E",
  dark: "#151412",
  iron: "#282725",
  stone: "#C8B49A",
  sand: "#D8C8A9",
  linen: "#E5E1D6",
  bronze: "#8B7650"
}
```

Font direction:

- Serif display font for headings
- Sans-serif for body/navigation

Do not use more than two font families.

## 14. Images

For now use placeholder images or local mockups.

Later, product photos should be replaced with real product images.

Image style:

- Dark campaign photography
- Natural lighting
- Stone, leather, linen, metal, mountain, steppe atmosphere
- Product-focused but editorial

Avoid:

- Stock-photo smiling models
- Bright studio e-commerce look
- Cheap mockup feel
- Overly aggressive warrior visuals

## 15. Static Data

Use `/data/products.ts`.

Example:

```ts
export const products = [
  {
    title: "Kıpçak Wolf T-Shirt",
    slug: "kipcak-wolf-t-shirt",
    category: "T-Shirt",
    collection: "Kıpçak Origins",
    price: 1250,
    image: "/images/products/kipcak-wolf.jpg",
    colors: ["Void Black", "Sand", "Linen"],
    sizes: ["S", "M", "L", "XL"],
    description: "A premium cotton tee inspired by steppe geometry and tamga forms."
  }
]
```

## 16. Build Order

Build in this order:

1. Global styles and Tailwind theme
2. Header
3. Footer
4. MotifFrame
5. ProductCard
6. ProductSlider
7. Homepage
8. Products page
9. Product detail page
10. About page
11. Responsive polish
12. Accessibility check
13. Performance cleanup

## 17. What Not To Build

Do not build yet:

- Admin panel
- Payment system
- Database
- Authentication
- Real checkout
- Complex cart logic
- Animation system

## 18. Final Frontend Goal

The final frontend should look like a serious premium fashion brand.

The product card slider must be one of the strongest parts of the site.

The Turkic identity should be visible through refined details, especially:

- Card corners
- Subtle tamga marks
- Background geometry
- Color palette
- Material textures
- Editorial language

The website must not feel generic.
