import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Check, ChevronRight, Truck } from "lucide-react";
import { product, reviews, faqs } from "@/lib/productData";
import { Badge } from "@/components/brand/Badge";
import { PriceBlock } from "@/components/product/PriceBlock";
import { CouponInput } from "@/components/product/CouponInput";
import { AddToCartBar } from "@/components/product/AddToCartBar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Instructions } from "@/components/product/Instructions";
import { toast } from "sonner";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description:
    "India's millet-powered nutrition drink for kids 3–16. Zero refined sugar, zero maltodextrin, no preservatives. Real chocolate and vanilla flavours.",
  brand: { "@type": "Brand", name: "GleeNutrico" },
  sku: product.id,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: product.rating,
    reviewCount: product.reviewCount,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: 549,
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/products/choco-vanilla-nutrition-drink")({
  head: () => ({
    meta: [
      { title: "Glee Kids Choco Vanilla Millet Nutrition Drink 400g | No Sugar, No Maltodextrin | GleeNutrico" },
      { name: "description", content: "Buy Glee Kids Choco Vanilla — India's cleanest millet nutrition drink for kids 3–16 years. Zero refined sugar, zero maltodextrin, no preservatives. ₹549 prepaid." },
      { property: "og:title", content: "Glee Kids Choco Vanilla — Real Cocoa, Real Vanilla, Zero Junk" },
      { property: "og:description", content: "Millet-powered nutrition drink for kids 3–16. ₹549 prepaid. Free shipping above ₹499." },
      { property: "og:image", content: product.image },
      { name: "twitter:image", content: product.image },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(productSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const [activeImg, setActiveImg] = useState(0);
  const gallery = [product.image, product.image, product.image, product.image];

  return (
    <>
      {/* HERO */}
      <section className="bg-glee-cream py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-glee-muted">
            <Link to="/" className="hover:text-glee-choco">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/products/choco-vanilla-nutrition-drink" className="hover:text-glee-choco">Shop</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-glee-choco">Choco Vanilla Nutrition Drink</span>
          </nav>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Gallery */}
            <div>
              <div className="overflow-hidden rounded-3xl bg-glee-vanilla p-6">
                <img
                  src={gallery[activeImg]}
                  alt={product.alt}
                  width={1024}
                  height={1024}
                  className="mx-auto aspect-square w-full max-w-md object-contain animate-float"
                />
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`overflow-hidden rounded-2xl border-2 bg-glee-vanilla p-2 transition ${activeImg === i ? "border-glee-green-deep" : "border-glee-vanilla hover:border-glee-green/40"}`}
                  >
                    <img src={g} alt={`${product.name} thumbnail ${i + 1}`} className="aspect-square w-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-5">
              <h1 className="font-display text-4xl leading-tight text-glee-choco md:text-5xl">
                {product.name}
              </h1>
              <p className="font-sub font-bold text-glee-muted">
                For Ages {product.ageRange} | {product.weight} | Millet-Powered
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-glee-sunshine">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-sub font-bold text-glee-choco">
                  {product.rating} — {product.reviewCount} reviews
                </span>
              </div>

              <div className="rounded-2xl bg-glee-cream border border-glee-vanilla p-4 font-sub text-base font-bold text-glee-choco">
                Real chocolate. Real vanilla. Zero guilt. The drink your kids will actually love — and you'll actually trust.
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge tone="green" icon="🌾">Millet Base</Badge>
                <Badge tone="coral" icon="🚫">No Refined Sugar</Badge>
                <Badge tone="blue" icon="✅">No Maltodextrin</Badge>
                <Badge tone="sunshine" icon="🌿">No Preservatives</Badge>
              </div>

              <PriceBlock />
              <CouponInput />
              <AddToCartBar />
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO PREPARE */}
      <Instructions />

      {/* TABS */}
      <section className="bg-glee-vanilla/30 py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3 rounded-full bg-white p-1 h-auto">
              <TabsTrigger value="about" className="rounded-full data-[state=active]:bg-glee-choco data-[state=active]:text-glee-cream py-2.5 font-sub font-extrabold">About</TabsTrigger>
              <TabsTrigger value="ingredients" className="rounded-full data-[state=active]:bg-glee-choco data-[state=active]:text-glee-cream py-2.5 font-sub font-extrabold">Ingredients</TabsTrigger>
              <TabsTrigger value="how" className="rounded-full data-[state=active]:bg-glee-choco data-[state=active]:text-glee-cream py-2.5 font-sub font-extrabold">How to Use</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6 rounded-3xl bg-white p-7 space-y-4">
              <h2 className="font-display text-3xl text-glee-choco">What Makes Glee Kids Different?</h2>
              <p className="text-glee-muted">
                The millet-based nutrition drink market in India is full of products that <em>sound</em> clean but aren't. Maltodextrin as the first ingredient. Refined sugar disguised as "sucrose." Flavours that are 100% artificial.
              </p>
              <p className="font-sub font-bold text-glee-choco">Glee Kids Choco Vanilla is built on a different promise:</p>
              {[
                { h: "✦ MILLET-FIRST FORMULA", b: "Jowar, Bajra, and Ragi form the base — ancient supergrains rich in iron, calcium, fibre, and natural slow-release energy for growing bodies." },
                { h: "✦ REAL COCOA + NATURAL VANILLA", b: "No \"chocolate flavour (artificial).\" We use actual cocoa and real vanilla — flavours your kids can taste the difference in." },
                { h: "✦ ZERO REFINED SUGAR", b: "We use natural sweeteners like jaggery and dates for sweetness. Not a single gram of refined sugar sneaks in." },
                { h: "✦ ZERO MALTODEXTRIN", b: "We won't pad our formula with ultra-processed fillers. Every gram in a Glee scoop is there because it does something for your kid." },
              ].map((s) => (
                <div key={s.h}>
                  <div className="font-sub font-extrabold text-glee-green-deep">{s.h}</div>
                  <p className="text-glee-muted">{s.b}</p>
                </div>
              ))}
              <p className="text-sm text-glee-muted">
                Suitable for: Ages 3–16 | Vegetarian | No Allergen Cross-contamination*
              </p>
            </TabsContent>

            <TabsContent value="ingredients" className="mt-6 rounded-3xl bg-white p-7 space-y-4">
              <h2 className="font-display text-3xl text-glee-choco">Ingredients & Nutrition</h2>
              <p className="text-glee-muted">
                <strong className="text-glee-choco">Full ingredients:</strong> Multi-millet blend (Ragi, Jowar, Bajra), Whey Protein Concentrate, Cocoa Powder, Natural Vanilla Extract, Jaggery, Date Powder, Almond Powder, Calcium Carbonate, Vitamin Premix.
              </p>
              <div className="overflow-hidden rounded-2xl border border-glee-vanilla">
                <table className="w-full text-left text-sm">
                  <thead className="bg-glee-choco text-glee-cream font-sub">
                    <tr>
                      <th className="px-4 py-3">Per 100g</th>
                      <th className="px-4 py-3 text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Energy", "412 kcal"],
                      ["Protein", "14.2 g"],
                      ["Carbohydrates (of which sugars)", "62 g (8 g, natural)"],
                      ["Fat", "9.5 g"],
                      ["Dietary Fibre", "7.8 g"],
                      ["Iron", "12 mg (66% RDA)"],
                      ["Calcium", "480 mg"],
                      ["Vitamin D", "5 µg"],
                      ["Vitamin B12", "1.2 µg"],
                    ].map(([k, v], i) => (
                      <tr key={k} className={i % 2 === 0 ? "bg-glee-cream" : "bg-glee-vanilla/30"}>
                        <td className="px-4 py-3 font-sub font-bold text-glee-choco">{k}</td>
                        <td className="px-4 py-3 text-right text-glee-choco">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-glee-muted">*Indicative values. Actual values may vary by ±5%. RDA based on ICMR recommendations for children aged 9–13 years.</p>
            </TabsContent>

            <TabsContent value="how" className="mt-6 rounded-3xl bg-white p-7 space-y-4">
              <h2 className="font-display text-3xl text-glee-choco">How to Use</h2>
              <ul className="space-y-3 text-glee-choco">
                <li>🥛 <strong>Recommended Serving:</strong>
                  <ul className="ml-6 mt-1 list-disc text-glee-muted space-y-1">
                    <li>Children 3–8 years: 2 heaped scoops (20g) in 150ml warm milk</li>
                    <li>Children 9–16 years: 3 heaped scoops (30g) in 200ml warm milk</li>
                  </ul>
                </li>
                <li>🌡️ <strong>Serving temperature:</strong> Warm milk for best taste. Can also be used in cold milk or smoothies.</li>
                <li>⏰ <strong>Best time:</strong> Morning breakfast or post-school snack</li>
                <li>💡 <strong>Pro tip from parents:</strong> Add to a banana smoothie for an extra-creamy experience!</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-glee-cream py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h2 className="font-display text-3xl text-glee-choco md:text-4xl">What Parents Are Saying</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_2fr]">
            <div className="rounded-3xl bg-white p-5 border border-glee-vanilla">
              <div className="font-display text-5xl text-glee-choco">{product.rating}</div>
              <div className="flex gap-0.5 text-glee-sunshine mt-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <div className="text-xs text-glee-muted mt-1">Based on {product.reviewCount} reviews</div>
              <div className="mt-4 space-y-1.5">
                {[5, 4, 3, 2, 1].map((s) => {
                  const pct = s === 5 ? 88 : s === 4 ? 9 : s === 3 ? 2 : 1;
                  return (
                    <div key={s} className="flex items-center gap-2 text-xs">
                      <span className="w-3 font-sub font-bold">{s}★</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-glee-vanilla">
                        <div className="h-full rounded-full bg-glee-green" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="w-8 text-right text-glee-muted">{pct}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-4">
              {reviews.map((r) => (
                <article key={r.name} className="rounded-3xl bg-white p-5 border border-glee-vanilla">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5 text-glee-sunshine">
                      {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <Badge tone="green" icon="✓">Verified Buyer</Badge>
                  </div>
                  <p className="mt-2 text-glee-choco">"{r.text}"</p>
                  <div className="mt-2 text-xs text-glee-muted">— {r.name}, {r.location} · {r.tag}</div>
                </article>
              ))}
              <button
                onClick={() => toast("Reviews open soon — thank you! 💛", { description: "We're rolling out review submissions next month." })}
                className="rounded-full border-2 border-glee-choco px-5 py-2.5 font-sub font-extrabold text-glee-choco transition hover:bg-glee-choco hover:text-glee-cream"
              >
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* You're Getting strip */}
      <section className="bg-glee-vanilla/40 py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "✅ 400g = ~13–20 servings",
              "🚫 Zero Refined Sugar",
              "🚫 Zero Maltodextrin",
              "🌾 5 Ancient Millets",
              "🍫 Real Cocoa + Vanilla",
              "🇮🇳 Made in India with love",
            ].map((t) => (
              <div key={t} className="rounded-2xl bg-white border border-glee-vanilla px-4 py-3 font-sub font-bold text-glee-choco">{t}</div>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-glee-green/10 px-4 py-2 text-sm font-sub font-bold text-glee-green-deep">
            <Truck className="h-4 w-4" /> Free shipping on prepaid orders above ₹499
          </div>
        </div>
      </section>
    </>
  );
}
