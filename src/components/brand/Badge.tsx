import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon?: string;
  tone?: "green" | "blue" | "coral" | "sunshine" | "cream";
  className?: string;
}

const toneMap: Record<NonNullable<Props["tone"]>, string> = {
  green: "bg-glee-green/10 text-glee-green-deep border-glee-green/30",
  blue: "bg-glee-blue/15 text-glee-blue-deep border-glee-blue/30",
  coral: "bg-glee-coral/15 text-glee-coral border-glee-coral/30",
  sunshine: "bg-glee-sunshine/30 text-glee-choco border-glee-sunshine",
  cream: "bg-glee-cream text-glee-choco border-glee-vanilla",
};

export function Badge({ children, icon, tone = "green", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-sub font-bold tracking-wide whitespace-nowrap",
        toneMap[tone],
        className,
      )}
    >
      {icon && <span aria-hidden>{icon}</span>}
      {children}
    </span>
  );
}
