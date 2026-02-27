"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import type { Stat } from "@/types/database";

interface StatsProps {
  stats?: Stat[];
}

const defaultStats = [
  { id: "1", label: "Community Members", value: 500, suffix: "+", icon: "users", sort_order: 1, visible: true, created_at: "" },
  { id: "2", label: "Events Hosted", value: 50, suffix: "+", icon: "calendar", sort_order: 2, visible: true, created_at: "" },
  { id: "3", label: "Grants Distributed", value: 100, suffix: "K USD", icon: "dollar", sort_order: 3, visible: true, created_at: "" },
  { id: "4", label: "Projects Built", value: 30, suffix: "+", icon: "code", sort_order: 4, visible: true, created_at: "" },
  { id: "5", label: "Bounties Completed", value: 200, suffix: "+", icon: "bounty", sort_order: 5, visible: true, created_at: "" },
] satisfies Stat[];

export function Stats({ stats = defaultStats }: StatsProps) {
  return (
    <section className="py-20 sm:py-28 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sol-purple/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.id} delay={i * 0.1} direction="up">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm sm:text-base text-white/50">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
