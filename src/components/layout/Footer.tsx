import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-glee-green-deep via-glee-choco to-glee-blue-deep text-glee-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Logo variant="onDark" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs font-body text-sm text-glee-cream/80">
            Glee Kids — Real Nutrition. Real Fun.
          </p>
          <p className="mt-2 font-hand text-xl text-glee-sunshine">No Junk. Seriously.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm font-sub">
          {[
            { to: "/", label: "Home" },
            { to: "/products/choco-vanilla-nutrition-drink", label: "Shop" },
            { to: "/blog", label: "Blog" },
            { to: "/our-story", label: "Our Story" },
            { to: "/blog", label: "FAQs" },
            { to: "/blog", label: "Shipping" },
            { to: "/blog", label: "Returns" },
          ].map((l) => (
            <Link key={l.label} to={l.to} className="text-glee-cream/85 transition hover:text-glee-sunshine">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-sub text-sm font-bold text-glee-cream/90">Find us</div>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-glee-cream/10 transition hover:bg-glee-sunshine hover:text-glee-choco">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-glee-cream/10 transition hover:bg-glee-sunshine hover:text-glee-choco">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="mailto:hello@gleenutrico.com" aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-glee-cream/10 transition hover:bg-glee-sunshine hover:text-glee-choco">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-glee-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-glee-cream/70 md:flex-row md:px-8">
          <span>© 2025 GleeNutrico Foods Pvt. Ltd.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-glee-sunshine">Privacy Policy</a>
            <a href="#" className="hover:text-glee-sunshine">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
