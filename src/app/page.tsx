"use client";
import DashboardCards from "@/components/DashboardCards";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import NoSubscriptions from "@/components/NoSubscriptions";
import { MessageContext } from "@/components/WsProvider";
import { mainPage } from "@/types";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const [components, setComponents] = useState<mainPage>();
  const message = useContext(MessageContext);
  useEffect(() => {
    fetch(`/api/subscriptions/main-page`)
      .then((res) => res.json())
      .then((data) => setComponents(data));
  }, [message]);
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
      {!components && (
        <Loader className="justify-center absolute right-1/2 bottom-1/2" />
      )}
    </div>
  );
}
