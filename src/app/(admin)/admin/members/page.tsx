"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { DataTable } from "@/components/features/admin/data-table";
import { createClient } from "@/lib/supabase/client";
import type { Member } from "@/types/database";

const seedMembers: Member[] = [
  { id: "1", name: "Ahmad Razif", avatar_url: null, bio: "Full-stack developer.", role: "developer", title: "Lead Developer", company: "Solana Labs", twitter_handle: "@ahmadrazif", achievements: ["Hackathon Winner 2024"], skills: ["Rust", "TypeScript"], badges: ["Core Contributor"], social_links: null, featured: true, visible: true, created_at: "", updated_at: "" },
  { id: "2", name: "Siti Nurhaliza", avatar_url: null, bio: "Community builder.", role: "community", title: "Community Lead", company: "Superteam MY", twitter_handle: "@sitinurhaliza", achievements: ["Community Builder Award"], skills: ["Community", "Marketing"], badges: ["Community Lead"], social_links: null, featured: true, visible: true, created_at: "", updated_at: "" },
  { id: "3", name: "Wei Jian", avatar_url: null, bio: "Security researcher.", role: "developer", title: "Security Researcher", company: null, twitter_handle: "@weijian_sec", achievements: ["Bug Bounty Top 10", "Security Audit Lead"], skills: ["Rust", "Security"], badges: ["Security Expert"], social_links: null, featured: true, visible: true, created_at: "", updated_at: "" },
  { id: "4", name: "Priya Menon", avatar_url: null, bio: "Designer.", role: "designer", title: "UI/UX Designer", company: "Magic Eden", twitter_handle: null, achievements: ["Design Sprint Winner"], skills: ["Design", "Figma"], badges: ["Design Lead"], social_links: null, featured: true, visible: true, created_at: "", updated_at: "" },
  { id: "5", name: "Zul Fahmi", avatar_url: null, bio: "Educator.", role: "educator", title: "Developer Educator", company: null, twitter_handle: "@zulfahmi_dev", achievements: [], skills: ["Education", "Rust"], badges: ["Educator"], social_links: null, featured: false, visible: true, created_at: "", updated_at: "" },
  { id: "6", name: "Lee Mei Ling", avatar_url: null, bio: "Grant writer.", role: "operations", title: "Grants Manager", company: "Superteam MY", twitter_handle: null, achievements: ["100K Grants Distributed"], skills: ["Operations", "Writing"], badges: ["Grants"], social_links: null, featured: false, visible: true, created_at: "", updated_at: "" },
];

const columns = [
  {
    key: "name",
    header: "Member",
    render: (m: Member) => (
      <div className="flex items-center gap-3">
        <Avatar src={m.avatar_url} alt={m.name} size="sm" />
        <div>
          <p className="font-medium text-white">{m.name}</p>
          <p className="text-xs text-white/40">{m.title}</p>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    header: "Role",
    render: (m: Member) => <Badge variant="purple">{m.role}</Badge>,
  },
  {
    key: "skills",
    header: "Skills",
    render: (m: Member) => (
      <div className="flex flex-wrap gap-1">
        {m.skills.slice(0, 3).map((s) => (
          <Badge key={s} variant="default">{s}</Badge>
        ))}
      </div>
    ),
  },
  {
    key: "featured",
    header: "Featured",
    render: (m: Member) => (
      <span className={m.featured ? "text-sol-green" : "text-white/20"}>
        {m.featured ? "Yes" : "No"}
      </span>
    ),
  },
  {
    key: "visible",
    header: "Visible",
    render: (m: Member) => (
      <span className={m.visible ? "text-sol-green" : "text-white/20"}>
        {m.visible ? "Yes" : "No"}
      </span>
    ),
  },
];

export default function AdminMembersPage() {
  const [members, setMembers] = useState<Member[]>(seedMembers);
  const [loading, setLoading] = useState(true);

  const fetchMembers = useCallback(async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data && data.length > 0) {
        setMembers(data);
      }
    } catch {
      // Supabase unavailable — keep seed data
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const handleDelete = async (member: Member) => {
    if (!window.confirm(`Delete member "${member.name}"? This cannot be undone.`)) return;

    try {
      const supabase = createClient();
      const { error } = await supabase.from("members").delete().eq("id", member.id);

      if (error) throw error;
      setMembers((prev) => prev.filter((m) => m.id !== member.id));
    } catch {
      alert("Failed to delete member. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Members</h1>
          <p className="text-sm text-white/40 mt-1">Manage community members</p>
        </div>
        <Button variant="gradient">Add Member</Button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-white/40 text-sm">Loading members...</p>
        </div>
      ) : (
        <DataTable
          data={members}
          columns={columns}
          onEdit={(m) => console.log("Edit", m.id)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
