"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import type { Testimonial } from "@/types/database";

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: (Testimonial & { twitter_handle?: string })[] = [
  {
    id: "1", author_name: "Ahmad Razif", author_title: "Lead Developer", author_avatar_url: null,
    content: "Superteam Malaysia gave me the community and resources to ship my first Solana dApp. The mentorship here is unmatched.",
    featured: true, visible: true, created_at: "", twitter_handle: "ahmadrazif_sol",
  },
  {
    id: "2", author_name: "Siti Nurhaliza", author_title: "Community Lead", author_avatar_url: null,
    content: "Being part of Superteam has been incredible. The events bring together the best minds in Web3 across Malaysia.",
    featured: true, visible: true, created_at: "", twitter_handle: "siti_web3",
  },
  {
    id: "3", author_name: "Wei Jian", author_title: "Security Researcher", author_avatar_url: null,
    content: "The technical depth of discussions and workshops at Superteam MY events is what keeps me coming back.",
    featured: true, visible: true, created_at: "", twitter_handle: "weijian_sec",
  },
  {
    id: "4", author_name: "Priya Menon", author_title: "UI/UX Designer", author_avatar_url: null,
    content: "Found my dream role through a Superteam bounty. The ecosystem connections here are real and valuable.",
    featured: true, visible: true, created_at: "", twitter_handle: "priya_designs",
  },
  {
    id: "5", author_name: "Zul Fahmi", author_title: "Developer Educator", author_avatar_url: null,
    content: "Teaching Solana dev workshops through Superteam MY has been the most rewarding experience. Amazing community support.",
    featured: true, visible: true, created_at: "", twitter_handle: "zulfahmi_edu",
  },
  {
    id: "6", author_name: "Lee Mei Ling", author_title: "Grants Manager", author_avatar_url: null,
    content: "Superteam MY helped me navigate the Solana grants ecosystem. From application to funding, the support was incredible.",
    featured: true, visible: true, created_at: "", twitter_handle: "meiling_ops",
  },
];

function TweetCard({ testimonial }: { testimonial: (typeof defaultTestimonials)[number] }) {
  return (
    <Card variant="glass" padding="md" className="h-full">
      <div className="flex items-start gap-3 mb-3">
        <Avatar
          src={testimonial.author_avatar_url}
          alt={testimonial.author_name}
          size="sm"
        />
        <div className="flex-1 min-w-0">
          <p className="font-medium text-white text-sm truncate">
            {testimonial.author_name}
          </p>
          <p className="text-xs text-white/40 truncate">
            @{testimonial.twitter_handle} · {testimonial.author_title}
          </p>
        </div>
        <svg className="h-4 w-4 text-white/30 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      <p className="text-sm text-white/60 leading-relaxed">
        {testimonial.content}
      </p>
    </Card>
  );
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const items = defaultTestimonials;

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sol-green/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Wall of Love
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              What our community members are saying about Superteam Malaysia.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry-style grid of tweet cards */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.08} direction="up">
              <div className="break-inside-avoid">
                <TweetCard testimonial={item} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Link to Twitter */}
        <div className="text-center mt-10">
          <a
            href="https://twitter.com/SuperteamMY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow @SuperteamMY for more
          </a>
        </div>
      </div>
    </section>
  );
}
