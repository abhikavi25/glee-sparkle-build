import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

/**
 * Auto-playing, muted, looping background video block.
 * Drop your MP4 at src/assets/no-junk-loop.mp4 and replace the src below.
 */
export function NoJunkVideo() {
  return (
    <section className="relative overflow-hidden bg-glee-choco py-24">
      {/* Background video — replace src with uploaded MP4 */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
        poster="/__l5e/no-junk-poster.jpg"
        aria-hidden
      >
        {/* TODO: drop src/assets/no-junk-loop.mp4 here once uploaded */}
        <source src="" type="video/mp4" />
      </video>

      {/* Warm overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(42,26,14,0.78) 0%, rgba(42,26,14,0.45) 60%, rgba(46,125,50,0.55) 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center text-glee-cream md:px-8">
        <span className="font-hand text-3xl text-glee-sunshine">Real talk:</span>
        <h2 className="mt-2 font-display text-4xl leading-tight md:text-6xl">
          We Read the Labels So You Don't Have To.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-glee-cream/90">
          Refined sugar. Maltodextrin. Artificial flavours. Preservatives.
          We said no to all of it — and went back to ancient Indian supergrains
          your kid actually deserves.
        </p>
        <p className="mt-6 font-hand text-3xl text-glee-sunshine">
          Because your kid deserves better than "not bad for them." They deserve Glee.
        </p>
        <Link
          to="/products/choco-vanilla-nutrition-drink"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-glee-coral px-7 py-4 font-sub text-base font-extrabold text-white shadow-[0_14px_34px_-12px_rgba(255,107,107,0.7)] transition-transform hover:scale-[1.04]"
        >
          See What's Inside <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
