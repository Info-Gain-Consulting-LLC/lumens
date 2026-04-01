import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!code) {
    return NextResponse.redirect(`${siteUrl}/?error=auth`);
  }

  try {
    const supabase = await createClient();
    const { error: exchangeError } =
      await supabase.auth.exchangeCodeForSession(code);

    if (exchangeError) throw exchangeError;

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user || !user.email) throw userError;

    const name =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      user.email.split("@")[0];

    const rawProvider = user.app_metadata?.provider || "google";
    const provider: "google" | "linkedin" = rawProvider.includes("linkedin")
      ? "linkedin"
      : "google";

    const avatar_url =
      user.user_metadata?.avatar_url ||
      user.user_metadata?.picture ||
      null;

    const adminClient = createAdminClient();

    const { data: existingLead } = await adminClient
      .from("leads")
      .select("id")
      .eq("email", user.email)
      .single();

    const isNewLead = !existingLead;

    const { error: upsertError } = await adminClient
      .from("leads")
      .upsert(
        { name, email: user.email, provider, avatar_url },
        { onConflict: "email" }
      );

    if (upsertError) throw upsertError;

    if (isNewLead) {
      await fetch(`${siteUrl}/api/notify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: user.email, provider }),
      });
    }

    return NextResponse.redirect(`${siteUrl}/?registered=true`);
  } catch (error) {
    console.error("Auth callback error:", error);
    return NextResponse.redirect(`${siteUrl}/?error=auth`);
  }
}
