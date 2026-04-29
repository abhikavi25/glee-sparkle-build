
## Goal

Ship an extraordinary, on-brand 4-page D2C site for **Glee Kids by GleeNutrico** in one delivery: warm, joyful, credible, story-driven. Frontend-only cart with the WithLove coupon and prepaid logic working end-to-end.

## Design system (logo-led palette)

The uploaded logo drives the palette. Yellow becomes a small accent only.

```text
--glee-green        #4CAF50   primary brand (logo leaf, "Nutrico")
--glee-green-deep   #2E7D32   text on cream, headings accent
--glee-blue         #4FC3F7   secondary brand (logo leaf, "Glee")
--glee-blue-deep    #0288D1   links / hover
--glee-cream        #FFF8EE   page background
--glee-vanilla      #F5E6C3   product card surfaces
--glee-choco        #2A1A0E   body text / footer
--glee-coral        #FF6B6B   CTA + urgency
--glee-sunshine     #FFD93D   small accents (badges, highlights)
--text-muted        #7A6A55
```

Typography (Google Fonts, preconnected, only weights used):
- Display: **Fredoka** 600/700 (single variable family — replaces Fredoka One + Nunito ExtraBold cleanly)
- Subhead: **Nunito** 700
- Body: **DM Sans** 400/500
- Accent handwriting: **Caveat** 600

Visual language:
- Border radius: cards 16px, modals 24px, CTAs full pill
- Organic SVG blob/wave dividers between sections
- Floating millet/cocoa/leaf SVG confetti in hero
- Micro-interactions: hover `scale-1.04` on product cards, `floating` keyframe on hero tin, shimmer on primary CTA
- Pill badges with emoji: 🌾 Millet-Powered · 🚫 No Sugar · ✅ No Maltodextrin · 🌿 No Preservatives

All colors registered as semantic tokens in `src/styles.css` via `@theme inline` so Tailwind classes like `bg-glee-cream`, `text-glee-choco`, `bg-glee-coral` work.

## Information architecture

Routes (TanStack Start, file-based, each with full `head()` meta):

```text
src/routes/
  __root.tsx          shell + global 404 + Header/Footer host
  index.tsx           Home
  products.choco-vanilla-nutrition-drink.tsx   Product
  blog.tsx            Blog index
  our-story.tsx       Our Story
```

Shared components:
```text
src/components/
  layout/Header.tsx           sticky nav, mobile drawer (Sheet)
  layout/Footer.tsx           choco bg, social, links
  layout/SectionDivider.tsx   SVG wave/blob
  brand/Logo.tsx              uses uploaded GleeNutrico logo
  brand/Badge.tsx             pill badge w/ emoji
  brand/FloatingIcons.tsx     scattered SVG millets/cocoa/leaves
  product/ProductCard.tsx
  product/PriceBlock.tsx      prepaid/COD + savings
  product/QuantityStepper.tsx
  product/CouponInput.tsx     WithLove validation + confetti
  product/AddToCartBar.tsx
  cart/CartDrawer.tsx         slide-in cart (Sheet)
  cart/CartProvider.tsx       React context + reducer
  reviews/ReviewCard.tsx
  blog/BlogCard.tsx
  ui/* (shadcn already present)
src/lib/
  pricing.ts                  pure pricing + coupon math (unit-tested mentally)
  blogData.ts                 6 articles + 1 featured (titles/excerpts from brief)
  productData.ts              Choco Vanilla SKU
```

## Pages

**Home (`/`)** — full brief implemented:
1. Hero (split, floating tin, confetti SVGs, dual CTA, shimmer)
2. Trust ticker bar
3. "Real Talk" story + comparison card (choco header, vanilla/cream stripes)
4. Product spotlight + 3-step "How to use" strip
5. 3-column "Glee Difference" feature cards
6. 3 review cards (grid desktop / carousel mobile via embla — already in deps)
7. "Glee Deal" coupon banner (sunshine→vanilla gradient, confetti texture)
8. Blog teaser (3 cards from blogData)
9. Footer

**Product (`/products/choco-vanilla-nutrition-drink`)**:
- 2-col hero: gallery (main + 3 thumbs) / info + breadcrumb + rating + badges
- PriceBlock with COD ₹599 vs Prepaid ₹549, quantity stepper, CouponInput (WithLove), Buy Now (coral) + COD (outlined), free-shipping note
- Tabs (shadcn Tabs): About / Ingredients / How to Use
- Reviews block with 5-star distribution bars + 3 detailed reviews + "Write a Review" CTA
- "You're Getting" value strip
- JSON-LD Product schema + FAQ schema injected via route `head()` script tag

**Blog (`/blog`)**:
- Header + category filter pills (client-side filter on tag)
- Featured full-width article card (Maltodextrin Problem)
- 6-card grid (titles/excerpts from brief verbatim)
- Newsletter signup strip (sunshine bg, email input + Subscribe, no backend — toast on submit)

**Our Story (`/our-story`)**:
- Hero headline + subhead
- Long-form narrative ("It Started With a Label.", "Why 'Glee'?")
- 3-column values (Grain-First / Never List / Kid-Approved)
- Dual CTA (Shop / Read the Blog)

Note: Individual blog post pages are out of scope for this turn (brief specifies 4 pages). Blog cards link to `/blog#article-slug` placeholders; we can add post routes in a follow-up.

## Cart + pricing logic (frontend only)

`src/lib/pricing.ts` — pure function:

```ts
type Method = "prepaid" | "cod";
calculate({ qty, method, coupon }) => {
  base: 599 * qty,
  prepaidDiscount: method === "prepaid" ? 50 * qty : 0,
  couponDiscount: method === "prepaid" && coupon === "WITHLOVE"
    ? (qty >= 3 ? 200 : qty >= 2 ? 100 : 0) : 0,
  total, savings, breakdown[]
}
```

- `CartProvider` (React context + `useReducer`) holds items, method, coupon
- Coupon input is case-insensitive, shows green tick + "🎉 Code WithLove applied! You're saving ₹X today." on success, error message if used on COD or qty 1
- Confetti burst on coupon success via `canvas-confetti` (lightweight, ~3KB) — added with `bun add canvas-confetti`
- "Buy Now" opens a `CartDrawer` (shadcn Sheet) with summary + a faux "Place order" success toast (no backend)
- Prepaid/COD toggle in PriceBlock recomputes live

## Logo + assets

- Copy uploaded logo: `user-uploads://ChatGPT_Image_Jan_17_2026_12_26_39_PM_1.png` → `src/assets/gleenutrico-logo.png`, imported via `@/assets/...` in `Logo.tsx` (used in nav + footer; footer uses a white-bg rounded chip behind it for contrast on choco)
- Product image: generate one premium hero image of a Glee Kids Choco Vanilla 400g tin (millet + cocoa cues, brand colors) → `src/assets/product-choco-vanilla.png`
- Floating ingredient icons: inline SVG (millet sprig, cocoa bean, vanilla pod, leaf, droplet) in `FloatingIcons.tsx` — no extra deps
- Blog card images: 3 generated thematic illustrations (millet bowl, label-flipping parent, kid with mug) — fast tier to keep cost low

## Tone & SEO

- Copy uses brief verbatim where provided (headlines, story, reviews, blog titles/excerpts, FAQs)
- H1 per page contains the primary keyword from Section 7
- Each route's `head()` sets unique `title`, `description`, `og:title`, `og:description`; product route adds `og:image` from the generated tin image
- All product/asset images get descriptive alt (e.g. `Glee Kids Choco Vanilla Millet Nutrition Drink 400g No Sugar`)
- Product JSON-LD (Product + AggregateRating + Offer) and FAQPage JSON-LD on product route

## Animations

- Tailwind keyframes added in `styles.css`: `float` (hero tin, 4s ease-in-out infinite), `shimmer` (CTA overlay), `marquee` (trust ticker), `fade-in-up` (section reveals via `IntersectionObserver` hook — kept tiny, no Framer Motion to protect Lighthouse)
- Hover: `transition-transform hover:scale-[1.04]` on product/review/blog cards

Skipping Framer Motion despite the brief — Tailwind keyframes + a 30-line IO hook hit the same feel at a fraction of the JS, matching the brief's "Lighthouse ≥ 90" requirement.

## Responsive

Mobile-first at 375px. Breakpoints: `md:768`, `xl:1280`. Mobile nav = hamburger → shadcn `Sheet` drawer. Reviews + blog grids collapse to 1-col with horizontal-snap carousel where the brief calls for it.

## Dependencies to add

- `canvas-confetti` (+ `@types/canvas-confetti`) — coupon celebration

Everything else (shadcn, embla, lucide, sonner) is already in the project.

## Out of scope (call-outs)

- Individual blog article pages (brief lists 4 pages; can add `/blog/$slug` next turn)
- Real payment processing / backend persistence
- Auth, user accounts, order history
- Real review submission (the "Write a Review" button opens a "coming soon" toast)

## Build order

1. Install `canvas-confetti`, copy logo, generate product + 3 blog images (parallel)
2. Update `src/styles.css` with tokens, fonts, keyframes
3. Build shared layout: `Header`, `Footer`, `Logo`, `SectionDivider`, `FloatingIcons`, `CartProvider`, `CartDrawer`
4. Build `pricing.ts`, `productData.ts`, `blogData.ts`
5. Build product sub-components (`PriceBlock`, `CouponInput`, `QuantityStepper`, `AddToCartBar`)
6. Build the 4 routes with full content + per-route `head()`
7. Wire `__root.tsx` to mount `CartProvider`, `Header`, `<Outlet/>`, `Footer`, `<Toaster/>`
8. Verify build, visually QA via screenshot at 375 + 1280
