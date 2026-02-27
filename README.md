# Superteam Malaysia

The official website for Superteam Malaysia -- Malaysia's premier Solana community connecting builders, creators, and innovators across the ecosystem. Built with Next.js 16, Tailwind CSS v4, Framer Motion, and Supabase.

---

## Screenshots

> _Screenshots coming soon. Add images of the landing page, members directory, and admin dashboard here._

---

## Tech Stack

| Layer        | Technology                              |
| ------------ | --------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org) (App Router, React 19) |
| Language     | [TypeScript 5](https://www.typescriptlang.org)          |
| Styling      | [Tailwind CSS v4](https://tailwindcss.com)              |
| Animations   | [Framer Motion 12](https://www.framer.com/motion/)      |
| Database     | [Supabase](https://supabase.com) (PostgreSQL + Auth + RLS) |
| Forms        | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Package Mgr  | [Bun](https://bun.sh)                                   |
| Deployment   | [Vercel](https://vercel.com) (recommended)               |

---

## Features

### Landing Page

- **Hero section** with gradient background and animated CTA buttons
- **6 Pillars** of community value: Builder Support, Events & Hackathons, Grants & Funding, Jobs & Bounties, Education & Workshops, Ecosystem Connections
- **Animated stats counters** (community members, events hosted, grants distributed, projects built)
- **Events section** with Luma calendar integration for live event syncing
- **Member showcase** highlighting featured community contributors
- **Partners marquee** displaying ecosystem partners by tier (platinum, gold, silver)
- **Wall of Love** testimonials from community members
- **FAQ accordion** with expandable question/answer pairs
- **Join CTA** with links to Discord and community channels

### Members Directory (`/members`)

- Searchable and filterable member grid
- Filter by role (developer, designer, community, educator, operations)
- Filter by skill tags
- Sort functionality
- Member cards with avatar, bio, role, skills, badges, and social links

### Admin CMS Dashboard (`/admin`)

- Protected by Supabase Auth with role-based access (admin, editor)
- **Members management** -- add, edit, toggle visibility, feature members
- **Events management** -- create and manage events, sync with Luma
- **Partners management** -- manage partner logos, tiers, and sort order
- **Content management** -- edit site copy (hero text, CTA text, etc.)
- Reusable data table component for all admin views

### SEO

- Dynamic `robots.txt` generation (blocks `/admin/` and `/api/`)
- Dynamic `sitemap.xml` generation
- Open Graph and Twitter Card meta tags on all pages
- JSON-LD structured data support via metadata utilities
- Canonical URLs

### Design

- Fully responsive (mobile + desktop) with mobile navigation drawer
- Dark theme with Solana-inspired color palette
- Malaysian cultural identity through batik patterns (kawung, parang rusak) and wau bulan (traditional kite) motifs
- Framer Motion animations throughout: scroll reveal, page transitions, animated counters
- Accessible with reduced-motion support via `use-reduced-motion` hook

---

## Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org)
- [Bun](https://bun.sh) (package manager and runtime)
- [Supabase CLI](https://supabase.com/docs/guides/cli) (optional, for local database)

### Clone the Repository

```bash
git clone https://github.com/superteam-my/superteam-my-website.git
cd superteam-my-website/v1
```

### Install Dependencies

```bash
bun install
```

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Luma API (optional -- for event syncing)
LUMA_API_KEY=your-luma-api-key
LUMA_CALENDAR_ID=your-luma-calendar-id
```

| Variable                        | Required | Description                                      |
| ------------------------------- | -------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`          | Yes      | Public URL of the site (used for SEO/meta tags)  |
| `NEXT_PUBLIC_SUPABASE_URL`      | Yes      | Supabase project URL                             |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes      | Supabase anonymous (public) API key              |
| `SUPABASE_SERVICE_ROLE_KEY`     | Yes      | Supabase service role key (server-side only)     |
| `LUMA_API_KEY`                  | No       | Luma API key for fetching calendar events        |
| `LUMA_CALENDAR_ID`              | No       | Luma calendar ID to pull events from             |

### Run the Development Server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
bun run build
```

### Start Production Server

```bash
bun start
```

### Lint

```bash
bun lint
```

---

## Supabase Setup

The project uses Supabase for its database, authentication, and row-level security. All schema and seed files are included in the `supabase/` directory.

### Local Development with Supabase CLI

```bash
# Start local Supabase services
supabase start

# Apply migrations and seed data
supabase db reset
```

This will create all tables and populate them with sample data.

### Database Tables

| Table             | Purpose                                                    |
| ----------------- | ---------------------------------------------------------- |
| `members`         | Community member profiles (name, bio, role, skills, badges, social links) |
| `events`          | Community events with optional Luma integration (luma_id, luma_url)      |
| `partners`        | Ecosystem partner logos and links, organized by tier                      |
| `testimonials`    | Wall of Love quotes from community members                               |
| `faq_items`       | FAQ entries with question, answer, and sort order                        |
| `stats`           | Animated counter values (e.g., "500+ Community Members")                 |
| `site_content`    | Editable text blocks keyed by section (hero, join_cta, etc.)             |
| `admin_profiles`  | Admin/editor user roles linked to Supabase Auth users                    |

### Row-Level Security (RLS)

All tables have RLS enabled:

- **Public users** can read rows where `visible = true` (or all rows for `site_content`)
- **Admins and editors** (via `admin_profiles`) have full CRUD access
- **Service role key** bypasses RLS for server-side operations

### Schema Migration

The initial schema is located at:

```
supabase/migrations/00001_initial_schema.sql
```

It includes table definitions, indexes, `updated_at` triggers, and all RLS policies.

### Seed Data

Sample data is in `supabase/seed.sql` and includes example members, events, partners, testimonials, FAQ items, stats, and site content blocks.

---

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the project into [Vercel](https://vercel.com/new)
3. Set the root directory to `v1` if the monorepo structure is used
4. Add all environment variables from the table above in the Vercel dashboard
5. Deploy

The site uses ISR (Incremental Static Regeneration) with a 1-hour revalidation interval for dynamic content. An API route at `/api/revalidate` is available for on-demand revalidation.

### Other Platforms

Any platform that supports Next.js 16 can be used. Ensure that:

- All environment variables are configured
- The Supabase project is accessible from the deployment environment
- The build command is `bun run build` (or `next build`)

---

## Project Structure

```
v1/
├── public/                         # Static assets
│   └── assets/                     # Batik patterns, wau bulan images
├── src/
│   ├── app/
│   │   ├── (admin)/admin/          # Admin dashboard routes
│   │   │   ├── content/            # Content management page
│   │   │   ├── events/             # Events management page
│   │   │   ├── login/              # Admin login page
│   │   │   ├── members/            # Members management page
│   │   │   ├── partners/           # Partners management page
│   │   │   ├── layout.tsx          # Admin layout with sidebar
│   │   │   └── page.tsx            # Admin dashboard home
│   │   ├── (public)/               # Public-facing routes
│   │   │   ├── members/            # Members directory page
│   │   │   ├── layout.tsx          # Public layout with navbar + footer
│   │   │   └── page.tsx            # Landing page (home)
│   │   ├── api/
│   │   │   ├── events/route.ts     # Events API (Luma sync)
│   │   │   └── revalidate/route.ts # On-demand ISR revalidation
│   │   ├── globals.css             # Global styles and Tailwind imports
│   │   ├── layout.tsx              # Root layout (html, body, fonts, metadata)
│   │   ├── robots.ts               # Dynamic robots.txt
│   │   └── sitemap.ts              # Dynamic sitemap.xml
│   ├── components/
│   │   ├── backgrounds/            # Batik pattern and hero gradient backgrounds
│   │   ├── features/
│   │   │   ├── admin/              # Admin data table component
│   │   │   └── members/            # Member card, grid, skeleton components
│   │   ├── layout/                 # Navbar, footer, mobile nav, admin sidebar
│   │   ├── motion/                 # Framer Motion wrappers (scroll reveal, page transitions, counters)
│   │   ├── sections/               # Landing page sections (hero, pillars, stats, events, etc.)
│   │   └── ui/                     # Shared UI primitives (button, card, badge, input, accordion, etc.)
│   ├── hooks/
│   │   └── use-reduced-motion.ts   # Accessibility hook for reduced motion preference
│   ├── lib/
│   │   ├── luma/                   # Luma API client and types
│   │   ├── supabase/               # Supabase clients (browser, server, admin, middleware)
│   │   └── utils/                  # Shared utilities (cn, constants, format, seo)
│   ├── types/
│   │   └── database.ts             # Supabase database type definitions
│   └── middleware.ts               # Next.js middleware for Supabase session management
├── supabase/
│   ├── config.toml                 # Supabase local dev configuration
│   ├── migrations/                 # SQL migration files
│   └── seed.sql                    # Sample seed data
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies and scripts
├── postcss.config.mjs              # PostCSS configuration (Tailwind CSS v4)
└── tsconfig.json                   # TypeScript configuration
```

---

## License

This project is proprietary to Superteam Malaysia. All rights reserved.
