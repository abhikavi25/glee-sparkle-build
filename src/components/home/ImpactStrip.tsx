import impactImg from "@/assets/impact-hero.jpg";

export function ImpactStrip() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: "linear-gradient(135deg, #5C2018 0%, #8B4423 60%, #A0522D 100%)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:px-8">
        <div className="text-glee-cream">
          <span className="font-hand text-3xl text-glee-sunshine">₹5 from every pack</span>
          <h2 className="mt-2 font-display text-4xl leading-tight text-glee-cream md:text-5xl">
            Gives Meals. Gives Hope.
          </h2>
          <p className="mt-5 max-w-md text-glee-cream/85">
            Every pack you buy helps us provide nutritious meals to children at
            orphanages across India. Together, we've funded countless smiles —
            and we're just getting started.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm">
              <div className="text-6xl leading-none" aria-label="smiles">😊</div>
              <div className="mt-2 font-sub text-sm font-extrabold uppercase tracking-wide text-glee-sunshine">
                Smiles Funded
              </div>
              <div className="mt-1 text-xs text-glee-cream/75">
                Every pack adds another one.
              </div>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm">
              <div className="font-display text-5xl text-glee-cream">₹5</div>
              <div className="mt-2 font-sub text-sm font-extrabold uppercase tracking-wide text-glee-sunshine">
                From Every Pack
              </div>
              <div className="mt-1 text-xs text-glee-cream/75">
                Goes straight to meals.
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-glee-sunshine/30 blur-2xl" aria-hidden />
          <img
            src={impactImg}
            alt="Smiling children sharing a nutritious meal — supported by GleeNutrico"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
