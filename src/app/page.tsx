"use client";

import DashboardCards from "@/components/DasboardCards";
import Navbar from "@/components/Navbar";
import { mainPage } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [components, setComponents] = useState<mainPage>();

  useEffect(() => {
    fetch("api/subscribtions/mian-page")
      .then((res) => res.json())
      .then((data) => setComponents(data));
  });

  return (
    <div className="bg-gray-700 min-h-screen">
      <Navbar className="mb-10" isAdd={false} />
      <DashboardCards
        totalMonthlyExpenses={199}
        totalSubscriptions={12}
        nextPaymentDue={{ amount: 12.99, date: "12.02.2025" }}
      />
    </div>
  );
}
