export interface Lead {
  id: string;
  name: string;
  email: string;
  provider: "google" | "linkedin";
  avatar_url: string | null;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: Lead;
        Insert: Omit<Lead, "id" | "created_at">;
        Update: Partial<Omit<Lead, "id" | "created_at">>;
      };
    };
  };
}
