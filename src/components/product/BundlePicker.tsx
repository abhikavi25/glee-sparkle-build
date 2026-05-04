import { useCart } from "@/components/cart/CartProvider";
import { calculatePrice, formatINR, BASE_PRICE } from "@/lib/pricing";
import { Check } from "lucide-react";

const SERVINGS_PER_PACK = 16;

type Tile = { qty: number; label: string; tag: string; emoji: string; popular?: boolean; best?: boolean };

const tiles: Tile[] = [
  { qty: 1, label: "1 Pack", tag: "Trial size", emoji: "🥛" },
  { qty: 2, label: "2 Packs", tag: "MOST PARENTS PICK THIS", emoji: "💛", popular: true },
  { qty: 3, label: "3 Packs", tag: "BEST VALUE", emoji: "🏆", best: true },
];

export function BundlePicker() {
  const { state, setQty, setMethod, setCoupon } = useCart();

  function pick(qty: number) {
    setQty(qty);
    setMethod("prepaid");
    setCoupon("WITHLOVE");
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-sub text-sm font-extrabold uppercase tracking-wider text-glee-choco">
          Pick your bundle
        </h3>
        <span className="font-hand text-base text-glee-coral">Lock in your savings ✨</span>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {tiles.map((t) => {
          const p = calculatePrice({ qty: t.qty, method: "prepaid", coupon: "WITHLOVE" });
          const mrp = BASE_PRICE * t.qty;
          const perGlass = Math.round(p.total / (t.qty * SERVINGS_PER_PACK));
          const active = state.qty === t.qty;
          const ring = t.popular
            ? "border-glee-coral"
            : t.best
              ? "border-glee-green-deep"
              : "border-glee-vanilla";
          return (
            <button
              key={t.qty}
              type="button"
              onClick={() => pick(t.qty)}
              className={`relative rounded-2xl border-2 ${active ? `${ring} bg-white shadow-[0_14px_30px_-18px_rgba(42,26,14,0.45)]` : "border-glee-vanilla bg-white/70 hover:bg-white"} px-2 py-4 text-left transition ${t.popular ? "scale-[1.04] md:scale-[1.06]" : ""}`}
            >
              {(t.popular || t.best) && (
                <span
                  className={`absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white ${t.popular ? "bg-glee-coral" : "bg-glee-green-deep"}`}
                >
                  {t.tag}
                </span>
              )}
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl">{t.emoji}</div>
                <div className="mt-1 font-display text-lg leading-none text-glee-choco">{t.label}</div>
                {p.savings > 0 ? (
                  <div className="mt-1 text-[10px] font-sub font-bold text-glee-muted line-through">
                    {formatINR(mrp)}
                  </div>
                ) : (
                  <div className="mt-1 h-3" />
                )}
                <div className="font-display text-xl text-glee-choco">{formatINR(p.total)}</div>
                <div className="mt-0.5 text-[10px] font-sub font-bold text-glee-green-deep">
                  ₹{perGlass}/glass
                </div>
                {p.savings > 0 && (
                  <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-glee-coral/10 px-2 py-0.5 text-[10px] font-extrabold text-glee-coral">
                    SAVE {formatINR(p.savings)}
                  </div>
                )}
                {active && (
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-extrabold text-glee-green-deep">
                    <Check className="h-3 w-3" /> Selected
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
