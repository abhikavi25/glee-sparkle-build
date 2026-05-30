import { useCart } from "@/components/cart/CartProvider";
import { formatINR } from "@/lib/pricing";
import { ShoppingBag, Truck } from "lucide-react";

export function AddToCartBar() {
  const { price, openCart, state } = useCart();
  const cta = state.method === "prepaid" ? "Buy Now — Prepaid" : "Pay on Delivery";

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={openCart}
        className="relative w-full overflow-hidden rounded-full bg-glee-coral px-6 py-4 font-sub text-base font-extrabold text-white shadow-[0_14px_34px_-12px_rgba(255,107,107,0.7)] transition-transform hover:scale-[1.02]"
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          {cta} — {formatINR(price.total)}
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

      {price.freeShipping && (
        <div className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glee-green/10 px-4 py-2 text-xs font-sub font-bold text-glee-green-deep">
          <Truck className="h-4 w-4" /> Free shipping on prepaid orders above ₹499 ✅
        </div>
      )}
    </div>
  );
}
