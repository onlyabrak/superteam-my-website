"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/features/admin/data-table";
import { createClient } from "@/lib/supabase/client";
import { formatDate } from "@/lib/utils/format";
import type { Event } from "@/types/database";

const seedEvents: Event[] = [
  { id: "1", title: "Solana Hacker House KL", description: "A week-long hacker house.", date: new Date(Date.now() + 14 * 86400000).toISOString(), end_date: null, location: "Kuala Lumpur", type: "hackathon", cover_image_url: null, tags: ["Solana", "Hackathon"], luma_id: null, luma_url: null, visible: true, created_at: "", updated_at: "" },
  { id: "2", title: "DeFi Deep Dive Workshop", description: "Hands-on DeFi workshop.", date: new Date(Date.now() + 7 * 86400000).toISOString(), end_date: null, location: "Penang", type: "workshop", cover_image_url: null, tags: ["DeFi", "Workshop"], luma_id: null, luma_url: null, visible: true, created_at: "", updated_at: "" },
  { id: "3", title: "Monthly Meetup", description: "Community meetup.", date: new Date(Date.now() + 3 * 86400000).toISOString(), end_date: null, location: "Kuala Lumpur", type: "meetup", cover_image_url: null, tags: ["Community"], luma_id: null, luma_url: null, visible: true, created_at: "", updated_at: "" },
];

const columns = [
  {
    key: "title",
    header: "Event",
    render: (e: Event) => (
      <div>
        <p className="font-medium text-white">{e.title}</p>
        <p className="text-xs text-white/40">{e.location}</p>
      </div>
    ),
  },
  {
    key: "date",
    header: "Date",
    render: (e: Event) => <span className="text-white/60">{formatDate(e.date)}</span>,
  },
  {
    key: "type",
    header: "Type",
    render: (e: Event) => <Badge variant="purple">{e.type}</Badge>,
  },
  {
    key: "tags",
    header: "Tags",
    render: (e: Event) => (
      <div className="flex flex-wrap gap-1">
        {e.tags.slice(0, 2).map((t) => (
          <Badge key={t} variant="default">{t}</Badge>
        ))}
      </div>
    ),
  },
  {
    key: "visible",
    header: "Visible",
    render: (e: Event) => (
      <span className={e.visible ? "text-sol-green" : "text-white/20"}>
        {e.visible ? "Yes" : "No"}
      </span>
    ),
  },
];

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>(seedEvents);
  const [loading, setLoading] = useState(true);

  const fetchEvents = useCallback(async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;
      if (data && data.length > 0) {
        setEvents(data);
      }
    } catch {
      // Supabase unavailable — keep seed data
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleDelete = async (event: Event) => {
    if (!window.confirm(`Delete event "${event.title}"? This cannot be undone.`)) return;

    try {
      const supabase = createClient();
      const { error } = await supabase.from("events").delete().eq("id", event.id);

      if (error) throw error;
      setEvents((prev) => prev.filter((e) => e.id !== event.id));
    } catch {
      alert("Failed to delete event. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Events</h1>
          <p className="text-sm text-white/40 mt-1">Manage events and meetups</p>
        </div>
        <Button variant="gradient">Add Event</Button>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-white/40 text-sm">Loading events...</p>
        </div>
      ) : (
        <DataTable
          data={events}
          columns={columns}
          onEdit={(e) => console.log("Edit", e.id)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
