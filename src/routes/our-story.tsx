import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, FlaskConical, Coffee, Heart } from "lucide-react";
import { FloatingIcons } from "@/components/brand/FloatingIcons";
import { Mascot } from "@/components/brand/Mascot";
import heroImg from "@/assets/our-story-hero.jpg";
import cowImg from "@/assets/mascot-cow.png";
import squirrelImg from "@/assets/mascot-squirrel.png";
import bunnyImg from "@/assets/mascot-bunny.png";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Glee Kids by GleeNutrico — Millet Nutrition for Indian Kids" },
      { name: "description", content: "The story of GleeNutrico — why we built India's cleanest millet-based kids nutrition drink. No refined sugar, no maltodextrin, ever." },
      { property: "og:title", content: "We Didn't Start a Brand. We Started a Promise." },
      { property: "og:description", content: "Why GleeNutrico exists, and why we'll never compromise on what goes into your child's cup." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: OurStory,
});

const milestones = [
  { icon: Sparkles, title: "The Question", body: "A parent flips a label and wonders: is this actually healthy?", tone: "bg-glee-blue/15 border-glee-blue/40" },
  { icon: FlaskConical, title: "The Kitchen", body: "Months of testing millets, cocoa and vanilla — no shortcuts.", tone: "bg-glee-green/15 border-glee-green/40" },
  { icon: Coffee, title: "The First Sip", body: "A picky 6-year-old asks for a second cup. We knew.", tone: "bg-glee-sunshine/25 border-glee-sunshine/60" },
  { icon: Heart, title: "The Promise", body: "Never sugar. Never maltodextrin. Never compromise.", tone: "bg-glee-coral/15 border-glee-coral/40" },
];

const gang = [
  { img: cowImg, name: "Moo", role: "Clean-Label Champion", line: "If she can't read it, it's not in the cup.", color: "bg-glee-green/10" },
  { img: squirrelImg, name: "Pip", role: "Millet Keeper", line: "Carries an ancient grain everywhere she goes.", color: "bg-glee-sunshine/20" },
  { img: bunnyImg, name: "Bo", role: "Energy Officer", line: "Hops on real nutrition, not refined sugar.", color: "bg-glee-blue/15" },
];

function OurStory() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-glee-cream bg-confetti-dots py-16 md:py-20">
        <FloatingIcons />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:px-8">
          <div className="text-center md:text-left">
            <span className="inline-block font-hand text-2xl text-glee-coral">Our Story</span>
            <h1 className="mt-2 font-display text-5xl leading-[1] text-glee-choco md:text-6xl">
              We Didn't Start a Brand. <br />
              <span className="text-glee-green-deep">We Started a Promise.</span>{" "}
              <span aria-hidden>🌾</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-glee-muted md:mx-0">
              The story of why GleeNutrico exists — and why we'll never compromise on what goes into your child's cup.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link to="/products/choco-vanilla-nutrition-drink" className="inline-flex items-center gap-2 rounded-full bg-glee-coral px-6 py-3 font-sub text-sm font-extrabold text-white shadow-[0_14px_34px_-12px_rgba(255,107,107,0.7)] transition-transform hover:scale-[1.04]">
                Shop Glee Kids <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#story" className="inline-flex items-center gap-2 rounded-full border-2 border-glee-choco px-6 py-3 font-sub text-sm font-extrabold text-glee-choco transition hover:bg-glee-choco hover:text-glee-cream">
                Read Our Story
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-glee-blue/20 via-glee-green/15 to-glee-sunshine/25 blur-2xl" />
            <img
              src={heroImg}
              alt="Joyful Indian children with friendly cow, squirrel and bunny mascots holding mugs of Glee Kids millet drink"
              width={1600}
              height={1024}
              className="relative w-full rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(42,26,14,0.35)] animate-float"
              style={{ animationDuration: "6s" }}
            />
          </div>
        </div>
      </section>

      {/* Story narrative + mascots in margins */}
      <section id="story" className="relative bg-glee-cream py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8 space-y-12">
          <div className="relative">
            <Mascot src={cowImg} alt="Moo the cow mascot" size={110} className="absolute -left-32 top-2 hidden lg:block" delay={0} />
            <h2 className="font-display text-3xl text-glee-choco md:text-4xl">It Started With a Label.</h2>
            <div className="mt-5 space-y-4 text-lg text-glee-muted">
              <p>Every parent does it. You flip over the pack. You scan the ingredients. And somewhere between "maltodextrin" and the third form of hidden sugar, something breaks a little.</p>
              <p>We're parents too. And we were tired of the math:</p>

              {/* Sticker quote */}
              <div className="relative inline-block rotate-[-2deg] rounded-2xl bg-glee-coral px-5 py-3 font-hand text-2xl text-white shadow-md transition-transform hover:rotate-[2deg] hover:scale-[1.03]">
                "Is this actually healthy, or does it just sound healthy?"
                <span className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-glee-coral" aria-hidden />
              </div>

              <p className="font-sub text-xl font-extrabold text-glee-choco">So we built something that doesn't make you ask that question.</p>
              <p>At GleeNutrico, we went back to the beginning — to the grains that powered Indian children for centuries before ultra-processing entered the picture. Millets. Ancient. Proven. Powerful.</p>
              <p>We combined them with flavours kids love — real chocolate, real vanilla — and stripped out everything that shouldn't be there.</p>
              <p className="font-sub text-xl font-extrabold text-glee-choco">No refined sugar. No maltodextrin. No preservatives. No artificial flavours. No compromises. Not now. Not ever.</p>
            </div>
          </div>

          <div className="relative rounded-3xl bg-glee-vanilla/60 p-7 md:p-9">
            <Mascot src={squirrelImg} alt="Pip the squirrel mascot holding a millet sprig" size={120} className="absolute -right-6 -top-12 md:-right-14" delay={400} />
            <h2 className="font-display text-3xl text-glee-choco md:text-4xl">Why "Glee"?</h2>
            <div className="mt-4 space-y-3 text-glee-muted">
              <p>Because healthy shouldn't feel like a punishment.</p>
              <p>Because your kid's morning cup should taste like joy, not medicine.</p>
              <p>Because nutrition that's trusted by parents AND loved by kids is possible — and we've proven it.</p>

              <div className="relative mt-3 inline-block rotate-[1.5deg] rounded-2xl bg-glee-blue px-5 py-3 font-hand text-2xl text-white shadow-md transition-transform hover:-rotate-2 hover:scale-[1.03]">
                "Tastes like chocolate, Mumma!" — Aarav, 6
                <span className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 bg-glee-blue" aria-hidden />
              </div>

              <p className="pt-3 font-hand text-2xl text-glee-green-deep">Glee = Good food. Real love. Endless energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-gradient-to-br from-glee-blue/10 via-glee-cream to-glee-green/10 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <span className="font-hand text-2xl text-glee-coral">Our Journey</span>
            <h2 className="mt-1 font-display text-3xl text-glee-choco md:text-4xl">From Question to Cup</h2>
          </div>
          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className={`group relative min-w-[260px] snap-start rounded-3xl border-2 ${m.tone} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-xl md:min-w-0`}
                >
                  <div className="absolute -top-3 left-5 rounded-full bg-glee-choco px-3 py-1 font-display text-xs text-glee-cream">
                    Step {i + 1}
                  </div>
                  <Icon className="h-9 w-9 text-glee-green-deep transition-transform group-hover:scale-110" />
                  <h3 className="mt-3 font-display text-xl text-glee-choco">{m.title}</h3>
                  <p className="mt-1.5 text-sm text-glee-muted">{m.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-glee-cream py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="relative text-center">
            <Mascot src={bunnyImg} alt="Bo the bunny mascot" size={96} className="absolute right-2 -top-6 md:right-12 md:-top-8" delay={800} />
            <h2 className="font-display text-3xl text-glee-choco md:text-4xl">Our Values</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { e: "🌾", t: "Grain-First", b: "Ancient millets, not filler. Real ingredients, always.", tone: "border-glee-green/30" },
              { e: "🚫", t: "Never List", b: "We publish every ingredient. No hiding. No tricks.", tone: "border-glee-coral/30" },
              { e: "💛", t: "Kid-Approved", b: "Nothing ships without actual kid testing. Picky eaters only.", tone: "border-glee-blue/30" },
            ].map((v) => (
              <div key={v.t} className={`rounded-3xl border-2 ${v.tone} bg-white p-7 transition-transform hover:-translate-y-1 hover:rotate-[0.5deg]`}>
                <div className="text-5xl">{v.e}</div>
                <h3 className="mt-3 font-display text-2xl text-glee-choco">{v.t}</h3>
                <p className="mt-2 text-glee-muted">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Glee Gang */}
      <section className="relative overflow-hidden bg-gradient-to-br from-glee-green/10 via-glee-cream to-glee-blue/12 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <span className="font-hand text-2xl text-glee-coral">Say hi to</span>
            <h2 className="mt-1 font-display text-4xl text-glee-choco md:text-5xl">Meet the Glee Gang</h2>
            <p className="mx-auto mt-3 max-w-xl text-glee-muted">
              Our tiny team of furry sidekicks who keep us honest, joyful, and millet-obsessed.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {gang.map((g, i) => (
              <div
                key={g.name}
                className={`group relative rounded-3xl ${g.color} border-2 border-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="mx-auto -mt-16 flex h-32 w-32 items-center justify-center">
                  <Mascot src={g.img} alt={`${g.name} the Glee Kids mascot`} size={128} delay={i * 300} />
                </div>
                <h3 className="mt-4 font-display text-2xl text-glee-choco">{g.name}</h3>
                <div className="font-sub text-sm font-extrabold uppercase tracking-wide text-glee-green-deep">
                  {g.role}
                </div>
                <p className="mt-3 font-hand text-xl text-glee-choco">"{g.line}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-glee-cream py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="font-display text-4xl text-glee-choco md:text-5xl">
            Ready to Give Your Kid Pure Glee?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/products/choco-vanilla-nutrition-drink"
              className="inline-flex items-center gap-2 rounded-full bg-glee-coral px-7 py-4 font-sub text-base font-extrabold text-white shadow-[0_14px_34px_-12px_rgba(255,107,107,0.7)] transition-transform hover:scale-[1.04]"
            >
              Shop Glee Kids <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-glee-choco px-6 py-3.5 font-sub font-extrabold text-glee-choco transition hover:bg-glee-choco hover:text-glee-cream"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
