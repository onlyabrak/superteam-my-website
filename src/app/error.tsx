"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-6xl font-bold text-destructive">Error</div>
        <h1 className="text-2xl font-semibold text-white">Something went wrong</h1>
        <p className="text-white/50 max-w-md mx-auto">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <Button variant="gradient" size="lg" onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
