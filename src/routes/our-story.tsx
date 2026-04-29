import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FloatingIcons } from "@/components/brand/FloatingIcons";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Glee Kids by GleeNutrico — Millet Nutrition for Indian Kids" },
      { name: "description", content: "The story of GleeNutrico — why we built India's cleanest millet-based kids nutrition drink. No refined sugar, no maltodextrin, ever." },
      { property: "og:title", content: "We Didn't Start a Brand. We Started a Promise." },
      { property: "og:description", content: "Why GleeNutrico exists, and why we'll never compromise on what goes into your child's cup." },
    ],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <>
      <section className="relative overflow-hidden bg-glee-cream bg-confetti-dots py-20 md:py-28">
        <FloatingIcons />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
          <span className="inline-block font-hand text-2xl text-glee-coral">Our Story</span>
          <h1 className="mt-2 font-display text-5xl leading-[1] text-glee-choco md:text-7xl">
            We Didn't Start a Brand. <br />
            <span className="text-glee-green-deep">We Started a Promise.</span>{" "}
            <span aria-hidden>🌾</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-glee-muted">
            The story of why GleeNutrico exists — and why we'll never compromise on what goes into your child's cup.
          </p>
        </div>
      </section>

      <section className="bg-glee-cream py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-8 space-y-10">
          <div>
            <h2 className="font-display text-3xl text-glee-choco md:text-4xl">It Started With a Label.</h2>
            <div className="mt-5 space-y-4 text-lg text-glee-muted">
              <p>Every parent does it. You flip over the pack. You scan the ingredients. And somewhere between "maltodextrin" and the third form of hidden sugar, something breaks a little.</p>
              <p>We're parents too. And we were tired of the math:</p>
              <p className="font-hand text-2xl text-glee-coral">"Is this actually healthy, or does it just sound healthy?"</p>
              <p className="font-sub text-xl font-extrabold text-glee-choco">So we built something that doesn't make you ask that question.</p>
              <p>At GleeNutrico, we went back to the beginning — to the grains that powered Indian children for centuries before ultra-processing entered the picture. Millets. Ancient. Proven. Powerful.</p>
              <p>We combined them with flavours kids love — real chocolate, real vanilla — and stripped out everything that shouldn't be there.</p>
              <p className="font-sub text-xl font-extrabold text-glee-choco">No refined sugar. No maltodextrin. No preservatives. No artificial flavours. No compromises. Not now. Not ever.</p>
              <p className="font-hand text-2xl text-glee-green-deep">That's Glee. It's not just nutrition. It's a glee-ful childhood — with every sip.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-glee-vanilla/60 p-7">
            <h2 className="font-display text-3xl text-glee-choco md:text-4xl">Why "Glee"?</h2>
            <div className="mt-4 space-y-3 text-glee-muted">
              <p>Because healthy shouldn't feel like a punishment.</p>
              <p>Because your kid's morning cup should taste like joy, not medicine.</p>
              <p>Because nutrition that's trusted by parents AND loved by kids is possible — and we've proven it.</p>
              <p className="font-hand text-2xl text-glee-coral">Glee = Good food. Real love. Endless energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-glee-vanilla/40 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <h2 className="text-center font-display text-3xl text-glee-choco md:text-4xl">Our Values</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { e: "🌾", t: "Grain-First", b: "Ancient millets, not filler. Real ingredients, always.", tone: "border-glee-green/30 bg-glee-green/10" },
              { e: "🚫", t: "Never List", b: "We publish every ingredient. No hiding. No tricks.", tone: "border-glee-coral/30 bg-glee-coral/10" },
              { e: "💛", t: "Kid-Approved", b: "Nothing ships without actual kid testing. Picky eaters only.", tone: "border-glee-blue/30 bg-glee-blue/10" },
            ].map((v) => (
              <div key={v.t} className={`rounded-3xl border-2 ${v.tone} bg-white p-7 transition-transform hover:-translate-y-1`}>
                <div className="text-5xl">{v.e}</div>
                <h3 className="mt-3 font-display text-2xl text-glee-choco">{v.t}</h3>
                <p className="mt-2 text-glee-muted">{v.b}</p>
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
