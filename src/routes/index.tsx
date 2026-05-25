import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Check, X, ArrowRight, Sparkles, ChevronDown, Shield, Truck } from "lucide-react";
import { Badge } from "@/components/brand/Badge";
import { FloatingIcons } from "@/components/brand/FloatingIcons";
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

function Home() {
  const productWrapRef = useRef<HTMLDivElement>(null);

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = productWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 6).toFixed(2)}deg`);
  };
  const resetTilt = () => {
    const el = productWrapRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-glee-cream bg-confetti-dots">
        <FloatingIcons />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="relative space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-glee-green/30 bg-white px-3 py-1 font-hand text-base text-glee-green-deep">
              <Sparkles className="h-4 w-4" /> Millet-powered, kid-approved
            </span>
            <h1 className="font-display text-5xl leading-[0.95] text-glee-choco md:text-6xl">
              No Sugar. <br />
              No Junk. <br />
              <span className="text-glee-green-deep">Just Pure Glee.</span>
            </h1>
            {/* floating wheat sticker — placed, not pasted */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-2 right-2 hidden md:inline-flex h-12 w-12 items-center justify-center rounded-full bg-glee-sunshine text-2xl shadow-lg rotate-[10deg] animate-bob-slow"
            >
              🌾
            </span>
            <p className="max-w-lg text-lg text-glee-muted md:text-xl">
              India's millet-powered nutrition drink for kids aged 3–16.
              Zero refined sugar. Zero maltodextrin. Zero guilt.
              Just the good stuff — and flavours kids actually beg for.
            </p>

            {/* CTA cluster: one hero button + quiet trust microcopy */}
            <div className="space-y-3 pt-1">
              <Link
                to="/products/choco-vanilla-nutrition-drink"
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-glee-coral px-8 py-4 font-sub text-base font-extrabold text-white shadow-[0_14px_34px_-12px_rgba(255,107,107,0.7)] transition-transform hover:scale-[1.04]"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Grab Yours — From ₹549 <ArrowRight className="h-4 w-4" />
                </span>
                <span className="shimmer-cta absolute inset-0" aria-hidden />
              </Link>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-sub text-xs font-bold text-glee-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-glee-green-deep" /> Free shipping ₹499+
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-glee-green-deep" /> 100% refund if kid hates it
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-glee-sunshine text-glee-sunshine" />
                  4.9 · 3,000+ parents
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <Badge tone="green" icon="🌾">Millet-Powered</Badge>
              <Badge tone="coral" icon="🚫">No Sugar</Badge>
              <Badge tone="blue" icon="✅">No Maltodextrin</Badge>
              <Badge tone="sunshine" icon="🌿">No Preservatives</Badge>
            </div>
          </div>

          {/* Hero product */}
          <div
            ref={productWrapRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            className="relative [perspective:1200px]"
          >
            <div className="absolute inset-0 -z-10 mx-auto h-[88%] w-[88%] rounded-full bg-glee-vanilla blur-2xl opacity-70 animate-breathe" />
            <div
              className="relative mx-auto max-w-md transition-transform duration-200 ease-out will-change-transform"
              style={{ transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))" }}
            >
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-glee-blue/30 via-glee-green/20 to-glee-sunshine/30 blur-2xl" />
              <img
                src={product.image}
                alt={product.alt}
                width={1024}
                height={1024}
                className="relative animate-float drop-shadow-[0_30px_50px_rgba(42,26,14,0.25)]"
              />
            </div>
            <div className="absolute -left-2 top-6 hidden md:block animate-bob-slow" style={{ animationDelay: "0.4s" }}>
              <span className="rounded-full bg-glee-sunshine px-4 py-2 font-hand text-2xl text-glee-choco shadow-lg rotate-[-8deg] inline-block">
                No junk. Seriously.
              </span>
            </div>
            <div className="absolute -right-2 bottom-8 hidden md:block animate-bob-slow" style={{ animationDelay: "1.1s" }}>
              <span className="rounded-full bg-white px-4 py-2 font-sub text-sm font-extrabold text-glee-green-deep shadow-lg rotate-[6deg] inline-block">
                ⭐ 4.9 from 127 parents
              </span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative flex flex-col items-center pb-6 -mt-4">
          <span className="font-hand text-xl text-glee-muted">scroll to meet the millet</span>
          <ChevronDown className="h-5 w-5 text-glee-green-deep animate-bounce-soft" />
        </div>

        {/* Trust ticker */}
        <div className="relative border-y border-glee-vanilla bg-white/60 py-3 overflow-hidden marquee-fade">
          <div className="flex gap-10 whitespace-nowrap" style={{ animation: "marquee 45s linear infinite" }}>
            {[...trustItems, ...trustItems].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-sub text-sm font-bold text-glee-choco">
                {t}
                <span className="text-glee-green">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* WHY GLEE - story + comparison */}
      <section className="bg-gradient-to-b from-glee-cream via-glee-green/5 to-glee-cream py-20">

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="font-hand text-2xl text-glee-coral">Real talk:</span>
            <h2 className="mt-1 font-display text-4xl leading-tight text-glee-choco md:text-5xl">
              What's Actually in Your Kid's Health Drink?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Comparison */}
            <div className="overflow-hidden rounded-3xl border border-glee-vanilla bg-white shadow-[0_20px_60px_-30px_rgba(42,26,14,0.3)]">
              <div className="bg-gradient-to-r from-glee-green-deep to-glee-blue-deep px-6 py-4">
                <div className="grid grid-cols-2 gap-4 font-sub text-sm font-extrabold text-glee-cream">
                  <span>What most brands hide 😬</span>
                  <span>What Glee says no to ✅</span>
                </div>
              </div>
              {[
                "Refined Sugar",
                "Maltodextrin",
                "Artificial Flavours",
                "Preservatives",
              ].map((item, i) => (
                <div
                  key={item}
                  className={`grid grid-cols-2 gap-4 px-6 py-4 font-sub ${i % 2 === 0 ? "bg-glee-cream" : "bg-glee-vanilla/40"}`}
                >
                  <span className="font-bold text-glee-choco">{item}</span>
                  <span className="inline-flex items-center gap-2 font-extrabold text-glee-coral">
                    <X className="h-4 w-4" /> Never
                  </span>
                </div>
              ))}
            </div>

            {/* Story */}
            <div className="space-y-4">
              <h3 className="font-display text-3xl text-glee-choco">
                We Read the Labels So You Don't Have To.
              </h3>
              <p className="text-glee-muted">
                Every parent's been there — flipping over a "healthy" kids drink, squinting at ingredients, Googling what maltodextrin even means.
              </p>
              <p className="text-glee-muted">
                Spoiler: it's ultra-processed filler. And most "health" drinks are loaded with it. Along with refined sugar dressed up as "sucrose" or "glucose syrup."
              </p>
              <p className="font-sub text-lg font-bold text-glee-choco">
                At Glee, we said no to all of it.
              </p>
              <p className="text-glee-muted">
                We went back to what actually works — ancient Indian supergrains like millets, combined with the chocolate-vanilla flavours your kids actually want. No tricks. No filler. Just real nutrition that slaps.
              </p>
              <p className="font-hand text-2xl text-glee-green-deep">
                Because your kid deserves better than "not bad for them."
                They deserve Glee.
              </p>
              <Link
                to="/products/choco-vanilla-nutrition-drink"
                className="inline-flex items-center gap-2 font-sub font-extrabold text-glee-coral underline-offset-4 hover:underline"
              >
                See What's Inside <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SPOTLIGHT */}
      <section className="bg-gradient-to-br from-glee-blue/10 via-glee-cream to-glee-green/10 py-20">

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-center font-display text-4xl text-glee-choco md:text-5xl">
            Meet Your New Favourite. <span aria-hidden>🍫✨</span>
          </h2>

          <div className="mt-10 overflow-hidden rounded-[2rem] bg-glee-vanilla shadow-[0_30px_70px_-30px_rgba(42,26,14,0.35)]">
            <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-12">
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-glee-blue/20 blur-2xl" />
                <img src={product.image} alt={product.alt} width={1024} height={1024} loading="lazy"
                  className="relative mx-auto max-w-sm animate-float drop-shadow-[0_20px_40px_rgba(42,26,14,0.25)]" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-glee-choco md:text-4xl">
                  {product.name}
                </h3>
                <p className="mt-1 font-sub font-bold text-glee-muted">
                  400g | For Ages 3–16 Years
                </p>
                <ul className="mt-5 space-y-2 text-glee-choco">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-glee-green/20 text-glee-green-deep">✦</span>
                      <span className="font-sub font-bold">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl bg-white p-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xl text-glee-muted line-through">₹599</span>
                    <span className="font-display text-4xl text-glee-choco">₹549</span>
                    <span className="rounded-full bg-glee-coral px-2 py-0.5 text-[10px] font-bold text-white">SAVE ₹50</span>
                  </div>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <Link
                      to="/products/choco-vanilla-nutrition-drink"
                      className="flex-1 rounded-full bg-glee-coral px-4 py-3 text-center font-sub text-sm font-extrabold text-white"
                    >
                      🛒 Add to Cart — ₹549 Prepaid
                    </Link>
                    <Link
                      to="/products/choco-vanilla-nutrition-drink"
                      className="flex-1 rounded-full border-2 border-glee-choco px-4 py-3 text-center font-sub text-sm font-extrabold text-glee-choco"
                    >
                      Pay on Delivery — ₹599
                    </Link>
                  </div>
                  <p className="mt-3 text-center text-xs text-glee-muted">
                    Or apply coupon <span className="font-hand text-base text-glee-coral">✦ WithLove</span> for ₹100 off on 2 packs
                  </p>
                </div>
              </div>
            </div>

            {/* How to use */}
            <div className="grid gap-4 border-t border-glee-cream/60 bg-glee-cream/40 p-6 sm:grid-cols-3 md:p-10">
              {[
                { n: "1", label: "Mix 2 scoops in warm milk", icon: "🥛" },
                { n: "2", label: "Stir for 30 seconds", icon: "⏱" },
                { n: "3", label: "Watch them ask for more", icon: "🎉" },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-3 rounded-2xl bg-white p-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-glee-coral/15 text-2xl">{s.icon}</span>
                  <div>
                    <div className="font-hand text-lg text-glee-coral">Step {s.n}</div>
                    <div className="font-sub font-bold text-glee-choco">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLEE DIFFERENCE */}
      <section className="relative bg-glee-cream py-20">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glee-green/40 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-center font-display text-4xl text-glee-choco md:text-5xl">
            Nutrition That's Built Different <span aria-hidden>💪</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "🌾",
                title: "Millet Magic",
                head: "Ancient Grains. Modern Science.",
                body: "Millets have powered Indian kids for generations. We just made them taste like a dessert. Rich in iron, calcium, and fibre — without a single compromise.",
                tone: "bg-glee-green/10 border-glee-green/30",
              },
              {
                emoji: "🚫",
                title: "The Clean Promise",
                head: "Our \"Never List\" is Non-Negotiable.",
                body: "No refined sugar. No maltodextrin. No preservatives. No artificial colours. We don't negotiate on this — ever. Every batch, every time.",
                tone: "bg-glee-coral/10 border-glee-coral/30",
              },
              {
                emoji: "✅",
                title: "Kids Approve",
                head: "Tested by the Toughest Critics.",
                body: "Not a single Glee product hits the shelf without the hardest test in the world — getting picky kids aged 3 to 16 to actually finish the cup. And ask for another.",
                tone: "bg-glee-blue/10 border-glee-blue/30",
              },
            ].map((c) => (
              <div key={c.title} className={`group rounded-3xl border-2 ${c.tone} bg-white p-7 transition-transform hover:-translate-y-1 hover:scale-[1.02]`}>
                <div className="text-5xl">{c.emoji}</div>
                <div className="mt-4 font-hand text-2xl text-glee-coral">{c.title}</div>
                <h3 className="mt-1 font-display text-2xl text-glee-choco">{c.head}</h3>
                <p className="mt-3 text-glee-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-glee-vanilla/40 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-center font-display text-4xl text-glee-choco md:text-5xl">
            Don't Take Our Word for It <span aria-hidden>💬</span>
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

      {/* GLEE DEAL banner — Bundle tiles */}
      <section id="glee-deal" className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #FFD93D 0%, #F5E6C3 100%)" }}>
        <div className="absolute inset-0 bg-confetti-dots opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-8">
          <span className="font-hand text-2xl text-glee-coral">3 out of 4 parents start with the 2-pack</span>
          <h2 className="mt-1 font-display text-4xl text-glee-choco md:text-6xl">
            Pick Your Glee Bundle <span aria-hidden>💛</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-sub text-lg font-bold text-glee-choco/80">
            Code <span className="font-hand text-xl text-glee-coral">WITHLOVE</span> is auto-applied. The more you stack, the more you save.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
            {[
              { qty: 1, total: 549, save: 50, label: "Try It", per: 34, tag: null },
              { qty: 2, total: 998, save: 200, label: "Most Loved", per: 31, tag: "POPULAR", popular: true },
              { qty: 3, total: 1447, save: 350, label: "Best Value", per: 30, tag: "SAVE ₹350", best: true },
            ].map((b) => (
              <Link
                key={b.qty}
                to="/products/choco-vanilla-nutrition-drink"
                search={{ qty: b.qty }}
                className={`group relative block rounded-3xl border-2 bg-white p-6 text-left transition-transform hover:-translate-y-1 ${b.popular ? "border-glee-coral shadow-[0_20px_50px_-20px_rgba(255,107,107,0.5)] md:scale-[1.05]" : b.best ? "border-glee-green-deep" : "border-glee-choco/10"}`}
              >
                {b.tag && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white ${b.popular ? "bg-glee-coral" : "bg-glee-green-deep"}`}>
                    {b.tag}
                  </span>
                )}
                <div className="font-hand text-xl text-glee-coral">{b.label}</div>
                <div className="mt-1 font-display text-5xl text-glee-choco">{b.qty}<span className="font-sub text-base font-extrabold text-glee-muted"> Pack{b.qty > 1 ? "s" : ""}</span></div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-3xl text-glee-choco">₹{b.total}</span>
                  <span className="font-sub text-sm text-glee-muted line-through">₹{599 * b.qty}</span>
                </div>
                <div className="mt-1 font-sub text-sm font-extrabold text-glee-green-deep">
                  ₹{b.per}/glass · {b.qty * 16} glasses
                </div>
                <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-glee-coral/10 px-3 py-1 font-sub text-xs font-extrabold text-glee-coral">
                  SAVE ₹{b.save}
                </div>
                <div className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glee-choco px-4 py-2.5 font-sub text-sm font-extrabold text-glee-cream transition group-hover:bg-glee-coral">
                  Grab This Bundle <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-8 font-sub text-sm font-bold text-glee-choco/70">
            🔒 Secure checkout · 🚚 Free shipping ₹499+ · ↩️ Kid hates it? Full refund.
          </p>
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
