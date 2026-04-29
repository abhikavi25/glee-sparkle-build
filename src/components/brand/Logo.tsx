import logoSrc from "@/assets/gleenutrico-logo.png";

interface Props {
  className?: string;
  variant?: "default" | "onDark";
}

export function Logo({ className = "h-10 w-auto", variant = "default" }: Props) {
  if (variant === "onDark") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-glee-cream px-3 py-1.5">
        <img src={logoSrc} alt="GleeNutrico — Glee Kids" className={className} />
      </span>
    );
  }
  return <img src={logoSrc} alt="GleeNutrico — Glee Kids" className={className} />;
}
