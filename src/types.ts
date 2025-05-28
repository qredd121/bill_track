export interface NextPaymentDue {
  amount: number;
  date: string;
}

export interface DashboardCardsProps {
  totalMonthlyExpenses: number;
  totalSubscriptions: number;
  nextPaymentDue: NextPaymentDue;
}

export interface NavbarProps {
  className?: string;
  isAdd?: boolean;
}

export interface Subscription {
  id: number;
  name: string;
  cost: number;
  paydate: string;
}

export interface TableProps {
  subscriptions: Subscription[];
  className?: string;
}
