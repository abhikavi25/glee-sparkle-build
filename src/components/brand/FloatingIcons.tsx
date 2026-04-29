import { cn } from "@/lib/utils";

/** Scattered hand-drawn-style ingredient SVGs that float playfully behind hero. */
export function FloatingIcons({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* leaf top-left */}
      <svg className="absolute top-[8%] left-[6%] h-10 w-10 text-glee-green animate-float" style={{ animationDelay: "0s" }} viewBox="0 0 40 40" fill="currentColor">
        <path d="M20 4 C 8 8, 4 22, 12 34 C 20 28, 30 20, 36 8 C 28 6, 24 4, 20 4 Z" />
      </svg>
      {/* blue leaf top-right */}
      <svg className="absolute top-[14%] right-[8%] h-12 w-12 text-glee-blue animate-float" style={{ animationDelay: "1s" }} viewBox="0 0 40 40" fill="currentColor">
        <path d="M20 36 C 32 32, 36 18, 28 6 C 20 12, 10 20, 4 32 C 12 34, 16 36, 20 36 Z" />
      </svg>
      {/* cocoa bean mid-left */}
      <svg className="absolute top-[55%] left-[4%] h-9 w-9 text-glee-choco animate-float" style={{ animationDelay: "0.5s" }} viewBox="0 0 40 40" fill="currentColor">
        <ellipse cx="20" cy="20" rx="10" ry="14" />
      </svg>
      {/* sunshine dot top-mid */}
      <svg className="absolute top-[6%] left-[42%] h-6 w-6 text-glee-sunshine animate-bounce-soft" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
      {/* millet sprig bottom-right */}
      <svg className="absolute bottom-[12%] right-[5%] h-12 w-12 text-glee-green-deep animate-float" style={{ animationDelay: "1.4s" }} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M20 36 V 6" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
        <circle cx="26" cy="16" r="2" fill="currentColor" />
        <circle cx="14" cy="22" r="2" fill="currentColor" />
        <circle cx="26" cy="24" r="2" fill="currentColor" />
        <circle cx="14" cy="30" r="2" fill="currentColor" />
      </svg>
      {/* droplet bottom-left */}
      <svg className="absolute bottom-[18%] left-[18%] h-8 w-8 text-glee-blue-deep animate-float" style={{ animationDelay: "0.8s" }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 C 6 12, 4 16, 4 18 a8 8 0 0 0 16 0 c 0 -2 -2 -6 -8 -16 z" />
      </svg>
      {/* coral sparkle top-right */}
      <svg className="absolute top-[40%] right-[20%] h-5 w-5 text-glee-coral animate-bounce-soft" style={{ animationDelay: "0.3s" }} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
    </div>
  );
}
