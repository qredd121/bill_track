import { DashboardCardsProps } from "@/types";
import React from "react";
import Timer from "./Timer";

const DashboardCards: React.FC<DashboardCardsProps> = ({
  totalMonthlyExpenses,
  totalSubscriptions,
  nextPaymentDue,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="card bg-gray-700 rounded-2xl shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-gray-200">Total Monthly Expenses</h2>
          <p className="text-2xl font-bold text-gray-400">
            ${totalMonthlyExpenses}
          </p>
        </div>
      </div>

      <div className="card inset-shadow-sm bg-gray-700 rounded-2xl shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-gray-200">Total Subscriptions</h2>
          <p className="text-2xl font-bold text-gray-400">
            {totalSubscriptions}
          </p>
        </div>
      </div>

      <div className="card inset-shadow-sm bg-gray-70 rounded-2xl shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-200">Next Payment Due</h2>
          {new Date(nextPaymentDue).getTime() - new Date().getTime() <=
            24 * 60 * 60 * 1000 && <Timer date={nextPaymentDue} />}
          {new Date(nextPaymentDue).getTime() - new Date().getTime() >
            24 * 60 * 60 * 1000 && (
            <p className="font-bold text-xl text-gray-400">
              {nextPaymentDue.slice(0, 10)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
