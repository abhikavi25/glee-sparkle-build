import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/brand/Badge";
import { posts, featuredPost, categories, type BlogCategory } from "@/lib/blogData";
import { toast } from "sonner";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Glee Blog — Kids Nutrition, Millet Tips & Clean Eating Guides | GleeNutrico" },
      { name: "description", content: "Real talk on kids' nutrition. Articles on millets, no-sugar diets, label decoding and clean-label food guides — from the team at Glee Kids by GleeNutrico." },
      { property: "og:title", content: "From The Glee Kitchen — Kids Nutrition Real Talk" },
      { property: "og:description", content: "Expert articles on kids nutrition, millet benefits, and clean-label eating for Indian families." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [filter, setFilter] = useState<BlogCategory | "All">("All");
  const filtered = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    if (!email.includes("@")) {
      toast.error("That email looks off — try again?");
      return;
    }
    toast.success("You're in! 💛", { description: "Check your inbox for a hello." });
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="bg-glee-cream bg-confetti-dots py-16">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
          <h1 className="font-display text-5xl text-glee-choco md:text-6xl">
            From The Glee Kitchen <span aria-hidden>📖</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-glee-muted">
            Real talk on kids' nutrition. No fluff. No filler. <span className="font-hand text-xl text-glee-coral">(Just like our products.)</span>
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {(["All", ...categories] as const).map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c as BlogCategory | "All")}
                  className={`rounded-full border-2 px-4 py-2 font-sub text-sm font-extrabold transition ${active ? "border-glee-choco bg-glee-choco text-glee-cream" : "border-glee-vanilla bg-white text-glee-choco hover:border-glee-green"}`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-glee-cream pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Link
            to="/blog"
            className="group block overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_70px_-30px_rgba(42,26,14,0.3)] transition-transform hover:-translate-y-1"
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden md:aspect-auto bg-glee-vanilla">
                <img src={featuredPost.image} alt={featuredPost.title} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-2">
                  <Badge tone="coral">Featured</Badge>
                  <Badge tone="green">{featuredPost.category}</Badge>
                </div>
                <h2 className="mt-4 font-display text-3xl text-glee-choco md:text-4xl">{featuredPost.title}</h2>
                <p className="mt-3 text-glee-muted">{featuredPost.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 text-sm text-glee-muted">
                  <span>{featuredPost.readTime}</span>
                  <span className="inline-flex items-center gap-1 font-sub font-extrabold text-glee-coral">Read the Full Story <ArrowRight className="h-4 w-4" /></span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-glee-vanilla/30 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <Link key={p.slug} to="/blog" className="group block overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-30px_rgba(42,26,14,0.25)] transition-transform hover:-translate-y-1">
                <div className="aspect-[16/10] overflow-hidden bg-glee-vanilla">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <Badge tone="green">{p.category}</Badge>
                  <h3 className="mt-3 font-display text-xl text-glee-choco">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-glee-muted">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-glee-muted">
                    <span>{p.readTime}</span>
                    <span className="inline-flex items-center gap-1 font-sub font-extrabold text-glee-coral">Read more <ArrowRight className="h-3 w-3" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-glee-muted py-10">No articles in this category yet — check back soon!</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #FFD93D 0%, #F5E6C3 100%)" }}>
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <h2 className="font-display text-4xl text-glee-choco md:text-5xl">
            Get the Good Stuff in Your Inbox <span aria-hidden>📬</span>
          </h2>
          <p className="mt-3 text-glee-choco/80">
            Nutrition tips, new recipes, and exclusive Glee offers — zero spam.
          </p>
          <form onSubmit={subscribe} className="mx-auto mt-6 flex max-w-lg flex-col gap-2 sm:flex-row">
            <input
              required
              name="email"
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full border-2 border-glee-choco/20 bg-white px-5 py-3 font-sub text-sm focus:border-glee-green focus:outline-none"
            />
            <button type="submit" className="rounded-full bg-glee-coral px-6 py-3 font-sub font-extrabold text-white shadow-lg transition-transform hover:scale-[1.04]">
              Subscribe →
            </button>
          </form>
          <p className="mt-3 text-xs text-glee-choco/70">
            We respect your inbox like we respect your kid's body — no junk, ever.
          </p>
        </div>
      </section>
    </>
  );
}
