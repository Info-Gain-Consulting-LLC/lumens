"use client";

import { useState } from "react";
import Image from "next/image";
import { Lead } from "@/types/database";
import { FaGoogle, FaLinkedin, FaDownload, FaSearch } from "react-icons/fa";

interface AdminTableProps {
  leads: Lead[];
}

export default function AdminTable({ leads }: AdminTableProps) {
  const [search, setSearch] = useState("");

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  const exportCSV = () => {
    const headers = ["Name", "Email", "Provider", "Registered"];
    const rows = filteredLeads.map((l) => [
      l.name,
      l.email,
      l.provider,
      new Date(l.created_at).toLocaleString(),
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((v) => `"${v}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "lumens-leads.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-KE", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }) + " \u00B7 " + d.toLocaleTimeString("en-KE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <div className="bg-background-card rounded-lg border border-white/5 overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border-b border-white/5">
        <div className="relative w-full sm:w-72">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-background-surface border border-white/10 rounded-lg text-text text-sm placeholder:text-text-muted/60 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <button
          onClick={exportCSV}
          className="flex items-center gap-2 px-4 py-2.5 bg-accent text-background text-sm font-medium rounded-lg hover:bg-accent-light transition-colors"
        >
          <FaDownload className="text-xs" />
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-background-surface">
              <th className="text-left text-accent text-xs uppercase tracking-wide font-medium px-6 py-4">
                Lead
              </th>
              <th className="text-left text-accent text-xs uppercase tracking-wide font-medium px-6 py-4">
                Email
              </th>
              <th className="text-left text-accent text-xs uppercase tracking-wide font-medium px-6 py-4">
                Provider
              </th>
              <th className="text-left text-accent text-xs uppercase tracking-wide font-medium px-6 py-4">
                Registered
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center">
                  <p className="text-text-muted">No leads found</p>
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-t border-white/5 hover:bg-background-surface/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {lead.avatar_url ? (
                        <Image
                          src={lead.avatar_url}
                          alt={lead.name}
                          width={36}
                          height={36}
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">
                          {getInitials(lead.name)}
                        </div>
                      )}
                      <span className="text-text text-sm font-medium">
                        {lead.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-muted text-sm">
                    {lead.email}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {lead.provider === "google" ? (
                        <FaGoogle className="text-red-400 text-sm" />
                      ) : (
                        <FaLinkedin className="text-blue-400 text-sm" />
                      )}
                      <span className="text-text-muted text-sm capitalize">
                        {lead.provider}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-muted text-sm">
                    {formatDate(lead.created_at)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
