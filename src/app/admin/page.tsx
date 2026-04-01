import AdminTable from "@/components/AdminTable";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-text mb-8">
          Admin Dashboard
        </h1>
        <AdminTable />
      </div>
    </main>
  );
}
