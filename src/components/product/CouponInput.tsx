import { useState } from "react";
import confetti from "canvas-confetti";
import { useCart } from "@/components/cart/CartProvider";
import { Check, Tag } from "lucide-react";

export function CouponInput() {
  const { state, setCoupon, price } = useCart();
  const [input, setInput] = useState(state.coupon);

  function apply() {
    setCoupon(input);
    const next = input.trim().toUpperCase();
    if (next === "WITHLOVE" && state.method === "prepaid" && state.qty >= 2) {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#4CAF50", "#4FC3F7", "#FFD93D", "#FF6B6B"],
      });
    }
  }

  return (
    <div className="rounded-2xl border border-dashed border-glee-green/50 bg-glee-green/5 p-4">
      <div className="mb-2 flex items-center gap-2 font-sub text-sm font-bold text-glee-green-deep">
        <Tag className="h-4 w-4" /> Have a coupon?
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && apply()}
          placeholder="WithLove"
          className="flex-1 rounded-full border border-glee-vanilla bg-white px-4 py-2.5 font-sub text-sm uppercase tracking-wider placeholder:normal-case placeholder:tracking-normal placeholder:text-glee-muted focus:border-glee-green focus:outline-none"
        />
        <button
          type="button"
          onClick={apply}
          className="rounded-full bg-glee-choco px-5 py-2.5 font-sub text-sm font-extrabold text-glee-cream transition hover:bg-glee-green-deep"
        >
          Apply
        </button>
      </div>
      {price.couponMessage && (
        <div className={`mt-2 flex items-start gap-1.5 text-xs font-sub font-bold ${price.couponValid ? "text-glee-green-deep" : "text-glee-coral"}`}>
          {price.couponValid && <Check className="h-4 w-4 shrink-0" />}
          <span>{price.couponMessage}</span>
        </div>
      )}
      <div className="mt-2 text-[11px] text-glee-muted">
        ✦ Buy 2 → ₹100 off · ✦ Buy 3 → ₹200 off · prepaid only
      </div>
    </div>
  );
}
