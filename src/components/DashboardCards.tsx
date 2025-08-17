import { DashboardCardsProps } from "@/types";
import React from "react";
import Timer from "./Timer";

export default function DashboardCards({
  totalMonthlyExpenses,
  totalSubscriptions,
  nextPaymentDue,
}: DashboardCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-base-content">Total Monthly Expenses</h2>
          <p className="text-2xl font-bold text-base-content/70">
            ${totalMonthlyExpenses}
          </p>
        </div>
      </div>

      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-base-content">Total Subscriptions</h2>
          <p className="text-2xl font-bold text-base-content/70">
            {totalSubscriptions}
          </p>
        </div>
      </div>

      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-base-content">Next Payment Due</h2>
          {nextPaymentDue === "" && (
            <p className="text-2xl font-bold text-base-content/70">
              No upcoming payments
            </p>
          )}
          {nextPaymentDue !== "" &&
            new Date(nextPaymentDue).getTime() - new Date().getTime() <=
              24 * 60 * 60 * 1000 && <Timer date={nextPaymentDue} />}
          {nextPaymentDue !== "" &&
            new Date(nextPaymentDue).getTime() - new Date().getTime() >
              24 * 60 * 60 * 1000 && (
              <p className="text-2xl font-bold text-base-content/70">
                {nextPaymentDue.slice(0, 10)}
              </p>
            )}
        </div>
      </div>
    </div>
  );
}
