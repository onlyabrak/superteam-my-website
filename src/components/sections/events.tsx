"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/utils/format";
import type { Event } from "@/types/database";

interface EventsProps {
  events?: Event[];
}

const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Solana Hacker House KL",
    description: "A week-long hacker house for Solana builders in Kuala Lumpur.",
    date: new Date(Date.now() + 14 * 86400000).toISOString(),
    end_date: null,
    location: "Kuala Lumpur",
    type: "hackathon",
    cover_image_url: null,
    tags: ["Solana", "Hackathon"],
    luma_id: null,
    luma_url: null,
    visible: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "2",
    title: "DeFi Deep Dive Workshop",
    description: "Hands-on workshop exploring DeFi protocols on Solana.",
    date: new Date(Date.now() + 7 * 86400000).toISOString(),
    end_date: null,
    location: "Penang",
    type: "workshop",
    cover_image_url: null,
    tags: ["DeFi", "Workshop"],
    luma_id: null,
    luma_url: null,
    visible: true,
    created_at: "",
    updated_at: "",
  },
  {
    id: "3",
    title: "Superteam MY Monthly Meetup",
    description: "Monthly community meetup for builders and enthusiasts.",
    date: new Date(Date.now() + 3 * 86400000).toISOString(),
    end_date: null,
    location: "Kuala Lumpur",
    type: "meetup",
    cover_image_url: null,
    tags: ["Community", "Meetup"],
    luma_id: null,
    luma_url: null,
    visible: true,
    created_at: "",
    updated_at: "",
  },
];

const typeColors: Record<string, "purple" | "green" | "yellow" | "blue"> = {
  hackathon: "purple",
  workshop: "green",
  meetup: "blue",
  conference: "yellow",
};

export function Events({ events = defaultEvents }: EventsProps) {
  return (
    <section id="events" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Join hackathons, workshops, and meetups across Malaysia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 0.1} direction="up">
              <Card variant="glass" hover padding="none" className="h-full flex flex-col overflow-hidden group">
                {/* Color bar */}
                <div className="h-1 gradient-sol" />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={typeColors[event.type] ?? "default"}>
                      {event.type}
                    </Badge>
                    {event.location && (
                      <span className="text-xs text-white/40">{event.location}</span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sol-purple transition-colors">
                    {event.title}
                  </h3>

                  {event.description && (
                    <p className="text-sm text-white/50 mb-4 line-clamp-2 flex-1">
                      {event.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <time className="text-xs text-white/40">
                      {formatDate(event.date)}
                    </time>
                    {event.luma_url && (
                      <Link
                        href={event.luma_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-sol-purple hover:text-sol-purple/80 transition-colors"
                      >
                        RSVP →
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
