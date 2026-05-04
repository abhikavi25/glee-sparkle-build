## Goal
Subtly push parents toward the 2–3 pack prepaid bundle using anchoring, defaults, and real-time savings feedback. Punchy D2C tone — bold callouts, sticky bars, no fake countdowns.

## Pricing logic (no business changes)
Existing pricing already supports it:
- Prepaid saves ₹50/unit
- WithLove: ₹100 off (qty 2), ₹200 off (qty 3+), prepaid only
- Free shipping ≥ ₹499 prepaid

We use these existing rules — no new math.

## Changes

### 1. Cart defaults (subtle nudge #1)
`src/components/cart/CartProvider.tsx`
- Change initial state: `qty: 2`, `method: "prepaid"`, `coupon: "WITHLOVE"` auto-applied.
- Result: every visitor lands pre-loaded into the ₹100-off bundle. The price they first see IS the discounted price. Removing items feels like *losing* savings (loss aversion).

### 2. New `BundlePicker` component (Product page, replaces plain qty stepper)
`src/components/product/BundlePicker.tsx`
- 3 visual tiles: **1 Pack**, **2 Packs (POPULAR)**, **3 Packs (BEST VALUE)**.
- 2-pack tile is visually larger, bordered in coral, with "Most parents pick this" sticker.
- 3-pack tile shows strike-through total + "Save ₹350" badge.
- Each tile shows **per-glass cost** (₹/serving) — anchors value to a tiny number (~₹27/glass).
- Clicking a tile sets qty + auto-applies WithLove + sets prepaid.

### 3. Live savings counter (subtle nudge #2)
`src/components/product/PriceBlock.tsx` (edit existing)
- Big animated number: **"You're saving ₹X"** with a coral pulse when value increases.
- Line below: **"That's ₹Y per glass"** updating live.
- When user is 1 pack away from next tier: yellow strip *"Add 1 more pack → unlock ₹100 more off"* (uses existing `couponMessage` logic).

### 4. AddToCartBar upgrades
`src/components/product/AddToCartBar.tsx` (edit)
- CTA copy becomes dynamic: *"Lock in ₹X off — Buy 2 Packs"*.
- Below CTA: 3 micro-trust chips in a row — *"🔒 Secure Checkout · 🚚 Ships in 24h · ↩️ 100% Refund if kid hates it"*.
- Mobile: make this bar `sticky bottom-0` with backdrop blur (punchy D2C standard).

### 5. Home page bundle teaser (subtle nudge #3)
`src/routes/index.tsx` — add new section above footer:
- "Pick Your Glee Bundle" — same 3 tiles as product page, but smaller.
- Each tile is a `<Link>` that navigates to product page with the qty pre-selected (via search params, e.g. `?qty=3`).
- Headline: *"3 out of 4 parents start with the 2-pack"*.

### 6. URL param handoff
`src/routes/products.choco-vanilla-nutrition-drink.tsx`
- Read `?qty=` on mount, call `setQty()` if 1–3.
- Lets the home tiles "carry intent" into the product page seamlessly.

### 7. Punchy savings strip (Header)
`src/components/layout/Header.tsx` (edit)
- Existing announcement bar gets sharper copy: *"FLAT ₹200 OFF on 3-packs · Code WITHLOVE auto-applied ✨"*.

## Tone guardrails
- Bold weights, coral accents, savings numbers prominent — but no fake countdown timers, no "only 3 left" lies, no exit popups. Punchy ≠ scammy.

## Files
- edit: `src/components/cart/CartProvider.tsx`, `src/components/product/PriceBlock.tsx`, `src/components/product/AddToCartBar.tsx`, `src/routes/index.tsx`, `src/routes/products.choco-vanilla-nutrition-drink.tsx`, `src/components/layout/Header.tsx`
- create: `src/components/product/BundlePicker.tsx`

## Out of scope (saving for later rounds)
- Risk-reversal kid-quote sticker, social proof ticker, fussy-eater quiz, authority strip — can layer in next pass.
