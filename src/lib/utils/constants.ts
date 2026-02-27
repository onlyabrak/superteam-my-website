export const SITE_NAME = "Superteam Malaysia";
export const SITE_DESCRIPTION =
  "Malaysia's premier Solana community — connecting builders, creators, and innovators across the ecosystem.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://superteam.my";

export const PILLARS = [
  {
    title: "Builder Support",
    description: "Get guidance and mentorship from experienced builders in the Solana ecosystem.",
    icon: "mentorship",
  },
  {
    title: "Events & Hackathons",
    description: "Join hackathons, meetups, and workshops across Malaysia.",
    icon: "events",
  },
  {
    title: "Grants & Funding",
    description: "Access funding opportunities for your Solana projects.",
    icon: "grants",
  },
  {
    title: "Jobs & Bounties",
    description: "Find career opportunities and bounties in Web3 and the Solana ecosystem.",
    icon: "jobs",
  },
  {
    title: "Education & Workshops",
    description: "Learn Solana development from beginner to advanced.",
    icon: "education",
  },
  {
    title: "Ecosystem Connections",
    description: "Connect with partners, protocols, and communities across the Solana ecosystem.",
    icon: "ecosystem",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Members", href: "/members" },
  { label: "Events", href: "/#events" },
  { label: "About", href: "/#pillars" },
] as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/SuperteamMY",
  discord: "https://discord.gg/superteammy",
  telegram: "https://t.me/SuperteamMY",
  github: "https://github.com/superteam-my",
} as const;

export const REVALIDATE_INTERVAL = 3600; // 1 hour ISR
