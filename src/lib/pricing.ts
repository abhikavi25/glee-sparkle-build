export type PaymentMethod = "prepaid" | "cod";

export const COUPON_CODE = "WITHLOVE";
export const BASE_PRICE = 599;
export const PREPAID_DISCOUNT_PER_UNIT = 50;
export const FREE_SHIPPING_THRESHOLD = 499;

export interface PriceInput {
  qty: number;
  method: PaymentMethod;
  coupon?: string;
}

export interface PriceBreakdown {
  qty: number;
  unitPrice: number;
  base: number;
  prepaidDiscount: number;
  couponDiscount: number;
  total: number;
  savings: number;
  freeShipping: boolean;
  couponValid: boolean;
  couponMessage?: string;
}

export function calculatePrice({ qty, method, coupon }: PriceInput): PriceBreakdown {
  const safeQty = Math.max(1, qty);
  const base = BASE_PRICE * safeQty;
  const prepaidDiscount = method === "prepaid" ? PREPAID_DISCOUNT_PER_UNIT * safeQty : 0;

  const normalized = (coupon ?? "").trim().toUpperCase();
  const isCouponCodeMatch = normalized === COUPON_CODE;

  let couponDiscount = 0;
  let couponValid = false;
  let couponMessage: string | undefined;

  if (isCouponCodeMatch) {
    if (method !== "prepaid") {
      couponMessage = "WithLove only works on prepaid orders. Switch to UPI/Card to unlock.";
    } else if (safeQty >= 3) {
      couponDiscount = 200;
      couponValid = true;
      couponMessage = "🎉 Code WithLove applied! You're saving ₹200 on this bundle.";
    } else if (safeQty >= 2) {
      couponDiscount = 100;
      couponValid = true;
      couponMessage = "🎉 Code WithLove applied! You're saving ₹100 on this bundle.";
    } else {
      couponMessage = "Add 1 more pack to unlock ₹100 off with WithLove.";
    }
  } else if (normalized.length > 0) {
    couponMessage = "That code didn't work. Try WithLove ✨";
  }

  const total = base - prepaidDiscount - couponDiscount;
  const savings = prepaidDiscount + couponDiscount;
  const unitPrice = method === "prepaid"
    ? BASE_PRICE - PREPAID_DISCOUNT_PER_UNIT
    : BASE_PRICE;

  return {
    qty: safeQty,
    unitPrice,
    base,
    prepaidDiscount,
    couponDiscount,
    total,
    savings,
    freeShipping: method === "prepaid" && total >= FREE_SHIPPING_THRESHOLD,
    couponValid,
    couponMessage,
  };
}

export function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}
