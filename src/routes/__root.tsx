import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-glee-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-glee-choco">404</h1>
        <h2 className="mt-3 font-sub text-xl font-bold text-glee-choco">This page got picky and disappeared</h2>
        <p className="mt-2 text-sm text-glee-muted">Let's get you back to the good stuff.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-glee-coral px-6 py-3 font-sub font-extrabold text-white"
        >
          Take me home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Glee Kids by GleeNutrico — Millet Nutrition Drink for Kids 3–16 | India" },
      { name: "description", content: "India's millet-powered kids nutrition drink. Zero refined sugar, zero maltodextrin, no preservatives. Choco Vanilla flavour kids love." },
      { name: "author", content: "GleeNutrico" },
      { property: "og:title", content: "Glee Kids by GleeNutrico — Millet Nutrition Drink for Kids 3–16 | India" },
      { property: "og:description", content: "India's millet-powered kids nutrition drink. Zero refined sugar, zero maltodextrin, no preservatives. Choco Vanilla flavour kids love." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@GleeNutrico" },
      { name: "twitter:title", content: "Glee Kids by GleeNutrico — Millet Nutrition Drink for Kids 3–16 | India" },
      { name: "twitter:description", content: "India's millet-powered kids nutrition drink. Zero refined sugar, zero maltodextrin, no preservatives. Choco Vanilla flavour kids love." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7cddc59d-b6ab-4d2f-8186-ec518ef9a1a0/id-preview-c3b0bbb6--f03fe48a-262c-4a5e-b0e9-d6a5ef49c683.lovable.app-1777465934206.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7cddc59d-b6ab-4d2f-8186-ec518ef9a1a0/id-preview-c3b0bbb6--f03fe48a-262c-4a5e-b0e9-d6a5ef49c683.lovable.app-1777465934206.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@600;700;800&family=DM+Sans:wght@400;500;600&family=Caveat:wght@600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-glee-cream">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CartDrawer />
      <Toaster richColors position="top-center" />
    </CartProvider>
  );
}
