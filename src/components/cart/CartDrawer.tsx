import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useCart } from "./CartProvider";
import { product } from "@/lib/productData";
import { formatINR } from "@/lib/pricing";
import { toast } from "sonner";

export function CartDrawer() {
  const { isOpen, closeCart, state, price, inc, dec, setMethod, reset } = useCart();

  function handleCheckout() {
    toast.success("Order received! 🎉", {
      description: `We'll WhatsApp you for confirmation. Total: ${formatINR(price.total)}`,
    });
    reset();
    closeCart();
  }

  return (
    <Sheet open={isOpen} onOpenChange={(o) => (o ? null : closeCart())}>
      <SheetContent side="right" className="flex w-full flex-col bg-glee-cream sm:max-w-md">
        <SheetTitle className="font-display text-2xl text-glee-choco">Your Cart</SheetTitle>
        <SheetDescription className="text-glee-muted">
          One step closer to a glee-ful morning ☀️
        </SheetDescription>

        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-glee-vanilla bg-white p-3">
          <img src={product.image} alt={product.alt} className="h-16 w-16 rounded-xl object-cover" />
          <div className="flex-1 min-w-0">
            <div className="font-sub font-bold text-sm text-glee-choco truncate">{product.shortName} • 400g</div>
            <div className="text-xs text-glee-muted">Ages {product.ageRange}</div>
            <div className="mt-1.5 inline-flex items-center gap-2">
              <button onClick={dec} className="h-7 w-7 rounded-full border border-glee-vanilla bg-glee-cream font-bold">−</button>
              <span className="w-6 text-center font-sub font-bold">{state.qty}</span>
              <button onClick={inc} className="h-7 w-7 rounded-full border border-glee-vanilla bg-glee-cream font-bold">+</button>
            </div>
          </div>
          <div className="text-right font-sub font-extrabold text-glee-choco">
            {formatINR(price.unitPrice * state.qty)}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => setMethod("prepaid")}
            className={`rounded-full border-2 px-3 py-2 text-xs font-sub font-extrabold transition ${state.method === "prepaid" ? "border-glee-green-deep bg-glee-green/15 text-glee-green-deep" : "border-glee-vanilla bg-white text-glee-muted"}`}
          >
            Prepaid (save ₹50/pack)
          </button>
          <button
            onClick={() => setMethod("cod")}
            className={`rounded-full border-2 px-3 py-2 text-xs font-sub font-extrabold transition ${state.method === "cod" ? "border-glee-choco bg-glee-vanilla text-glee-choco" : "border-glee-vanilla bg-white text-glee-muted"}`}
          >
            Pay on Delivery
          </button>
        </div>

        <div className="mt-4 space-y-1.5 rounded-2xl bg-white border border-glee-vanilla p-4 text-sm">
          <Row label="Subtotal" value={formatINR(price.base)} />
          {price.prepaidDiscount > 0 && (
            <Row label="Prepaid discount" value={`− ${formatINR(price.prepaidDiscount)}`} positive />
          )}
          {price.couponDiscount > 0 && (
            <Row label="WithLove coupon" value={`− ${formatINR(price.couponDiscount)}`} positive />
          )}
          <div className="my-2 h-px bg-glee-vanilla" />
          <Row label="Total" value={formatINR(price.total)} bold />
          {price.savings > 0 && (
            <div className="font-hand text-lg text-glee-coral">You're saving {formatINR(price.savings)} today 💛</div>
          )}
        </div>

        <button
          onClick={handleCheckout}
          className="mt-auto inline-flex items-center justify-center rounded-full bg-glee-coral px-6 py-3.5 font-sub font-extrabold text-white shadow-[0_10px_30px_-12px_rgba(255,107,107,0.7)]"
        >
          {state.method === "prepaid" ? "Pay Now" : "Place Order"} — {formatINR(price.total)}
        </button>
      </SheetContent>
    </Sheet>
  );
}

function Row({ label, value, positive, bold }: { label: string; value: string; positive?: boolean; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={`text-glee-muted ${bold ? "font-sub font-bold text-glee-choco" : ""}`}>{label}</span>
      <span className={`${bold ? "font-display text-xl text-glee-choco" : positive ? "text-glee-green-deep font-bold" : "text-glee-choco"}`}>{value}</span>
    </div>
  );
}
