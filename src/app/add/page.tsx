"use client";

import Navbar from "@/components/Navbar";
import SubscriptionCard from "@/components/SubscriptionCard";
import { Plan } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Add() {
  const router = useRouter();

  async function handleSubmit(
    name: string,
    cost: string,
    plan: Plan,
    paydate: string
  ) {
    await fetch("/api/subscriptions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, cost: parseFloat(cost), plan, paydate }),
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
