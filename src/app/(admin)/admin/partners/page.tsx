"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/features/admin/data-table";
import { createClient } from "@/lib/supabase/client";
import type { Partner } from "@/types/database";

const seedPartners: Partner[] = [
  { id: "1", name: "Solana Foundation", logo_url: "/images/partners/solana.svg", website_url: "https://solana.org", tier: "platinum", sort_order: 1, visible: true, created_at: "" },
  { id: "2", name: "Superteam", logo_url: "/images/partners/superteam.svg", website_url: "https://superteam.fun", tier: "platinum", sort_order: 2, visible: true, created_at: "" },
  { id: "3", name: "Magic Eden", logo_url: "/images/partners/magiceden.svg", website_url: "https://magiceden.io", tier: "gold", sort_order: 3, visible: true, created_at: "" },
  { id: "4", name: "Jupiter", logo_url: "/images/partners/jupiter.svg", website_url: "https://jup.ag", tier: "gold", sort_order: 4, visible: true, created_at: "" },
];

const tierVariants: Record<string, "yellow" | "purple" | "default"> = {
  platinum: "purple",
  gold: "yellow",
  silver: "default",
  community: "default",
};

const columns = [
  {
    key: "name",
    header: "Partner",
    render: (p: Partner) => <span className="font-medium text-white">{p.name}</span>,
  },
  {
    key: "tier",
    header: "Tier",
    render: (p: Partner) => (
      <Badge variant={tierVariants[p.tier] ?? "default"}>
        {p.tier}
      </Badge>
    ),
  },
  {
    key: "sort_order",
    header: "Order",
    render: (p: Partner) => <span className="text-white/40">{p.sort_order}</span>,
  },
  {
    key: "visible",
    header: "Visible",
    render: (p: Partner) => (
      <span className={p.visible ? "text-sol-green" : "text-white/20"}>
        {p.visible ? "Yes" : "No"}
      </span>
    ),
  },
];

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<Partner[]>(seedPartners);
  const [loading, setLoading] = useState(true);

  const fetchPartners = useCallback(async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      if (data && data.length > 0) {
        setPartners(data);
      }
    } catch {
      // Supabase unavailable — keep seed data
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPartners();
  }, [fetchPartners]);

  const handleDelete = async (partner: Partner) => {
    if (!window.confirm(`Delete partner "${partner.name}"? This cannot be undone.`)) return;

    try {
      const supabase = createClient();
      const { error } = await supabase.from("partners").delete().eq("id", partner.id);

      if (error) throw error;
      setPartners((prev) => prev.filter((p) => p.id !== partner.id));
    } catch {
      alert("Failed to delete partner. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Partners</h1>
          <p className="text-sm text-white/40 mt-1">Manage ecosystem partners</p>
        </div>
        <Button variant="gradient">Add Partner</Button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-white/40 text-sm">Loading partners...</p>
        </div>
      ) : (
        <DataTable
          data={partners}
          columns={columns}
          onEdit={(p) => console.log("Edit", p.id)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
