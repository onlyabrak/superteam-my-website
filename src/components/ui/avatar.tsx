import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src?: string | null;
  alt: string;
  size?: AvatarSize;
  className?: string;
}

const sizeStyles: Record<AvatarSize, { className: string; px: number }> = {
  sm: { className: "h-8 w-8", px: 32 },
  md: { className: "h-10 w-10", px: 40 },
  lg: { className: "h-14 w-14", px: 56 },
  xl: { className: "h-20 w-20", px: 80 },
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  const { className: sizeClass, px } = sizeStyles[size];

  if (!src) {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-full gradient-sol text-white font-semibold",
          sizeClass,
          size === "sm" && "text-xs",
          size === "md" && "text-sm",
          size === "lg" && "text-base",
          size === "xl" && "text-lg",
          className,
        )}
      >
        {getInitials(alt)}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border-2 border-white/10",
        sizeClass,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={px}
        height={px}
        className="object-cover"
      />
    </div>
  );
}
