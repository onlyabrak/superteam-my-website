"use client";

import { motion } from "framer-motion";

export function HeroGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Main gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-sol-purple/10 via-background to-background" />

      {/* Animated orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-sol-purple/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-40 h-[500px] w-[500px] rounded-full bg-sol-green/15 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-my-yellow/10 blur-[100px]"
      />

      {/* Batik pattern overlay — fades to black */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url(/assets/batik-parang-tile.svg)`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          maskImage: "linear-gradient(to bottom, white 0%, white 20%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.05) 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, white 0%, white 20%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.05) 80%, transparent 100%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
