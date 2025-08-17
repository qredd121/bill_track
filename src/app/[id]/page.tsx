"use client";

import Loader from "@/components/Loader";
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
        `http://${process.env.NEXT_PUBLIC_MAIN_HOSTNAME}/api/subscriptions/${id}`
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
    <div className="min-h-screen bg-base-300">
      <div className="container mx-auto px-4 py-8">
        {subscription ? (
          <SubscriptionCard
            title="Edit Subscription"
            buttonTitle="Save Changes"
            handleSubmit={handleSubmit}
            oldSubscriptionData={subscription}
          />
        ) : (
          <div className="flex justify-center items-center min-h-[50vh]">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
