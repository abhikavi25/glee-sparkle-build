import {
  createContext, useContext, useReducer, useState, useCallback, type ReactNode,
} from "react";
import {
  calculatePrice, type PaymentMethod, type PriceBreakdown,
} from "@/lib/pricing";

interface CartState {
  qty: number;
  method: PaymentMethod;
  coupon: string;
}

type Action =
  | { type: "set-qty"; qty: number }
  | { type: "inc" }
  | { type: "dec" }
  | { type: "set-method"; method: PaymentMethod }
  | { type: "set-coupon"; coupon: string }
  | { type: "reset" };

const initial: CartState = { qty: 2, method: "prepaid", coupon: "WITHLOVE" };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "set-qty": return { ...state, qty: Math.max(1, Math.min(10, action.qty)) };
    case "inc": return { ...state, qty: Math.min(10, state.qty + 1) };
    case "dec": return { ...state, qty: Math.max(1, state.qty - 1) };
    case "set-method": return { ...state, method: action.method };
    case "set-coupon": return { ...state, coupon: action.coupon };
    case "reset": return initial;
    default: return state;
  }
}

interface CartCtx {
  state: CartState;
  price: PriceBreakdown;
  setQty: (n: number) => void;
  inc: () => void;
  dec: () => void;
  setMethod: (m: PaymentMethod) => void;
  setCoupon: (c: string) => void;
  reset: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const [isOpen, setOpen] = useState(false);
  const price = calculatePrice(state);

  const value: CartCtx = {
    state,
    price,
    setQty: (n) => dispatch({ type: "set-qty", qty: n }),
    inc: () => dispatch({ type: "inc" }),
    dec: () => dispatch({ type: "dec" }),
    setMethod: (m) => dispatch({ type: "set-method", method: m }),
    setCoupon: (c) => dispatch({ type: "set-coupon", coupon: c }),
    reset: () => dispatch({ type: "reset" }),
    isOpen,
    openCart: useCallback(() => setOpen(true), []),
    closeCart: useCallback(() => setOpen(false), []),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used inside CartProvider");
  return v;
}
