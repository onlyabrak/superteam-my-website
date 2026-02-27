import { NextResponse } from "next/server";
import { fetchLumaEvents } from "@/lib/luma/client";

export const revalidate = 3600;

export async function GET() {
  try {
    const lumaEvents = await fetchLumaEvents();

    // If Luma has events, return them
    if (lumaEvents.length > 0) {
      const events = lumaEvents.map((e) => ({
        id: e.api_id,
        title: e.name,
        description: e.description,
        date: e.start_at,
        end_date: e.end_at,
        location: e.geo_address_info?.city ?? null,
        type: e.event_type ?? "meetup",
        cover_image_url: e.cover_url,
        tags: e.tags ?? [],
        luma_url: e.url,
      }));

      return NextResponse.json({ events, source: "luma" });
    }

    // Fallback: return empty (client will use seed/Supabase data)
    return NextResponse.json({ events: [], source: "fallback" });
  } catch {
    return NextResponse.json(
      { events: [], source: "error" },
      { status: 200 },
    );
  }
}
