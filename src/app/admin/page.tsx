import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Lead } from "@/types/database";
import AdminTable from "@/components/AdminTable";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  if (user.email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  const adminClient = createAdminClient();
  const { data: leads, error } = await adminClient
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching leads:", error);
  }

  const typedLeads = (leads ?? []) as Lead[];

  return (
    <div className="min-h-screen bg-background text-text p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-(family-name:--font-playfair) text-3xl font-bold text-accent mb-1">
              LUMENS
            </h1>
            <p className="text-text-muted text-sm">
              Admin Dashboard &middot; Lead Management
            </p>
          </div>
          <div className="text-right">
            <p className="text-text-muted text-sm">Signed in as</p>
            <p className="text-white text-sm">{user.email}</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-background-card border border-primary rounded-lg p-6">
            <p className="text-text-muted text-sm uppercase tracking-wide mb-2">
              Total Leads
            </p>
            <p className="font-(family-name:--font-playfair) text-4xl font-bold text-accent">
              {typedLeads.length}
            </p>
          </div>
          <div className="bg-background-card border border-primary rounded-lg p-6">
            <p className="text-text-muted text-sm uppercase tracking-wide mb-2">
              Google Sign-ins
            </p>
            <p className="font-(family-name:--font-playfair) text-4xl font-bold text-accent">
              {typedLeads.filter((l) => l.provider === "google").length}
            </p>
          </div>
          <div className="bg-background-card border border-primary rounded-lg p-6">
            <p className="text-text-muted text-sm uppercase tracking-wide mb-2">
              LinkedIn Sign-ins
            </p>
            <p className="font-(family-name:--font-playfair) text-4xl font-bold text-accent">
              {typedLeads.filter((l) => l.provider === "linkedin").length}
            </p>
          </div>
        </div>

        <AdminTable leads={typedLeads} />
      </div>
    </div>
  );
}
