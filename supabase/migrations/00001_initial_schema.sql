-- Members: community directory
create table public.members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  avatar_url text,
  bio text,
  role text not null default 'member',
  title text,
  skills text[] not null default '{}',
  badges text[] not null default '{}',
  social_links jsonb,
  featured boolean not null default false,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Events: local events + Luma supplement
create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  date timestamptz not null,
  end_date timestamptz,
  location text,
  type text not null default 'meetup',
  cover_image_url text,
  tags text[] not null default '{}',
  luma_id text unique,
  luma_url text,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Partners: ecosystem partners
create table public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text not null,
  website_url text,
  tier text not null default 'community',
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now()
);

-- Testimonials: social proof
create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_title text,
  author_avatar_url text,
  content text not null,
  featured boolean not null default false,
  visible boolean not null default true,
  created_at timestamptz not null default now()
);

-- FAQ items
create table public.faq_items (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now()
);

-- Stats: animated counters
create table public.stats (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value integer not null,
  suffix text,
  icon text,
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now()
);

-- Site content: editable text blocks
create table public.site_content (
  id uuid primary key default gen_random_uuid(),
  section_key text not null unique,
  content jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

-- Admin profiles: role-based access
create table public.admin_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('admin', 'editor')),
  display_name text,
  created_at timestamptz not null default now(),
  unique(user_id)
);

-- Indexes
create index idx_members_visible on public.members(visible) where visible = true;
create index idx_members_featured on public.members(featured) where featured = true;
create index idx_events_date on public.events(date desc);
create index idx_events_visible on public.events(visible) where visible = true;
create index idx_partners_sort on public.partners(sort_order);
create index idx_faq_sort on public.faq_items(sort_order);
create index idx_stats_sort on public.stats(sort_order);
create index idx_site_content_key on public.site_content(section_key);

-- Updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger members_updated_at before update on public.members
  for each row execute function public.handle_updated_at();

create trigger events_updated_at before update on public.events
  for each row execute function public.handle_updated_at();

create trigger site_content_updated_at before update on public.site_content
  for each row execute function public.handle_updated_at();

-- RLS Policies
alter table public.members enable row level security;
alter table public.events enable row level security;
alter table public.partners enable row level security;
alter table public.testimonials enable row level security;
alter table public.faq_items enable row level security;
alter table public.stats enable row level security;
alter table public.site_content enable row level security;
alter table public.admin_profiles enable row level security;

-- Public read for visible content
create policy "Public can read visible members" on public.members
  for select using (visible = true);

create policy "Public can read visible events" on public.events
  for select using (visible = true);

create policy "Public can read visible partners" on public.partners
  for select using (visible = true);

create policy "Public can read visible testimonials" on public.testimonials
  for select using (visible = true);

create policy "Public can read visible faq_items" on public.faq_items
  for select using (visible = true);

create policy "Public can read visible stats" on public.stats
  for select using (visible = true);

create policy "Public can read site_content" on public.site_content
  for select using (true);

-- Admin full access via service role (bypasses RLS)
-- Editors/admins write via admin_profiles check
create policy "Admins can manage members" on public.members
  for all using (
    exists (
      select 1 from public.admin_profiles
      where user_id = auth.uid() and role in ('admin', 'editor')
    )
  );

create policy "Admins can manage events" on public.events
  for all using (
    exists (
      select 1 from public.admin_profiles
      where user_id = auth.uid() and role in ('admin', 'editor')
    )
  );

create policy "Admins can manage partners" on public.partners
  for all using (
    exists (
      select 1 from public.admin_profiles
      where user_id = auth.uid() and role in ('admin', 'editor')
    )
  );

create policy "Admins can manage testimonials" on public.testimonials
  for all using (
    exists (
      select 1 from public.admin_profiles
      where user_id = auth.uid() and role in ('admin', 'editor')
    )
  );

create policy "Admins can manage faq_items" on public.faq_items
  for all using (
    exists (
      select 1 from public.admin_profiles
      where user_id = auth.uid() and role in ('admin', 'editor')
    )
  );

create policy "Admins can manage stats" on public.stats
  for all using (
    exists (
      select 1 from public.admin_profiles
      where user_id = auth.uid() and role in ('admin', 'editor')
    )
  );

create policy "Admins can manage site_content" on public.site_content
  for all using (
    exists (
      select 1 from public.admin_profiles
      where user_id = auth.uid() and role in ('admin', 'editor')
    )
  );

create policy "Admins can read own profile" on public.admin_profiles
  for select using (user_id = auth.uid());

create policy "Super admins can manage admin_profiles" on public.admin_profiles
  for all using (
    exists (
      select 1 from public.admin_profiles
      where user_id = auth.uid() and role = 'admin'
    )
  );
