## Goal

Apply the refinements in `GleeNutrico_Website_Brief_Refined.docx` to the existing site without rebuilding pages from scratch.

## Global

- Set page background to `#FBF1DD` across all routes (update `--background` token in `src/styles.css` so every page inherits).
- Keep Caveat as the handwritten emphasis font (already wired).
- Footer: add a "Contact Us" block with WhatsApp + Email. **Open question:** you didn't provide details — I'll use placeholder values (`+91 90000 00000`, `hello@gleenutrico.com`) and you can swap them later, unless you reply with the real ones first.

## Home page (`src/routes/index.tsx`)

1. **Top announcement bar** — update copy to: "₹1 from every pack feeds a child at an orphanage • Free shipping on prepaid orders • Use code WITHLOVE for extra savings 🎁".
2. **Hero** — remove the "See Ingredients" secondary button; keep "Shop Now – ₹549".
3. **"What Goes Inside" section** — remove the "View All Ingredients →" button; keep the ingredient tiles (Ragi, Bajra, Kodo, Almonds, Cocoa, Jaggery).
4. **"We Say NO to the Junk" comparison table** — replace the comparison cards with a full-bleed auto-playing, muted, looping background video section with a soft overlay + headline ("We Read the Labels So You Don't Have To"). I'll scaffold the `<video>` element now with a placeholder poster and a `TODO` source; once you upload the MP4 I'll wire `src/assets/no-junk-loop.mp4` in.
5. **Impact / "₹1 from every pack" strip** — change ₹1 → ₹5, replace the "12,450+ Meals" stat with a large 😊 emoji + "MEALS. HOPE. SMILES." caption, swap the section image for a fresh generated one, and recolor the section background using a warm coffee/red tone that complements `#FBF1DD`.
6. Keep the 3-testimonial round-photo section as-is.

## Shop page (`src/routes/products.choco-vanilla-nutrition-drink.tsx`)

- Replace the product hero image with a freshly generated, cleaner Choco Vanilla pack render — **pending your upload**; until then I'll keep the current one and you can drop the file in.
- Keep all three tabs (About / Ingredients / How to Use) and all existing layout, fonts, pricing, coupon logic, and reviews.
- Add the new "Instructions / How to Prepare" visual section (3 steps: scoop → warm milk → stir & enjoy) placed between the tabs and the reviews block. Card-grid with icons.

## Our Story page (`src/routes/our-story.tsx`)

- Remove the "Meet the Glee Gang" section (Moo / Pip / Bo cards).
- Tighten the layout: consistent vertical rhythm, max-width content column, ensure the hero, journey timeline, and values section align on the same grid. No content changes beyond the removal.

## Blog page

- No changes (brief says keep as-is).

## Footer (`src/components/layout/Footer.tsx`)

- Add a "Contact Us" column with WhatsApp icon + number and email icon + address (Troovy-style layout).
- Keep existing nav / brand columns.

## Files touched

```text
src/styles.css                                              background token → #FBF1DD
src/routes/index.tsx                                        copy + button removals + impact strip + video section
src/routes/our-story.tsx                                    remove Glee Gang, layout polish
src/routes/products.choco-vanilla-nutrition-drink.tsx       new Instructions section
src/components/layout/Footer.tsx                            Contact Us column
src/components/home/NoJunkVideo.tsx                         NEW — looping bg video block (placeholder src)
src/components/product/Instructions.tsx                     NEW — 3-step how-to-prepare strip
src/assets/impact-hero.jpg                                  NEW — regenerated impact section image
```

No backend changes, no new dependencies, pricing/cart logic untouched.

## Out of scope

- Generating the no-junk loop video (waiting on your upload).
- Replacing the product pack shot (waiting on your upload).
- Real Contact Us details (using placeholders until you share them).
