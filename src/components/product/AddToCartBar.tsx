import { useCart } from "@/components/cart/CartProvider";
import { formatINR } from "@/lib/pricing";
import { ShoppingBag, Lock, Truck, RotateCcw } from "lucide-react";

export function AddToCartBar() {
  const { price, openCart, state } = useCart();
  const cta =
    price.savings > 0
      ? `Lock in ${formatINR(price.savings)} off — Buy ${state.qty} ${state.qty > 1 ? "Packs" : "Pack"}`
      : `Buy ${state.qty} ${state.qty > 1 ? "Packs" : "Pack"} — ${formatINR(price.total)}`;

  return (
    <>
      <div className="space-y-3">
        <button
          type="button"
          onClick={openCart}
          className="relative w-full overflow-hidden rounded-full bg-glee-coral px-6 py-4 font-sub text-base font-extrabold text-white shadow-[0_14px_34px_-12px_rgba(255,107,107,0.7)] transition-transform hover:scale-[1.02]"
        >
          <span className="relative z-10 inline-flex items-center justify-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <span>{cta}</span>
            <span className="font-display text-lg">· {formatINR(price.total)}</span>
          </span>
          <span className="shimmer-cta absolute inset-0 rounded-full" aria-hidden />
        </button>

        <button
          type="button"
          onClick={openCart}
          className="w-full rounded-full border-2 border-glee-choco bg-transparent px-6 py-3 font-sub font-extrabold text-glee-choco transition hover:bg-glee-choco hover:text-glee-cream"
        >
          Add to Cart
        </button>

        {/* Trust micro-chips */}
        <div className="grid grid-cols-3 gap-1.5">
          <div className="inline-flex items-center justify-center gap-1 rounded-full bg-glee-cream px-2 py-1.5 text-[10px] font-sub font-extrabold text-glee-choco">
            <Lock className="h-3 w-3" /> Secure
          </div>
          <div className="inline-flex items-center justify-center gap-1 rounded-full bg-glee-cream px-2 py-1.5 text-[10px] font-sub font-extrabold text-glee-choco">
            <Truck className="h-3 w-3" /> Ships 24h
          </div>
          <div className="inline-flex items-center justify-center gap-1 rounded-full bg-glee-cream px-2 py-1.5 text-[10px] font-sub font-extrabold text-glee-choco">
            <RotateCcw className="h-3 w-3" /> 100% Refund
          </div>
        </div>

        <p className="text-center text-[11px] font-sub font-bold text-glee-muted">
          Kid doesn't love it? Keep the pack — full refund, no questions.
        </p>
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-glee-vanilla bg-glee-cream/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="font-display text-lg leading-none text-glee-choco">
              {formatINR(price.total)}
            </div>
            {price.savings > 0 && (
              <div className="text-[10px] font-sub font-extrabold text-glee-coral">
                You save {formatINR(price.savings)} ✨
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={openCart}
            className="flex-[1.4] rounded-full bg-glee-coral px-4 py-3 font-sub text-sm font-extrabold text-white shadow-[0_10px_24px_-10px_rgba(255,107,107,0.7)]"
          >
            <ShoppingBag className="mr-1 inline h-4 w-4" />
            Buy {state.qty} {state.qty > 1 ? "Packs" : "Pack"}
          </button>
        </div>
      </div>
    </>
  );
}
