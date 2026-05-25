## Goal
Make the hero feel like a top 1% D2C site — playful but composed, not clumsy. Fix three specific problems the user called out and layer in subtle "immersive" craft.

## Problems to fix

1. **Floating black/yellow dot lands ON the headline.** The `FloatingIcons` component scatters SVGs at fixed % coords (e.g. sunshine dot at `top: 6% / left: 42%`, coral sparkle at `top: 40% / right: 20%`) which collide with the H1 text on this viewport. Reads as clutter, not whimsy.
2. **CTA row looks clumsy.** "Grab Yours — ₹549" (filled coral) sitting next to "Save ₹50 with Prepaid ↓" (outlined choco) competes for attention — two equally-loud buttons, conflicting shapes, no hierarchy. The "↓" anchor link also points to an old `#glee-deal` section that no longer exists post-refactor.
3. **No immersive layering.** Hero is one flat plane: text left, product right, dots floating. Lacks depth, parallax, or any reward for hovering/scrolling.

## Plan

### 1. Re-stage the floating elements (`FloatingIcons.tsx`)
- Move all icons to a **safe zone**: only along the outer 12% margins (top-edge corners, bottom edge, far left/right). Nothing crosses into the central column where the H1 / product image live.
- Reduce count from 7 → 5 (less = more premium).
- Soften: lower opacity to ~50%, slightly smaller, slower float (6–8s).
- Add a subtle **parallax on mouse-move** (translate by 8–15px based on cursor) so the layer feels alive, not pasted on. Disabled on touch / `prefers-reduced-motion`.

### 2. Restructure the CTA cluster (`routes/index.tsx` hero)
Replace the two-button row with a **primary CTA + supporting microcopy stack**:

```text
[ Grab Yours — From ₹549 → ]      ← single hero CTA, coral, shimmer
  ✓ Free shipping ₹499+   ✓ 100% refund if kid hates it
        ⭐ 4.9 · 3,000+ parents trust Glee
```

- Drop the outlined "Save ₹50" button entirely — that nudge already lives on the product page (the "Save ₹50 with prepaid" toggle).
- Replace with **three tiny inline trust chips** under the CTA (free shipping, refund, rating) — quieter, builds confidence without competing visually.
- Remove the dead `#glee-deal` anchor.

### 3. Tighten the headline rhythm
- Current H1 stacks "No Sugar. / No Junk. / Just Pure Glee. 🌾" with the emoji on the same line — looks unbalanced.
- Move 🌾 emoji to a small floating sticker beside the headline (rotated, on a sunshine chip) — feels intentional, not tacked on.
- Reduce H1 size slightly on this viewport (md:text-7xl → md:text-6xl) so it breathes against the product image.

### 4. Add immersive depth (subtle, premium)
- **Product image**: add a soft mouse-tracked tilt (max 6° rotateY/rotateX) using CSS only — feels tactile, no library needed.
- **Vanilla blob behind product**: animate it with a slow scale pulse (4s ease-in-out) so the backdrop breathes.
- **Hand-written stickers** ("No junk. Seriously." / "⭐ 4.9 from 127 parents") — currently `hidden md:block` and static. Add a gentle bob with staggered delays so they feel placed by hand.
- **Scroll-cue**: tiny animated chevron + "scroll to meet the millet" hand-script at the bottom of the hero — invites exploration.

### 5. Trust ticker polish
- Add fade-mask gradients on the left/right edges so items dissolve instead of hard-clipping.
- Slow it down (30s → 45s) — calmer, more premium.

## Files to edit
- `src/components/brand/FloatingIcons.tsx` — reposition to margins, add parallax, reduce count
- `src/routes/index.tsx` — restructure hero CTA cluster, headline, scroll cue, ticker mask
- `src/styles.css` — add `breathe` keyframe + edge-fade utility if needed

## Out of scope
- Product page changes
- Mascot section / Our Story (already polished last round)
- Adding new images
