import type { Metadata } from "next";
import { MembersGrid } from "@/components/features/members/members-grid";
import { PageTransition } from "@/components/motion/page-transition";
import { BatikBackground } from "@/components/backgrounds/batik-background";
import type { Member } from "@/types/database";

export const metadata: Metadata = {
  title: "Members",
  description: "Meet the talented builders, creators, and innovators of Superteam Malaysia.",
};

// Seed data used until Supabase is connected
const seedMembers: Member[] = [
  {
    id: "1", name: "Ahmad Razif", avatar_url: null,
    bio: "Full-stack developer passionate about DeFi on Solana.",
    role: "developer", title: "Lead Developer", company: "SolanaLabs MY",
    skills: ["Rust", "TypeScript", "React"], badges: ["Core Contributor"],
    social_links: null, twitter_handle: "ahmadrazif_sol", achievements: ["Breakpoint 2024 Hackathon Winner", "3 Grants Received"],
    featured: true, visible: true, created_at: "2024-01-15T00:00:00Z", updated_at: "2024-01-15T00:00:00Z",
  },
  {
    id: "2", name: "Siti Nurhaliza", avatar_url: null,
    bio: "Community builder connecting Web3 talent across SEA.",
    role: "community", title: "Community Lead", company: "Superteam MY",
    skills: ["Community", "Marketing", "Events"], badges: ["Community Lead"],
    social_links: null, twitter_handle: "siti_web3", achievements: ["DAO Contributor", "50+ Events Organized"],
    featured: true, visible: true, created_at: "2024-02-10T00:00:00Z", updated_at: "2024-02-10T00:00:00Z",
  },
  {
    id: "3", name: "Wei Jian", avatar_url: null,
    bio: "Smart contract auditor and security researcher.",
    role: "developer", title: "Security Researcher", company: "OtterSec",
    skills: ["Rust", "Security", "Anchor"], badges: ["Security Expert"],
    social_links: null, twitter_handle: "weijian_sec", achievements: ["Audited 10+ Protocols", "Grizzlython Finalist"],
    featured: true, visible: true, created_at: "2024-03-05T00:00:00Z", updated_at: "2024-03-05T00:00:00Z",
  },
  {
    id: "4", name: "Priya Menon", avatar_url: null,
    bio: "Designer crafting beautiful dApp experiences.",
    role: "designer", title: "UI/UX Designer", company: "Jupiter Exchange",
    skills: ["Design", "Figma", "Frontend"], badges: ["Design Lead"],
    social_links: null, twitter_handle: "priya_designs", achievements: ["Superteam Design Bounty Winner"],
    featured: true, visible: true, created_at: "2024-04-20T00:00:00Z", updated_at: "2024-04-20T00:00:00Z",
  },
  {
    id: "5", name: "Zul Fahmi", avatar_url: null,
    bio: "Educator and workshop facilitator for Solana dev.",
    role: "educator", title: "Developer Educator", company: "Solana U MY",
    skills: ["Education", "Rust", "Anchor"], badges: ["Educator"],
    social_links: null, twitter_handle: "zulfahmi_edu", achievements: ["20+ Workshops Conducted"],
    featured: false, visible: true, created_at: "2024-05-15T00:00:00Z", updated_at: "2024-05-15T00:00:00Z",
  },
  {
    id: "6", name: "Lee Mei Ling", avatar_url: null,
    bio: "Grant writer and project manager for ecosystem growth.",
    role: "operations", title: "Grants Manager", company: "Superteam MY",
    skills: ["Operations", "Writing", "Strategy"], badges: ["Grants"],
    social_links: null, twitter_handle: "meiling_ops", achievements: ["$500K+ Grants Facilitated"],
    featured: false, visible: true, created_at: "2024-06-01T00:00:00Z", updated_at: "2024-06-01T00:00:00Z",
  },
];

export default function MembersPage() {
  // TODO: Replace with Supabase fetch when connected
  const members = seedMembers;

  return (
    <PageTransition>
      <div className="relative pt-24 pb-16">
        <BatikBackground />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Community Members
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              Meet the talented builders, creators, and innovators driving the Solana ecosystem in Malaysia.
            </p>
          </div>

          <MembersGrid members={members} />
        </div>
      </div>
    </PageTransition>
  );
}
