# Plan: Bring the Our Story page to life

Goal: turn `/our-story` from a text-heavy page into a warm, playful, interactive scroll — with kids, friendly animals, and motion that matches the Glee brand (green/blue/cream + coral CTA, Fredoka display, organic shapes).

## What we'll add

### 1. New illustrated hero
Generate one wide hero illustration: a small group of joyful Indian kids (3–10 yrs) holding mugs, with friendly cartoon animal sidekicks (a cow mascot, a squirrel with a millet sprig, a bunny) on a cream background with floating millet/cocoa/leaf confetti. Flat, rounded, brand-coloured (no photoreal).

- File: `src/assets/our-story-hero.jpg` (16:9, premium tier for clean characters)
- Replaces the plain text hero; headline + subhead overlay on the left, illustration on the right
- Hero tin-style float animation on the lead kid + parallax-lite (CSS transform on scroll via existing IntersectionObserver pattern)

### 2. Animal "story guides" down the page
Three small mascot illustrations generated as transparent PNGs, reused as section anchors:

- `mascot-cow.png` — intro to "It Started With a Label" (cow = pure dairy-free milk alternative cue)
- `mascot-squirrel.png` — next to "Why 'Glee'?" holding a millet sprig
- `mascot-bunny.png` — next to the Values section, hopping

Each mascot sits in the section margin, gently bobs (`animate-float`, staggered delays), and waves/tilts on hover (`hover:rotate-3 hover:scale-110 transition`).

### 3. Interactive timeline strip (new section)
Between the story and Values: a horizontal "Our journey" timeline with 4 milestone cards (The Question → The Kitchen → The First Sip → The Promise). Each card has a small inline SVG icon (label, mortar+pestle, mug, heart), reveals on scroll with `fade-in-up`, and tilts slightly on hover. Mobile = horizontal snap-scroll carousel.

### 4. "Meet the Glee Gang" mascot row (new section)
Before the CTA: a friendly row introducing the 3 animal mascots with one-line personalities ("Moo the Cow — believes in clean labels", etc.). Cards lift on hover. Adds personality without more long-form copy.

### 5. Kid-quote sticker callouts
Replace two plain paragraphs with handwritten-style speech bubbles ("Tastes like chocolate, Mumma!" — Aarav, 6) using the existing Caveat font + a coral/blue sticker shape with a subtle wiggle on hover.

### 6. Motion polish (no new deps)
Reuse existing Tailwind keyframes (`float`, `fade-in-up`, `marquee`) plus add two tiny ones in `src/styles.css`:
- `wiggle` (±3deg, 2.5s) for stickers/mascots on hover
- `bob-slow` (translateY 6px, 5s) staggered across mascots

All scroll reveals use a 30-line IntersectionObserver hook — no Framer Motion, keeps Lighthouse ≥ 90.

## Files touched

```text
src/routes/our-story.tsx           rebuilt sections + new hero/timeline/gang
src/styles.css                     add wiggle + bob-slow keyframes
src/components/brand/Mascot.tsx    NEW — small img wrapper w/ float + hover tilt
src/hooks/useReveal.ts             NEW (if not present) — IO-based reveal hook
src/assets/our-story-hero.jpg      NEW — generated (premium, 16:9)
src/assets/mascot-cow.png          NEW — generated (transparent)
src/assets/mascot-squirrel.png     NEW — generated (transparent)
src/assets/mascot-bunny.png        NEW — generated (transparent)
```

No changes to other pages, no backend, no new dependencies.

## Out of scope

- Redesigning Home / Product / Blog
- Real animation library (Framer/Lottie)
- Adding new copy beyond mascot one-liners and milestone labels
