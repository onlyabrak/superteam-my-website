"use client";

import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { createClient } from "@/lib/supabase/client";
import type { FaqItem, Stat, SiteContent } from "@/types/database";

const seedStats: Stat[] = [
  { id: "1", label: "Community Members", value: 500, suffix: "+", icon: "users", sort_order: 1, visible: true, created_at: "" },
  { id: "2", label: "Events Hosted", value: 50, suffix: "+", icon: "calendar", sort_order: 2, visible: true, created_at: "" },
  { id: "3", label: "Grants Distributed", value: 100, suffix: "K USD", icon: "dollar", sort_order: 3, visible: true, created_at: "" },
  { id: "4", label: "Projects Built", value: 30, suffix: "+", icon: "code", sort_order: 4, visible: true, created_at: "" },
];

const seedFaq: FaqItem[] = [
  { id: "1", question: "What is Superteam Malaysia?", answer: "Superteam Malaysia is the Malaysian chapter of Superteam — a global network.", sort_order: 1, visible: true, created_at: "" },
  { id: "2", question: "How do I join?", answer: "Join our Discord server and introduce yourself!", sort_order: 2, visible: true, created_at: "" },
  { id: "3", question: "Do I need to know Solana?", answer: "Not at all! We have programs for all levels.", sort_order: 3, visible: true, created_at: "" },
  { id: "4", question: "Are events free?", answer: "Most of our community events are free.", sort_order: 4, visible: true, created_at: "" },
  { id: "5", question: "How can I get a grant?", answer: "Check our grants section or reach out on Discord.", sort_order: 5, visible: true, created_at: "" },
];

export default function AdminContentPage() {
  const [heroHeadline, setHeroHeadline] = useState("Building the Future of Solana in Malaysia");
  const [heroSubheadline, setHeroSubheadline] = useState(
    "Join Malaysia's premier Solana community — connecting builders, creators, and innovators across the ecosystem.",
  );
  const [stats, setStats] = useState<Stat[]>(seedStats);
  const [faq, setFaq] = useState<FaqItem[]>(seedFaq);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  const fetchContent = useCallback(async () => {
    try {
      const supabase = createClient();

      // Fetch hero content from site_content table
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- site_content generated types resolve to never
      const heroResult = await (supabase.from("site_content") as any)
        .select("*")
        .eq("section_key", "hero")
        .limit(1);
      const heroRows = heroResult.data as SiteContent[] | null;

      if (!heroResult.error && heroRows && heroRows.length > 0) {
        const content = heroRows[0].content as { headline?: string; subheadline?: string };
        if (content.headline) setHeroHeadline(content.headline);
        if (content.subheadline) setHeroSubheadline(content.subheadline);
      }

      // Fetch stats
      const { data: statsData, error: statsError } = await supabase
        .from("stats")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!statsError && statsData && statsData.length > 0) {
        setStats(statsData);
      }

      // Fetch FAQ items
      const { data: faqData, error: faqError } = await supabase
        .from("faq_items")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!faqError && faqData && faqData.length > 0) {
        setFaq(faqData);
      }
    } catch {
      // Supabase unavailable — keep seed data
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const handleSaveHero = async () => {
    setSaving(true);
    setSaveMessage(null);

    try {
      const supabase = createClient();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- site_content generated types resolve to never
      const { error } = await (supabase.from("site_content") as any).upsert(
        {
          section_key: "hero",
          content: {
            headline: heroHeadline,
            subheadline: heroSubheadline,
          },
        },
        { onConflict: "section_key" },
      );

      if (error) throw error;
      setSaveMessage("Hero content saved successfully.");
    } catch {
      setSaveMessage("Failed to save hero content. Please try again.");
    } finally {
      setSaving(false);
      setTimeout(() => setSaveMessage(null), 3000);
    }
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-white mb-8">Content Editor</h1>

      {/* Hero Content */}
      <Card variant="glass" padding="lg" className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Hero Section</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="headline" className="block text-sm text-white/60 mb-1.5">
              Headline
            </label>
            <Input
              id="headline"
              value={heroHeadline}
              onChange={(e) => setHeroHeadline(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="subheadline" className="block text-sm text-white/60 mb-1.5">
              Subheadline
            </label>
            <Input
              id="subheadline"
              value={heroSubheadline}
              onChange={(e) => setHeroSubheadline(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="gradient"
              size="sm"
              onClick={handleSaveHero}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Hero Content"}
            </Button>
            {saveMessage && (
              <span className={`text-sm ${saveMessage.includes("Failed") ? "text-red-400" : "text-sol-green"}`}>
                {saveMessage}
              </span>
            )}
          </div>
        </div>
      </Card>

      {/* Stats */}
      <Card variant="glass" padding="lg" className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Stats</h2>
          <Button variant="outline" size="sm">Add Stat</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/5">
              <div>
                <p className="text-sm font-medium text-white">{stat.label}</p>
                <p className="text-xs text-white/40">
                  {stat.value}{stat.suffix}
                </p>
              </div>
              <button
                type="button"
                className="p-1.5 text-white/30 hover:text-white rounded transition-colors cursor-pointer"
                aria-label="Edit stat"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </Card>

      {/* FAQ */}
      <Card variant="glass" padding="lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">FAQ Items</h2>
          <Button variant="outline" size="sm">Add FAQ</Button>
        </div>
        <Accordion items={faq} />
      </Card>
    </div>
  );
}
