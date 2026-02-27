import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "default" | "outline" | "ghost" | "gradient" | "destructive";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-white/10 text-white hover:bg-white/15 border border-white/10",
  outline:
    "border border-white/20 text-white hover:bg-white/5 hover:border-white/30",
  ghost: "text-white/70 hover:text-white hover:bg-white/5",
  gradient:
    "gradient-sol text-white font-medium shadow-lg shadow-sol-purple/25 hover:shadow-sol-purple/40 hover:brightness-110 border-0",
  destructive:
    "bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm rounded-md gap-1.5",
  md: "h-10 px-5 text-sm rounded-lg gap-2",
  lg: "h-12 px-7 text-base rounded-xl gap-2.5",
  icon: "h-10 w-10 rounded-lg",
};

/** Get button class names without rendering an element. Useful for Link-as-button. */
export function buttonVariants({
  variant = "default",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.98]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          "disabled:pointer-events-none disabled:opacity-50",
          "cursor-pointer",
          className,
        )}
        disabled={disabled}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
