import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type CardVariant = "glass" | "solid" | "outline";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles: Record<CardVariant, string> = {
  glass: "glass",
  solid: "bg-white/[0.04] border border-white/8",
  outline: "border border-white/10 bg-transparent",
};

const hoverStyles: Record<CardVariant, string> = {
  glass: "hover:glass-hover transition-all duration-300",
  solid: "hover:bg-white/[0.07] hover:border-white/12 transition-all duration-300",
  outline: "hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300",
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", hover = false, padding = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl",
          variantStyles[variant],
          hover && hoverStyles[variant],
          paddingStyles[padding],
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";
export { Card, type CardProps };
