"use client";

import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import type { Member } from "@/types/database";

interface MemberShowcaseProps {
  members?: Member[];
}

const defaultMembers: Member[] = [
  {
    id: "1", name: "Ahmad Razif", avatar_url: null, bio: "Full-stack developer passionate about DeFi on Solana.",
    role: "developer", title: "Lead Developer", company: "Solana Labs", twitter_handle: "@ahmadrazif", achievements: ["Hackathon Winner 2024"],
    skills: ["Rust", "TypeScript", "React"],
    badges: ["Core Contributor"], social_links: null, featured: true, visible: true, created_at: "", updated_at: "",
  },
  {
    id: "2", name: "Siti Nurhaliza", avatar_url: null, bio: "Community builder connecting Web3 talent across SEA.",
    role: "community", title: "Community Lead", company: "Superteam MY", twitter_handle: "@sitinurhaliza", achievements: ["Community Builder Award"],
    skills: ["Community", "Marketing", "Events"],
    badges: ["Community Lead"], social_links: null, featured: true, visible: true, created_at: "", updated_at: "",
  },
  {
    id: "3", name: "Wei Jian", avatar_url: null, bio: "Smart contract auditor and security researcher.",
    role: "developer", title: "Security Researcher", company: null, twitter_handle: "@weijian_sec", achievements: ["Bug Bounty Top 10", "Security Audit Lead"],
    skills: ["Rust", "Security", "Anchor"],
    badges: ["Security Expert"], social_links: null, featured: true, visible: true, created_at: "", updated_at: "",
  },
  {
    id: "4", name: "Priya Menon", avatar_url: null, bio: "Designer crafting beautiful dApp experiences.",
    role: "designer", title: "UI/UX Designer", company: "Magic Eden", twitter_handle: null, achievements: ["Design Sprint Winner"],
    skills: ["Design", "Figma", "Frontend"],
    badges: ["Design Lead"], social_links: null, featured: true, visible: true, created_at: "", updated_at: "",
  },
];

const skillVariants: Record<string, "purple" | "green" | "yellow" | "blue" | "red" | "default"> = {
  Rust: "purple",
  TypeScript: "blue",
  React: "blue",
  Security: "red",
  Anchor: "purple",
  Design: "green",
  Figma: "green",
  Frontend: "blue",
  Community: "yellow",
  Marketing: "yellow",
  Events: "green",
};

export function MemberShowcase({ members = defaultMembers }: MemberShowcaseProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Meet Our Community
              </h2>
              <p className="text-white/50 max-w-xl text-lg">
                Talented builders, creators, and innovators driving the Solana ecosystem in Malaysia.
              </p>
            </div>
            <Link
              href="/members"
              className={buttonVariants({ variant: "outline", size: "sm", className: "hidden sm:inline-flex" })}
            >
              View All Members
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {members.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 0.1} direction="up">
              <Card variant="glass" hover padding="lg" className="h-full text-center group">
                <Avatar
                  src={member.avatar_url}
                  alt={member.name}
                  size="xl"
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold text-white text-lg">{member.name}</h3>
                {member.title && (
                  <p className="text-sm text-white/40 mt-1">{member.title}</p>
                )}
                <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                  {member.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant={skillVariants[skill] ?? "default"}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/members"
            className={buttonVariants({ variant: "outline", size: "md" })}
          >
            View All Members
          </Link>
        </div>
      </div>
    </section>
  );
}
