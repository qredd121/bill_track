import React from "react";

interface NextPaymentDue {
  amount: number;
  date: string;
}

interface DashboardCardsProps {
  totalMonthlyExpenses: number;
  totalSubscriptions: number;
  nextPaymentDue: NextPaymentDue;
}

const DashboardCards: React.FC<DashboardCardsProps> = ({
  totalMonthlyExpenses,
  totalSubscriptions,
  nextPaymentDue,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="card bg-gray-700">
        <div className="card-body">
          <h2 className="card-title text-gray-200">Total Monthly Expenses</h2>
          <p className="text-2xl font-bold text-gray-400">
            ${totalMonthlyExpenses}
          </p>
        </div>
      </div>

      <div className="card inset-shadow-sm bg-gray-700">
        <div className="card-body">
          <h2 className="card-title text-gray-200">All Subscriptions</h2>
          <p className="text-2xl font-bold text-gray-400">
            {totalSubscriptions}
          </p>
        </div>
      </div>

      <div className="card inset-shadow-sm bg-gray-700">
        <div className="card-body">
          <h2 className="card-title text-200">Next Payment Due</h2>
          <p className="text-2xl font-bold text-gray-400">
            ${nextPaymentDue.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
