import { cn } from "@/lib/utils";

interface Props {
  /** Background color of the section ABOVE the divider. */
  from?: string;
  /** Background color of the section BELOW the divider. */
  to?: string;
  flip?: boolean;
  className?: string;
}

/** Organic SVG wave divider — sits between sections. */
export function SectionDivider({
  from = "var(--glee-cream)",
  to = "var(--glee-vanilla)",
  flip,
  className,
}: Props) {
  return (
    <div className={cn("relative w-full leading-[0]", className)} style={{ background: from }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={cn("block h-12 w-full md:h-16", flip && "rotate-180")}
        aria-hidden="true"
      >
        <path
          fill={to}
          d="M0,40 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}
