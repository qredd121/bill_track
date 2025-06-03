"use client";

import Navbar from "@/components/Navbar";
import Table from "@/components/Table";
import { Subscription } from "@/types";
import { useEffect, useState } from "react";

export default function All() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    fetch("/api/subscriptions")
      .then((res) => res.json())
      .then((data) => setSubscriptions(data));
  }, []);

  return (
    <div className="bg-gray-700 min-h-screen">
      <Navbar />
      {subscriptions.length > 0 && (
        <div className="flex items-center justify-center inset-0">
          <Table subscriptions={subscriptions} />
        </div>
      )}
      {subscriptions.length == 0 && (
        <div className="flex flex-col items-center inset-0 my-32">
          <p>You don't have any Subscriptions added yet</p>
          <p>Press + symbol in the navbar to add subscription</p>
        </div>
      )}
    </div>
  );
}
