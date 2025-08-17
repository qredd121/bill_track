"use client";

import { Plan, SubscriptionCardProps } from "@/types";
import { useState } from "react";

export default function SubscriptionCard({
  handleSubmit,
  oldSubscriptionData,
  title,
  buttonTitle,
}: SubscriptionCardProps) {
  const [name, setName] = useState(oldSubscriptionData?.name || "");
  const [cost, setCost] = useState(oldSubscriptionData?.cost || "0");
  const [plan, setPlan] = useState<Plan>(
    oldSubscriptionData?.plan || "monthly"
  );
  const [paydate, setPaydate] = useState(
    oldSubscriptionData?.paydate.split(/[T ]/)[0] || ""
  );

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 shadow-xl w-full max-w-2xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center text-base-content mb-8 justify-center">
            {title}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit({ name, cost, plan, paydate });
            }}
            className="space-y-6"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Subscription Name
                </span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input input-bordered input-lg w-full"
                placeholder="e.g. Netflix"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Cost</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content text-lg font-medium z-10">
                  $
                </span>
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  required
                  min="0"
                  step="0.01"
                  className="input input-bordered input-lg w-full pl-8"
                  placeholder="9.99"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Billing Plan
                </span>
              </label>
              <div className="flex gap-2 w-full">
                <button
                  type="button"
                  onClick={() => setPlan("monthly")}
                  className={`btn flex-1 ${
                    plan === "monthly" ? "btn-primary" : "btn-outline"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setPlan("annual")}
                  className={`btn flex-1 ${
                    plan === "annual" ? "btn-primary" : "btn-outline"
                  }`}
                >
                  Annual
                </button>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Last Payment Date
                </span>
              </label>
              <input
                type="date"
                value={paydate}
                onChange={(e) => setPaydate(e.target.value)}
                required
                className="input input-bordered input-lg w-full"
              />
            </div>

            <div className="card-actions justify-end pt-4">
              <button type="submit" className="btn btn-primary btn-lg w-full">
                {buttonTitle}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
