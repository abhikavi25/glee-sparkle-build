export function Instructions() {
  const steps = [
    {
      n: "01",
      icon: "🥄",
      title: "Scoop",
      body: "2 heaped scoops for ages 3–8, 3 scoops for ages 9–16.",
    },
    {
      n: "02",
      icon: "🥛",
      title: "Add Warm Milk",
      body: "150–200ml of warm milk. Or cold milk. Or a banana smoothie.",
    },
    {
      n: "03",
      icon: "🎉",
      title: "Stir & Enjoy",
      body: "Stir for 30 seconds and watch them ask for another cup.",
    },
  ];

  return (
    <section className="bg-glee-cream py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="text-center">
          <span className="font-hand text-2xl text-glee-coral">Easy as 1-2-3</span>
          <h2 className="mt-1 font-display text-3xl text-glee-choco md:text-4xl">
            How to Prepare Your Glee Cup
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-glee-muted">
            One cup. Three steps. Zero fuss. Perfect for school mornings.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative rounded-3xl border-2 border-glee-vanilla bg-white p-7 transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -top-3 left-6 rounded-full bg-glee-choco px-3 py-1 font-display text-xs text-glee-cream">
                Step {s.n}
              </div>
              <div className="text-6xl">{s.icon}</div>
              <h3 className="mt-4 font-display text-2xl text-glee-choco">{s.title}</h3>
              <p className="mt-2 text-glee-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-hand text-2xl text-glee-green-deep">
          Best served warm at breakfast or after school. 💛
        </p>
      </div>
    </section>
  );
}
