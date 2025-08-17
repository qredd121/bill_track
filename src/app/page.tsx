"use client";
import DashboardCards from "@/components/DashboardCards";
import Loader from "@/components/Loader";
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
    <div className="bg-base-300 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {components && components.total > 0 && (
          <DashboardCards
            totalMonthlyExpenses={components.totalMonthlyExpenses}
            totalSubscriptions={components.total}
            nextPaymentDue={components.nextPay}
          />
        )}
        {components && components.total === 0 && <NoSubscriptions />}
        {!components && (
          <div className="flex justify-center items-center min-h-[50vh]">
            <Loader className="" />
          </div>
        )}
      </div>
    </div>
  );
}
