import DashboardCards from "@/components/DasboardCards";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-600 min-h-screen">
      <Navbar className="mb-10" isAdd={false} />
      <DashboardCards
        totalMonthlyExpenses={199}
        totalSubscriptions={12}
        nextPaymentDue={{ amount: 12.99, date: "12.02.2025" }}
      />
    </div>
  );
}
