"use client";

import Navbar from "@/components/Navbar";
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
    router.push("/all");
  }
  return (
    <div className="min-h-screen bg-gray-700">
      <Navbar isAdd={true} />
      <SubscriptionCard handleSubmit={handleSubmit} />
    </div>
  );
}
