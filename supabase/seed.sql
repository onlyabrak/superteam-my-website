-- Seed: Stats
insert into public.stats (label, value, suffix, icon, sort_order) values
  ('Community Members', 500, '+', 'users', 1),
  ('Events Hosted', 50, '+', 'calendar', 2),
  ('Grants Distributed', 100, 'K USD', 'dollar', 3),
  ('Projects Built', 30, '+', 'code', 4);

-- Seed: Members
insert into public.members (name, bio, role, title, skills, badges, featured) values
  ('Ahmad Razif', 'Full-stack developer passionate about DeFi on Solana.', 'developer', 'Lead Developer', '{"Rust","TypeScript","React"}', '{"Core Contributor"}', true),
  ('Siti Nurhaliza', 'Community builder connecting Web3 talent across SEA.', 'community', 'Community Lead', '{"Community","Marketing","Events"}', '{"Community Lead"}', true),
  ('Wei Jian', 'Smart contract auditor and security researcher.', 'developer', 'Security Researcher', '{"Rust","Security","Anchor"}', '{"Security Expert"}', true),
  ('Priya Menon', 'Designer crafting beautiful dApp experiences.', 'designer', 'UI/UX Designer', '{"Design","Figma","Frontend"}', '{"Design Lead"}', true),
  ('Zul Fahmi', 'Educator and workshop facilitator for Solana dev.', 'educator', 'Developer Educator', '{"Education","Rust","Anchor"}', '{"Educator"}', false),
  ('Lee Mei Ling', 'Grant writer and project manager for ecosystem growth.', 'operations', 'Grants Manager', '{"Operations","Writing","Strategy"}', '{"Grants"}', false);

-- Seed: Events
insert into public.events (title, description, date, location, type, tags) values
  ('Solana Hacker House KL', 'A week-long hacker house for Solana builders in Kuala Lumpur.', now() + interval '14 days', 'Kuala Lumpur', 'hackathon', '{"Solana","Hackathon","KL"}'),
  ('DeFi Deep Dive Workshop', 'Hands-on workshop exploring DeFi protocols on Solana.', now() + interval '7 days', 'Penang', 'workshop', '{"DeFi","Workshop","Education"}'),
  ('Superteam MY Monthly Meetup', 'Monthly community meetup for builders and enthusiasts.', now() + interval '3 days', 'Kuala Lumpur', 'meetup', '{"Community","Meetup","Networking"}'),
  ('Anchor Framework Bootcamp', 'Intensive 2-day bootcamp on building with Anchor.', now() + interval '21 days', 'Johor Bahru', 'workshop', '{"Anchor","Rust","Development"}');

-- Seed: Partners
insert into public.partners (name, logo_url, website_url, tier, sort_order) values
  ('Solana Foundation', '/images/partners/solana.svg', 'https://solana.org', 'platinum', 1),
  ('Superteam', '/images/partners/superteam.svg', 'https://superteam.fun', 'platinum', 2),
  ('Magic Eden', '/images/partners/magiceden.svg', 'https://magiceden.io', 'gold', 3),
  ('Jupiter', '/images/partners/jupiter.svg', 'https://jup.ag', 'gold', 4),
  ('Marinade Finance', '/images/partners/marinade.svg', 'https://marinade.finance', 'silver', 5),
  ('Orca', '/images/partners/orca.svg', 'https://orca.so', 'silver', 6);

-- Seed: Testimonials
insert into public.testimonials (author_name, author_title, content, featured) values
  ('Ahmad Razif', 'Lead Developer', 'Superteam Malaysia gave me the community and resources to ship my first Solana dApp. The mentorship here is unmatched.', true),
  ('Siti Nurhaliza', 'Community Lead', 'Being part of Superteam has been incredible. The events bring together the best minds in Web3 across Malaysia.', true),
  ('Wei Jian', 'Security Researcher', 'The technical depth of discussions and workshops at Superteam MY events is what keeps me coming back.', true);

-- Seed: FAQ Items
insert into public.faq_items (question, answer, sort_order) values
  ('What is Superteam Malaysia?', 'Superteam Malaysia is the Malaysian chapter of Superteam — a global network of the most talented people in crypto working to accelerate the Solana ecosystem.', 1),
  ('How do I join?', 'Join our Discord server and introduce yourself! We welcome developers, designers, community builders, and anyone passionate about Solana and Web3.', 2),
  ('Do I need to know Solana to participate?', 'Not at all! We have educational programs for all levels. Whether you''re a complete beginner or an experienced developer, there''s a place for you.', 3),
  ('Are events free?', 'Most of our community events are free. Some specialized workshops or hackathons may have a small fee to cover venue costs.', 4),
  ('How can I get a grant?', 'Check out our grants section or reach out on Discord. We can help you navigate the Solana ecosystem grant opportunities and connect you with the right programs.', 5);

-- Seed: Site Content
insert into public.site_content (section_key, content) values
  ('hero', '{"headline": "Building the Future of Solana in Malaysia", "subheadline": "Join Malaysia''s premier Solana community — connecting builders, creators, and innovators across the ecosystem.", "cta_primary": "Join the Community", "cta_secondary": "Explore Events"}'),
  ('join_cta', '{"headline": "Ready to Build?", "description": "Join Superteam Malaysia and be part of the fastest-growing Solana community in Southeast Asia.", "cta_text": "Join Discord", "cta_url": "https://discord.gg/superteammy"}');
