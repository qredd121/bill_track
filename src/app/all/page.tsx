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
      <div className="flex items-center justify-center inset-0">
        <Table subscriptions={subscriptions} />
      </div>
    </div>
  );
}
