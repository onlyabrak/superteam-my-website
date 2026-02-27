export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      members: {
        Row: {
          id: string;
          name: string;
          avatar_url: string | null;
          bio: string | null;
          role: string;
          title: string | null;
          company: string | null;
          skills: string[];
          badges: string[];
          social_links: Json | null;
          twitter_handle: string | null;
          achievements: string[];
          featured: boolean;
          visible: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          avatar_url?: string | null;
          bio?: string | null;
          role?: string;
          title?: string | null;
          company?: string | null;
          skills?: string[];
          badges?: string[];
          social_links?: Json | null;
          twitter_handle?: string | null;
          achievements?: string[];
          featured?: boolean;
          visible?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          avatar_url?: string | null;
          bio?: string | null;
          role?: string;
          title?: string | null;
          company?: string | null;
          skills?: string[];
          badges?: string[];
          social_links?: Json | null;
          twitter_handle?: string | null;
          achievements?: string[];
          featured?: boolean;
          visible?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          date: string;
          end_date: string | null;
          location: string | null;
          type: string;
          cover_image_url: string | null;
          tags: string[];
          luma_id: string | null;
          luma_url: string | null;
          visible: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          date: string;
          end_date?: string | null;
          location?: string | null;
          type?: string;
          cover_image_url?: string | null;
          tags?: string[];
          luma_id?: string | null;
          luma_url?: string | null;
          visible?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          date?: string;
          end_date?: string | null;
          location?: string | null;
          type?: string;
          cover_image_url?: string | null;
          tags?: string[];
          luma_id?: string | null;
          luma_url?: string | null;
          visible?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      partners: {
        Row: {
          id: string;
          name: string;
          logo_url: string;
          website_url: string | null;
          tier: string;
          sort_order: number;
          visible: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          logo_url: string;
          website_url?: string | null;
          tier?: string;
          sort_order?: number;
          visible?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          logo_url?: string;
          website_url?: string | null;
          tier?: string;
          sort_order?: number;
          visible?: boolean;
          created_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          author_name: string;
          author_title: string | null;
          author_avatar_url: string | null;
          content: string;
          featured: boolean;
          visible: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          author_name: string;
          author_title?: string | null;
          author_avatar_url?: string | null;
          content: string;
          featured?: boolean;
          visible?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          author_name?: string;
          author_title?: string | null;
          author_avatar_url?: string | null;
          content?: string;
          featured?: boolean;
          visible?: boolean;
          created_at?: string;
        };
      };
      faq_items: {
        Row: {
          id: string;
          question: string;
          answer: string;
          sort_order: number;
          visible: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          question: string;
          answer: string;
          sort_order?: number;
          visible?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          question?: string;
          answer?: string;
          sort_order?: number;
          visible?: boolean;
          created_at?: string;
        };
      };
      stats: {
        Row: {
          id: string;
          label: string;
          value: number;
          suffix: string | null;
          icon: string | null;
          sort_order: number;
          visible: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          label: string;
          value: number;
          suffix?: string | null;
          icon?: string | null;
          sort_order?: number;
          visible?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          label?: string;
          value?: number;
          suffix?: string | null;
          icon?: string | null;
          sort_order?: number;
          visible?: boolean;
          created_at?: string;
        };
      };
      site_content: {
        Row: {
          id: string;
          section_key: string;
          content: Json;
          updated_at: string;
        };
        Insert: {
          id?: string;
          section_key: string;
          content: Json;
          updated_at?: string;
        };
        Update: {
          id?: string;
          section_key?: string;
          content?: Json;
          updated_at?: string;
        };
      };
      admin_profiles: {
        Row: {
          id: string;
          user_id: string;
          role: string;
          display_name: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          role?: string;
          display_name?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          role?: string;
          display_name?: string | null;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

// Convenience types
export type Member = Database["public"]["Tables"]["members"]["Row"];
export type Event = Database["public"]["Tables"]["events"]["Row"];
export type Partner = Database["public"]["Tables"]["partners"]["Row"];
export type Testimonial = Database["public"]["Tables"]["testimonials"]["Row"];
export type FaqItem = Database["public"]["Tables"]["faq_items"]["Row"];
export type Stat = Database["public"]["Tables"]["stats"]["Row"];
export type SiteContent = Database["public"]["Tables"]["site_content"]["Row"];
export type AdminProfile = Database["public"]["Tables"]["admin_profiles"]["Row"];
