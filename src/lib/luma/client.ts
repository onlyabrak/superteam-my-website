import type { LumaResponse, LumaEvent } from "./types";

const LUMA_API_BASE = "https://api.lu.ma/public/v2";

export async function fetchLumaEvents(): Promise<LumaEvent[]> {
  const apiKey = process.env.LUMA_API_KEY;
  const calendarId = process.env.LUMA_CALENDAR_ID;

  if (!apiKey || !calendarId) {
    return [];
  }

  try {
    const res = await fetch(
      `${LUMA_API_BASE}/calendar/list-events?calendar_api_id=${calendarId}&period=future`,
      {
        headers: {
          "x-luma-api-key": apiKey,
          accept: "application/json",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      console.error(`Luma API error: ${res.status}`);
      return [];
    }

    const data: LumaResponse = await res.json();
    return data.entries.map((entry) => entry.event);
  } catch (error) {
    console.error("Failed to fetch Luma events:", error);
    return [];
  }
}
