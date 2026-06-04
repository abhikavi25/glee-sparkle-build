export function AnnouncementBar() {
  const items = [
    "₹5 from every pack feeds a child at an orphanage",
    "Free shipping on prepaid orders",
    "Use code WITHLOVE for extra savings 🎁",
  ];
  const loop = [...items, ...items, ...items];
  return (
    <div className="bg-glee-choco text-glee-cream overflow-hidden">
      <div className="flex animate-marquee gap-10 whitespace-nowrap py-2 font-sub text-xs font-bold">
        {loop.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            {t} <span className="text-glee-sunshine">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
