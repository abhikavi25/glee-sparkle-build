import { useCart } from "@/components/cart/CartProvider";
import { formatINR } from "@/lib/pricing";
import { BundlePicker } from "@/components/product/BundlePicker";
import { Truck, Sparkles } from "lucide-react";

const SERVINGS_PER_PACK = 16;

export function PriceBlock() {
  const { state, setMethod, price } = useCart();
  const totalServings = state.qty * SERVINGS_PER_PACK;
  const perGlass = Math.round(price.total / totalServings);

  // Loss-aversion strip: how close to next tier
  const nextTierMsg =
    state.method === "prepaid" && state.qty === 1
      ? "Add 1 more pack → unlock ₹100 OFF with WithLove"
      : state.method === "prepaid" && state.qty === 2
        ? "Add 1 more pack → unlock ₹100 MORE off (₹200 total)"
        : null;

  return (
    <div className="space-y-4 rounded-3xl border border-glee-vanilla bg-white p-5">
      {/* Live savings hero */}
      <div className="rounded-2xl bg-gradient-to-br from-glee-coral/10 via-glee-sunshine/15 to-glee-green/10 p-4">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="font-sub text-xs font-extrabold uppercase tracking-wider text-glee-coral">
              You're saving
            </div>
            <div key={price.savings} className="font-display text-4xl text-glee-coral animate-scale-in">
              {formatINR(price.savings)}
            </div>
          </div>
          <div className="text-right">
            <div className="font-sub text-xs font-bold text-glee-muted line-through">
              {formatINR(price.base)}
            </div>
            <div className="font-display text-3xl text-glee-choco">{formatINR(price.total)}</div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] font-sub font-bold">
          <span className="text-glee-green-deep inline-flex items-center gap-1">
            <Sparkles className="h-3 w-3" /> ₹{perGlass}/glass · {totalServings} glasses
          </span>
          {price.freeShipping && (
            <span className="text-glee-green-deep inline-flex items-center gap-1">
              <Truck className="h-3 w-3" /> Free shipping
            </span>
          )}
        </div>
      </div>

      {/* Bundle tiles */}
      <BundlePicker />

      {/* Next tier nudge */}
      {nextTierMsg && (
        <div className="rounded-2xl bg-glee-sunshine/30 px-3 py-2.5 text-center font-sub text-xs font-extrabold text-glee-choco animate-fade-in">
          ✨ {nextTierMsg}
        </div>
      )}

      {/* Method toggle */}
      <div>
        <div className="mb-1.5 font-sub text-[11px] font-extrabold uppercase tracking-wider text-glee-muted">
          Payment
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setMethod("prepaid")}
            className={`rounded-full border-2 px-3 py-2 text-xs font-sub font-extrabold transition ${state.method === "prepaid" ? "border-glee-green-deep bg-glee-green/15 text-glee-green-deep" : "border-glee-vanilla bg-white text-glee-muted"}`}
          >
            Prepaid · Save ₹50/pack
          </button>
          <button
            type="button"
            onClick={() => setMethod("cod")}
            className={`rounded-full border-2 px-3 py-2 text-xs font-sub font-extrabold transition ${state.method === "cod" ? "border-glee-choco bg-glee-vanilla text-glee-choco" : "border-glee-vanilla bg-white text-glee-muted"}`}
          >
            COD · Full price
          </button>
        </div>
        {state.method === "cod" && (
          <p className="mt-1.5 text-[11px] font-sub font-bold text-glee-coral">
            ⚠️ Switching to COD removes ₹{50 * state.qty} prepaid discount + WithLove offer.
          </p>
        )}
      </div>
    </div>
  );
}
