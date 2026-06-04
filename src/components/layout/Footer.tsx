import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const WHATSAPP_NUMBER = "+91 90000 00000";
const WHATSAPP_LINK = "https://wa.me/919000000000";
const EMAIL = "hello@gleenutrico.com";

export function Footer() {
  return (
    <footer className="bg-glee-choco text-glee-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 md:px-8">
        <div>
          <Logo variant="onDark" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs font-body text-sm text-glee-cream/80">
            Glee Kids — Real Nutrition. Real Fun.
          </p>
          <p className="mt-2 font-hand text-xl text-glee-sunshine">No Junk. Seriously.</p>
        </div>

        <div>
          <div className="font-sub text-sm font-bold uppercase tracking-wide text-glee-sunshine">
            Quick Links
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-sub">
            {[
              { to: "/", label: "Home" },
              { to: "/products/choco-vanilla-nutrition-drink", label: "Shop" },
              { to: "/blog", label: "Blog" },
              { to: "/our-story", label: "Our Story" },
              { to: "/blog", label: "FAQs" },
              { to: "/blog", label: "Shipping" },
              { to: "/blog", label: "Returns" },
            ].map((l, i) => (
              <Link
                key={`${l.label}-${i}`}
                to={l.to}
                className="text-glee-cream/85 transition hover:text-glee-sunshine"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="font-sub text-sm font-bold uppercase tracking-wide text-glee-sunshine">
            Contact Us
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-3 text-glee-cream/90 transition hover:text-glee-sunshine"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-glee-green/20 text-glee-sunshine">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-glee-cream/60">WhatsApp</span>
                  <span className="font-sub font-bold">{WHATSAPP_NUMBER}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-start gap-3 text-glee-cream/90 transition hover:text-glee-sunshine"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-glee-coral/25 text-glee-sunshine">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-glee-cream/60">Email</span>
                  <span className="font-sub font-bold">{EMAIL}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-sub text-sm font-bold uppercase tracking-wide text-glee-sunshine">
            Find Us
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-glee-cream/10 transition hover:bg-glee-sunshine hover:text-glee-choco"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-glee-cream/10 transition hover:bg-glee-sunshine hover:text-glee-choco"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-glee-cream/10 transition hover:bg-glee-sunshine hover:text-glee-choco"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-glee-cream/70">
            Mon–Sat · 10am – 7pm IST
          </p>
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
