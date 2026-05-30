import { useCart } from "@/components/cart/CartProvider";
import { formatINR } from "@/lib/pricing";

export function PriceBlock() {
  const { state, setMethod, inc, dec, setQty, price } = useCart();

  return (
    <div className="space-y-4 rounded-3xl border border-glee-vanilla bg-white p-5">
      {/* Price comparison */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className="font-sub text-sm font-bold text-glee-muted">Pay on Delivery</span>
          <span className="font-display text-xl text-glee-muted line-through">₹599</span>
        </div>
        <div className="flex items-baseline justify-between rounded-2xl bg-glee-green/10 px-3 py-2">
          <div>
            <div className="font-sub text-sm font-bold text-glee-green-deep">Prepaid (UPI/Card)</div>
            <div className="text-[11px] text-glee-muted">Auto ₹50/pack off</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl text-glee-choco">₹549</span>
            <span className="rounded-full bg-glee-coral px-2 py-0.5 text-[10px] font-bold text-white">SAVE ₹50</span>
          </div>
        </div>
      </div>

      {/* Method toggle */}
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setMethod("prepaid")}
          className={`rounded-full border-2 px-3 py-2 text-xs font-sub font-extrabold transition ${state.method === "prepaid" ? "border-glee-green-deep bg-glee-green/15 text-glee-green-deep" : "border-glee-vanilla bg-white text-glee-muted"}`}
        >
          Prepaid · ₹549
        </button>
        <button
          type="button"
          onClick={() => setMethod("cod")}
          className={`rounded-full border-2 px-3 py-2 text-xs font-sub font-extrabold transition ${state.method === "cod" ? "border-glee-choco bg-glee-vanilla text-glee-choco" : "border-glee-vanilla bg-white text-glee-muted"}`}
        >
          COD · ₹599
        </button>
      </div>

      {/* Qty */}
      <div className="flex items-center justify-between">
        <span className="font-sub text-sm font-bold text-glee-choco">Quantity</span>
        <div className="inline-flex items-center gap-2">
          <button onClick={dec} className="h-9 w-9 rounded-full border border-glee-vanilla bg-glee-cream font-bold text-glee-choco hover:bg-glee-vanilla">−</button>
          <input
            type="number"
            min={1}
            max={10}
            value={state.qty}
            onChange={(e) => setQty(parseInt(e.target.value) || 1)}
            className="h-9 w-14 rounded-full border border-glee-vanilla bg-white text-center font-sub font-extrabold text-glee-choco focus:outline-none"
          />
          <button onClick={inc} className="h-9 w-9 rounded-full border border-glee-vanilla bg-glee-cream font-bold text-glee-choco hover:bg-glee-vanilla">+</button>
        </div>
      </div>

      {/* Totals strip when discounts apply */}
      {price.savings > 0 && (
        <div className="rounded-2xl bg-glee-sunshine/30 px-3 py-2 text-center font-sub text-sm font-extrabold text-glee-choco">
          You save {formatINR(price.savings)} • Total {formatINR(price.total)}
        </div>
      )}
    </div>
  );
}
