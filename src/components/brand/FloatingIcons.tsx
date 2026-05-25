import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Hand-drawn ingredient SVGs kept to the outer margins so they never
 * collide with the headline or product. Subtle mouse-parallax adds depth
 * without distracting from copy.
 */
export function FloatingIcons({ className }: { className?: string }) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 2; // -1..1
      const y = (e.clientY / h - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", `${x * 12}px`);
        el.style.setProperty("--py", `${y * 12}px`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-60",
        "[transform:translate3d(var(--px,0),var(--py,0),0)] transition-transform duration-300 ease-out",
        className,
      )}
      aria-hidden="true"
    >
      {/* top-left corner: green leaf */}
      <svg
        className="absolute top-[6%] left-[3%] h-9 w-9 text-glee-green animate-float"
        style={{ animationDelay: "0s", animationDuration: "7s" }}
        viewBox="0 0 40 40"
        fill="currentColor"
      >
        <path d="M20 4 C 8 8, 4 22, 12 34 C 20 28, 30 20, 36 8 C 28 6, 24 4, 20 4 Z" />
      </svg>

      {/* top-right corner: blue leaf */}
      <svg
        className="absolute top-[9%] right-[4%] h-10 w-10 text-glee-blue animate-float"
        style={{ animationDelay: "1.2s", animationDuration: "8s" }}
        viewBox="0 0 40 40"
        fill="currentColor"
      >
        <path d="M20 36 C 32 32, 36 18, 28 6 C 20 12, 10 20, 4 32 C 12 34, 16 36, 20 36 Z" />
      </svg>

      {/* mid-left edge: cocoa bean */}
      <svg
        className="absolute top-[52%] left-[2%] h-8 w-8 text-glee-choco animate-float"
        style={{ animationDelay: "0.6s", animationDuration: "7.5s" }}
        viewBox="0 0 40 40"
        fill="currentColor"
      >
        <ellipse cx="20" cy="20" rx="10" ry="14" />
      </svg>

      {/* bottom-right corner: millet sprig */}
      <svg
        className="absolute bottom-[10%] right-[3%] h-11 w-11 text-glee-green-deep animate-float"
        style={{ animationDelay: "1.6s", animationDuration: "8s" }}
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M20 36 V 6" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
        <circle cx="26" cy="16" r="2" fill="currentColor" />
        <circle cx="14" cy="22" r="2" fill="currentColor" />
        <circle cx="26" cy="24" r="2" fill="currentColor" />
        <circle cx="14" cy="30" r="2" fill="currentColor" />
      </svg>

      {/* bottom-left edge: droplet */}
      <svg
        className="absolute bottom-[16%] left-[6%] h-7 w-7 text-glee-blue-deep animate-float"
        style={{ animationDelay: "0.9s", animationDuration: "7s" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2 C 6 12, 4 16, 4 18 a8 8 0 0 0 16 0 c 0 -2 -2 -6 -8 -16 z" />
      </svg>
    </div>
  );
}
