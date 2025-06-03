"use client";

import DashboardCards from "@/components/DasboardCards";
import Navbar from "@/components/Navbar";
import NoSubscriptions from "@/components/NoSubscriptions";
import { mainPage } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [components, setComponents] = useState<mainPage>();

  useEffect(() => {
    fetch("api/subscriptions/main-page")
      .then((res) => res.json())
      .then((data) => setComponents(data));
  });

  return (
    <div className="bg-gray-700 min-h-screen">
      <Navbar className="mb-10" isAdd={false} />
      {components && components.total > 0 && (
        <DashboardCards
          totalMonthlyExpenses={components.totalMonthlyExpenses}
          totalSubscriptions={components.total}
          nextPaymentDue={components.nextPay}
        />
      )}

      {components && components.total === 0 && <NoSubscriptions />}
    </div>
  );
}
