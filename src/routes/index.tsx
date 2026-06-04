import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/brand/Badge";
import { FloatingIcons } from "@/components/brand/FloatingIcons";
import { NoJunkVideo } from "@/components/home/NoJunkVideo";
import { ImpactStrip } from "@/components/home/ImpactStrip";
import { product, reviews } from "@/lib/productData";
import { posts } from "@/lib/blogData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glee Kids — Millet Nutrition Drink for Kids 3–16 | No Sugar, No Maltodextrin" },
      { name: "description", content: "India's millet-powered kids health drink. Zero refined sugar, zero maltodextrin, zero preservatives. Real chocolate, real vanilla. From ₹549." },
      { property: "og:title", content: "No Sugar. No Junk. Just Pure Glee. 🌾" },
      { property: "og:description", content: "Millet-based nutrition drink for Indian kids aged 3–16. Real ingredients. Real flavours. Zero compromises." },
    ],
  }),
  component: Home,
});

const trustItems = [
  "🏆 3,000+ Happy Kids",
  "🌾 Millet-First Formula",
  "🚫 No Refined Sugar",
  "✅ No Maltodextrin",
  "🇮🇳 Made in India",
  "💛 Loved by Picky Eaters",
];

const heroUsps = [
  { icon: "🌾", label: "40%+ Millets", tone: "bg-glee-green/10 text-glee-green-deep" },
  { icon: "🚫", label: "No Refined Sugar", tone: "bg-glee-coral/10 text-glee-coral" },
  { icon: "❌", label: "No Maltodextrin", tone: "bg-glee-coral/10 text-glee-coral" },
  { icon: "🛑", label: "No Artificial Anything", tone: "bg-glee-coral/10 text-glee-coral" },
  { icon: "🌿", label: "100% Natural", tone: "bg-glee-green/10 text-glee-green-deep" },
];

const ingredients = [
  { emoji: "🌾", name: "Ragi", note: "Strengthens bones", bg: "bg-[#c0524a]/20" },
  { emoji: "🌰", name: "Bajra", note: "High in iron", bg: "bg-[#a07a4a]/20" },
  { emoji: "🌽", name: "Kodo Millet", note: "Rich in fiber", bg: "bg-glee-sunshine/30" },
  { emoji: "🥜", name: "Almonds", note: "Brain health", bg: "bg-[#a07a4a]/20" },
  { emoji: "🍫", name: "Cocoa", note: "Rich in antioxidants", bg: "bg-glee-choco/20" },
  { emoji: "🍯", name: "Jaggery", note: "Natural energy", bg: "bg-glee-sunshine/30" },
];

const growthBenefits = [
  { icon: "💪", title: "High in Protein", sub: "Supports growth" },
  { icon: "🌿", title: "Rich in Fiber", sub: "Better digestion" },
  { icon: "🦴", title: "Source of Iron & Calcium", sub: "Stronger bones" },
  { icon: "⚡", title: "Sustained Energy", sub: "Active minds" },
  { icon: "😊", title: "Daily Nutrition", sub: "For 3–16 Years" },
];

function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-glee-cream bg-confetti-dots">
        <FloatingIcons />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="space-y-6">
            <h1 className="font-display text-5xl leading-[1] text-glee-choco md:text-7xl">
              Real Food. <br />
              <span className="text-glee-green-deep">Real Nutrition.</span> <br />
              Real Childhood.
            </h1>
            <div className="h-1 w-24 rounded-full bg-glee-green-deep" />
            <p className="max-w-lg text-lg text-glee-muted md:text-xl">
              40%+ Millets. Real Cocoa. Real Vanilla. <br />
              Sweetened with Jaggery. <br />
              Zero Refined Sugar. Zero Maltodextrin. <br />
              Zero Artificial Anything.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/products/choco-vanilla-nutrition-drink"
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-glee-coral px-7 py-4 font-sub text-base font-extrabold text-white shadow-[0_14px_34px_-12px_rgba(255,107,107,0.7)] transition-transform hover:scale-[1.04]"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Shop Now — ₹549 <ArrowRight className="h-4 w-4" />
                </span>
                <span className="shimmer-cta absolute inset-0" aria-hidden />
              </Link>
            </div>

            {/* USP icon row */}
            <div className="grid grid-cols-5 gap-3 pt-4 max-w-lg">
              {heroUsps.map((u) => (
                <div key={u.label} className="flex flex-col items-center text-center">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${u.tone} text-xl`}>
                    {u.icon}
                  </span>
                  <span className="mt-2 text-[11px] font-sub font-bold text-glee-choco leading-tight">
                    {u.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero product */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 mx-auto h-[88%] w-[88%] rounded-full bg-glee-vanilla blur-2xl opacity-70" />
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-glee-blue/30 via-glee-green/20 to-glee-sunshine/30 blur-2xl" />
              <img
                src={product.image}
                alt={product.alt}
                width={1024}
                height={1024}
                className="relative animate-float drop-shadow-[0_30px_50px_rgba(42,26,14,0.25)]"
              />
            </div>
          </div>
        </div>

        {/* Trust ticker */}
        <div className="relative border-y border-glee-vanilla bg-white/60 py-3 overflow-hidden">
          <div className="flex animate-marquee gap-10 whitespace-nowrap">
            {[...trustItems, ...trustItems].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-sub text-sm font-bold text-glee-choco">
                {t}
                <span className="text-glee-green">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WHAT GOES INSIDE */}
      <section className="bg-glee-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/70 px-6 py-10 md:px-12 md:py-12">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <div className="font-sub text-sm font-extrabold tracking-widest text-glee-green-deep">
                WHAT GOES INSIDE
              </div>
              <h2 className="mt-3 font-display text-4xl text-glee-choco md:text-5xl">
                Wholesome Ingredients. <br />
                Thoughtfully Chosen.
              </h2>
              <Link to="/products/choco-vanilla-nutrition-drink" className="mt-5 inline-flex items-center gap-2 font-sub font-extrabold text-glee-green-deep underline-offset-4 hover:underline">
                View All Ingredients <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-6">
              {ingredients.map((ing) => (
                <div key={ing.name} className="flex flex-col items-center text-center">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-full ${ing.bg} text-3xl shadow-inner md:h-24 md:w-24 md:text-4xl`}>
                    {ing.emoji}
                  </div>
                  <div className="mt-3 font-sub text-sm font-extrabold text-glee-choco">
                    {ing.name}
                  </div>
                  <div className="text-xs text-glee-muted leading-tight">{ing.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WE SAY NO TO THE JUNK */}
      <section className="bg-glee-cream py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[1fr_2fr] md:px-8">
          <div>
            <h2 className="font-display text-4xl text-glee-choco md:text-5xl leading-tight">
              We Say <span className="text-glee-coral">NO</span> <br />
              to the Junk.
            </h2>
            <p className="mt-4 text-glee-muted">Because your child deserves better.</p>
            <div className="mt-4 h-1 w-20 rounded-full bg-glee-green-deep" />
          </div>

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-glee-coral/10 p-6 border border-glee-coral/20">
              <div className="text-center font-display text-xl text-glee-choco">Typical Health Drink</div>
              <ul className="mt-4 space-y-2.5 text-glee-choco">
                {["Refined Sugar","Maltodextrin","Artificial Flavours","Artificial Colours","Preservatives","Low Quality Ingredients"].map((x) => (
                  <li key={x} className="flex items-center gap-2 font-sub text-sm">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-glee-coral/20 text-glee-coral">✕</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.75rem] bg-glee-green/10 p-6 border border-glee-green/30">
              <div className="text-center font-display text-xl text-glee-green-deep">GleeNutrico</div>
              <ul className="mt-4 space-y-2.5 text-glee-choco">
                {["40%+ Millets","Jaggery Sweetened","Real Cocoa & Vanilla","No Artificial Anything","Clean & Natural Ingredients","Nutrition That Kids Need"].map((x) => (
                  <li key={x} className="flex items-center gap-2 font-sub text-sm">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-glee-green/20 text-glee-green-deep">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white font-display text-glee-choco shadow-md">vs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUILT FOR GROWING MINDS & BODIES */}
      <section className="bg-glee-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/70 px-6 py-10 md:px-12 md:py-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="font-sub text-sm font-extrabold tracking-widest text-glee-green-deep">
                BUILT FOR GROWING MINDS & BODIES
              </div>
              <h2 className="mt-3 font-display text-4xl text-glee-choco md:text-5xl leading-tight">
                Nutrition That <br />
                Supports Every <br />
                <span className="text-glee-green-deep">Step of Growth.</span>
              </h2>
              <Link to="/our-story" className="mt-5 inline-flex items-center gap-2 font-sub font-extrabold text-glee-green-deep underline-offset-4 hover:underline">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-8 grid grid-cols-5 gap-3">
                {growthBenefits.map((b) => (
                  <div key={b.title} className="flex flex-col items-center text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-glee-green/10 text-xl text-glee-green-deep">
                      {b.icon}
                    </span>
                    <span className="mt-2 text-[11px] font-sub font-bold text-glee-choco leading-tight">
                      {b.title}
                    </span>
                    <span className="text-[10px] text-glee-muted leading-tight">{b.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 mx-auto h-[85%] w-[85%] rounded-full bg-glee-green/30 blur-2xl" />
              <div className="relative flex aspect-square items-center justify-center rounded-[3rem] bg-gradient-to-br from-glee-green/40 via-glee-sunshine/30 to-glee-blue/30">
                <span className="text-[10rem]" aria-hidden>👧</span>
                <span className="absolute top-6 left-6 text-3xl animate-float" aria-hidden>⭐</span>
                <span className="absolute bottom-8 right-8 text-3xl animate-float" aria-hidden>✨</span>
                <span className="absolute top-12 right-10 text-2xl" aria-hidden>🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <ImpactStrip />

      {/* REVIEWS */}
      <section className="bg-glee-vanilla/40 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-center font-display text-4xl text-glee-choco md:text-5xl">
            Loved by Parents. Trusted by Families. <span aria-hidden>💬</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <article key={r.name} className="rounded-3xl bg-white p-6 shadow-[0_20px_50px_-30px_rgba(42,26,14,0.3)] transition-transform hover:-translate-y-1">
                <div className="flex gap-0.5 text-glee-sunshine">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-glee-choco">"{r.text}"</p>
                <div className="mt-4 font-sub text-sm font-extrabold text-glee-choco">— {r.name}, {r.location}</div>
                <div className="text-xs text-glee-muted">{r.tag}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-glee-cream py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-4xl text-glee-choco md:text-5xl">
              From The Glee Kitchen <span aria-hidden>📖</span>
            </h2>
            <Link to="/blog" className="hidden font-sub font-extrabold text-glee-green-deep hover:underline md:inline-flex items-center gap-1">
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} to="/blog" className="group block overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-30px_rgba(42,26,14,0.25)] transition-transform hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden bg-glee-vanilla">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <Badge tone="green">{p.category}</Badge>
                  <h3 className="mt-3 font-display text-xl text-glee-choco">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-glee-muted">{p.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-glee-muted">
                    <span>{p.readTime}</span>
                    <span className="inline-flex items-center gap-1 font-sub font-extrabold text-glee-coral">Read more <ArrowRight className="h-3 w-3" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
