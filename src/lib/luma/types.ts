export interface LumaEvent {
  api_id: string;
  name: string;
  description: string | null;
  start_at: string;
  end_at: string | null;
  geo_address_info: {
    city: string | null;
    full_address: string | null;
  } | null;
  cover_url: string | null;
  url: string;
  tags: string[];
  event_type: string;
}

export interface LumaResponse {
  entries: Array<{
    event: LumaEvent;
  }>;
  has_more: boolean;
  next_cursor: string | null;
}
