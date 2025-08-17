"use client";

import SubscriptionCard from "@/components/SubscriptionCard";
import { CreateSubscription } from "@/types";
import { useRouter } from "next/navigation";

export default function Add() {
  const router = useRouter();
  async function handleSubmit({
    name,
    cost,
    plan,
    paydate,
  }: CreateSubscription) {
    await fetch("api/subscriptions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, cost, plan, paydate }),
    });

    await fetch(`http://${process.env.NEXT_PUBLIC_WSS_HOSTNAME}:3001/message`);
    router.push("/all");
  }
  return (
    <div className="min-h-screen bg-base-300">
      <div className="container mx-auto px-4 py-8">
        <SubscriptionCard
          title="Add New Subscription"
          buttonTitle="Add Subscription"
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
