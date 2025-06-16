"use client";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import SubscriptionCard from "@/components/SubscriptionCard";
import { CreateSubscription, Subscription } from "@/types";
import { useRouter } from "next/navigation";
import React, { Usable, useEffect, useState } from "react";

export default function Page({ params }: { params: Usable<{ id: string }> }) {
  const [subscription, setSubscription] = useState<Subscription>();
  const { id } = React.use(params);
  const router = useRouter();
  useEffect(() => {
    async function fetchSubscription() {
      const res = await fetch(
        `http://${process.env.HOSTNAME}:3000/api/subscriptions/${id}`
      );
      const data = await res.json();
      setSubscription(data);
    }
    fetchSubscription();
  }, []);
  async function handleSubmit({
    name,
    cost,
    plan,
    paydate,
  }: CreateSubscription) {
    await fetch(`/api/subscriptions/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, cost, plan, paydate }),
    });
    router.push("/all");
  }
  return (
    <div className="min-h-screen bg-gray-700 relative">
      <Navbar />
      {subscription ? (
        <SubscriptionCard
          title="Change Subscription"
          buttonTitle="Save changes"
          handleSubmit={handleSubmit}
          oldSubscriptionData={subscription}
        />
      ) : (
        <Loader className="justify-center absolute right-1/2 bottom-1/2" />
      )}
    </div>
  );
}
