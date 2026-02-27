"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import type { Partner } from "@/types/database";

interface PartnersProps {
  partners?: Partner[];
}

const defaultPartners: Partner[] = [
  { id: "1", name: "Solana Foundation", logo_url: "/images/partners/solana.svg", website_url: "https://solana.org", tier: "platinum", sort_order: 1, visible: true, created_at: "" },
  { id: "2", name: "Superteam", logo_url: "/images/partners/superteam.svg", website_url: "https://superteam.fun", tier: "platinum", sort_order: 2, visible: true, created_at: "" },
  { id: "3", name: "Magic Eden", logo_url: "/images/partners/magiceden.svg", website_url: "https://magiceden.io", tier: "gold", sort_order: 3, visible: true, created_at: "" },
  { id: "4", name: "Jupiter", logo_url: "/images/partners/jupiter.svg", website_url: "https://jup.ag", tier: "gold", sort_order: 4, visible: true, created_at: "" },
  { id: "5", name: "Marinade Finance", logo_url: "/images/partners/marinade.svg", website_url: "https://marinade.finance", tier: "silver", sort_order: 5, visible: true, created_at: "" },
  { id: "6", name: "Orca", logo_url: "/images/partners/orca.svg", website_url: "https://orca.so", tier: "silver", sort_order: 6, visible: true, created_at: "" },
];

export function Partners({ partners = defaultPartners }: PartnersProps) {
  // Double for seamless scroll
  const items = [...partners, ...partners];

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              Working with the best in the Solana ecosystem.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee">
          {items.map((partner, i) => (
            <a
              key={`${partner.id}-${i}`}
              href={partner.website_url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-40 glass rounded-xl px-6 hover:glass-hover transition-all duration-300 group"
            >
              <span className="text-sm font-medium text-white/40 group-hover:text-white/70 transition-colors whitespace-nowrap">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
