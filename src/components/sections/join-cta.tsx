"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";

interface JoinCtaProps {
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export function JoinCta({
  headline = "Ready to Build?",
  description = "Join Superteam Malaysia and be part of the fastest-growing Solana community in Southeast Asia.",
  ctaText = "Join Discord",
  ctaUrl = "https://discord.gg/superteammy",
}: JoinCtaProps) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sol-purple/10 via-transparent to-sol-green/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6">
            {headline}
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "gradient", size: "lg" })}
            >
              {ctaText}
            </Link>
            <Link
              href="https://t.me/SuperteamMY"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Join Telegram
            </Link>
            <Link
              href="https://twitter.com/SuperteamMY"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Follow on X
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
