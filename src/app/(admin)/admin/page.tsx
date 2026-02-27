import { Card } from "@/components/ui/card";

const dashboardCards = [
  { label: "Members", value: "6", href: "/admin/members", color: "text-sol-purple" },
  { label: "Events", value: "4", href: "/admin/events", color: "text-sol-green" },
  { label: "Partners", value: "6", href: "/admin/partners", color: "text-my-yellow" },
  { label: "FAQ Items", value: "5", href: "/admin/content", color: "text-blue-400" },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardCards.map((card) => (
          <Card key={card.label} variant="glass" hover padding="lg">
            <p className="text-sm text-white/50 mb-1">{card.label}</p>
            <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Card variant="glass" padding="lg">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <p className="text-sm text-white/50">
              Connect Supabase to enable full CMS functionality. Use local Supabase CLI for development.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
