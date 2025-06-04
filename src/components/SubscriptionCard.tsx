"use client";

import { CreateSubscription, Plan, SubscriptionCardProps } from "@/types";
import { useState } from "react";

export default function SubscriptionCard({
  id,
  oldName,
  oldCost,
  oldPlan,
  oldPaydate,
}: SubscriptionCardProps) {
  const [name, setName] = useState(oldName || "");
  const [cost, setCost] = useState(oldCost || "");
  const [plan, setPlan] = useState<Plan>(oldPlan || "monthly");
  const [paydate, setPaydate] = useState(oldPaydate || "");

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
  }

  return (
    <div className="flex items-center justify-center bg-gray-700 mt-16">
      <div className="w-full max-w-3xl p-16 border border-gray-700 rounded-2xl shadow-2xl ">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-200">
          Add New Subscription
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ name, cost, plan, paydate });
          }}
          className="flex flex-col gap-10"
        >
          <label className="form-control w-full">
            <span className="label-text mb-2 text-xl text-gray-200">
              Subscription Name
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input outline-none input-lg w-full bg-gray-700 text-white font-light border-transparent"
              placeholder="e.g. Netflix"
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text mb-2 text-xl text-gray-200">Cost</span>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
              min="0"
              step="0.01"
              className="input outline-none input-lg w-full bg-gray-700 text-gray-200 font-light border-none"
              placeholder="e.g. 9.99"
            />
          </label>
          <div className="flex gap gap-4">
            <a
              onClick={() =>
                plan === "monthly" ? setPlan("annual") : setPlan("monthly")
              }
              className={
                `btn border-none rounded-xl p-2 cursor-pointer ` +
                (plan === "monthly"
                  ? "bg-blue-700 text-gray-200"
                  : "bg-gray-500 hover:bg-blue-700")
              }
            >
              Monthly
            </a>
            <a
              onClick={() =>
                plan === "monthly" ? setPlan("annual") : setPlan("monthly")
              }
              className={
                `btn border-none rounded-xl p-2 cursor-pointer ` +
                (plan === "annual"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-500 hover:bg-blue-700")
              }
            >
              Annual
            </a>
          </div>
          <label className="form-control w-full">
            <span className="label-text mb-2 text-xl text-gray-200">
              Last time you paid
            </span>
            <input
              type="date"
              value={paydate}
              onChange={(e) => setPaydate(e.target.value)}
              required
              className="input outline-none input-lg w-full bg-gray-700 text-gray-400 font-light border-none"
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary btn-lg mt-8 text-gray-200 bg-blue-600 hover:bg-blue-700"
          >
            Add Subscription
          </button>
        </form>
      </div>
    </div>
  );
}
