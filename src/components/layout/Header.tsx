import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingBag } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/components/cart/CartProvider";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/products/choco-vanilla-nutrition-drink", label: "Shop" },
  { to: "/blog", label: "Blog" },
  { to: "/our-story", label: "Our Story" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { state, openCart } = useCart();
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "bg-glee-cream/95 backdrop-blur shadow-[0_4px_20px_-12px_rgba(42,26,14,0.25)]"
          : "bg-glee-cream/80 backdrop-blur-sm",
      )}
    >
      <div className="bg-glee-choco text-glee-cream text-center text-[11px] md:text-xs font-sub font-extrabold tracking-wide py-1.5 px-3">
        ⚡ FLAT ₹200 OFF on 3-packs · Code <span className="font-hand text-base text-glee-sunshine">WITHLOVE</span> auto-applied · Free shipping ₹499+
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Logo className="h-10 w-auto md:h-11" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = loc.pathname === l.to ||
              (l.to !== "/" && loc.pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "font-sub text-sm font-bold transition-colors",
                  active ? "text-glee-green-deep" : "text-glee-choco hover:text-glee-green-deep",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-glee-vanilla bg-white text-glee-choco transition hover:bg-glee-vanilla"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-glee-coral px-1 text-[10px] font-bold text-white">
              {state.qty}
            </span>
          </button>

          <Link
            to="/products/choco-vanilla-nutrition-drink"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-glee-coral px-5 py-2.5 font-sub text-sm font-extrabold text-white shadow-[0_8px_24px_-10px_rgba(255,107,107,0.7)] transition-transform hover:scale-[1.04]"
          >
            Buy Now <span aria-hidden>→</span>
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-glee-vanilla bg-white"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-glee-cream">
              <SheetTitle className="font-display text-2xl text-glee-choco">Menu</SheetTitle>
              <div className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-4 py-3 font-sub text-lg font-bold text-glee-choco transition hover:bg-glee-vanilla"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/products/choco-vanilla-nutrition-drink"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-glee-coral px-5 py-3 font-sub font-extrabold text-white"
                >
                  Buy Now →
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
