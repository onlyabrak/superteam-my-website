import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-8xl font-bold gradient-text">404</div>
        <h1 className="text-2xl font-semibold text-white">Page Not Found</h1>
        <p className="text-white/50 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className={buttonVariants({ variant: "gradient", size: "lg" })}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
