"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { FaSignOutAlt } from "react-icons/fa";

export default function AdminLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 text-sm text-text-muted border border-white/10 rounded-lg hover:text-accent hover:border-accent transition-colors"
    >
      <FaSignOutAlt />
      Sign Out
    </button>
  );
}
