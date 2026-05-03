import { cn } from "@/lib/utils";

interface MascotProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  size?: number;
}

export function Mascot({ src, alt, className, delay = 0, size = 120 }: MascotProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      className={cn(
        "select-none animate-bob-slow transition-transform duration-300 hover:scale-110 hover:rotate-3",
        className,
      )}
      style={{ animationDelay: `${delay}ms`, width: size, height: size }}
      draggable={false}
    />
  );
}
