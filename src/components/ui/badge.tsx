import { cn } from "@/lib/utils/cn";

type BadgeVariant = "default" | "purple" | "green" | "yellow" | "red" | "blue";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-white/10 text-white/80 border-white/10",
  purple: "bg-sol-purple/15 text-sol-purple border-sol-purple/20",
  green: "bg-sol-green/15 text-sol-green border-sol-green/20",
  yellow: "bg-my-yellow/15 text-my-yellow border-my-yellow/20",
  red: "bg-my-red/15 text-my-red border-my-red/20",
  blue: "bg-my-blue/15 text-blue-400 border-my-blue/20",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
