"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { HeroGradient } from "@/components/backgrounds/hero-gradient";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export function Hero({
  headline = "Building the Future of Solana in Malaysia",
  subheadline = "Join Malaysia's premier Solana community — connecting builders, creators, and innovators across the ecosystem.",
  ctaPrimary = "Join the Community",
  ctaSecondary = "Explore Events",
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <HeroGradient />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sol-purple/30 bg-sol-purple/10 px-4 py-1.5 text-sm text-sol-purple">
            <span className="h-1.5 w-1.5 rounded-full bg-sol-green animate-pulse" />
            Powered by Solana
          </span>
        </motion.div>

        {/* Headline with wau bulan */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
          >
            <span className="gradient-text">{headline}</span>
          </motion.h1>

          {/* Wau bulan — hanging below the word "Malaysia" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -bottom-20 sm:-bottom-24 lg:-bottom-28 -right-[5%] sm:-right-[2%] lg:right-[2%] pointer-events-none rotate-[15deg]"
          >
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [15, 18, 15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/assets/wau-bulan.png"
                alt=""
                width={280}
                height={280}
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 drop-shadow-[0_0_40px_rgba(153,69,255,0.3)]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          {subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://discord.gg/superteammy"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "gradient", size: "lg" })}
          >
            {ctaPrimary}
          </Link>
          <Link
            href="#events"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            {ctaSecondary}
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
