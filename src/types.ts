export interface NextPaymentDue {
  amount: number;
  date: string;
}

export interface DashboardCardsProps {
  totalMonthlyExpenses: string;
  totalSubscriptions: number;
  nextPaymentDue: string;
}

export interface NavbarProps {
  className?: string;
  isAdd?: boolean;
}

export interface Subscription {
  id: number;
  name: string;
  cost: string;
  plan: Plan;
  paydate: string;
  createdAt: Date;
}

export interface TableProps {
  handleDeletion: (id: string) => void;
  subscriptions: Subscription[];
  className?: string;
}

export type Plan = "monthly" | "annual";

export interface mainPage {
  total: number;
  totalMonthlyExpenses: string;
  nextPay: string;
}

export interface CreateSubscription {
  name: string;
  cost: string;
  plan: Plan;
  paydate: string;
}

export interface SubscriptionCardProps {
  handleSubmit: (newSubscripton: CreateSubscription) => void;
  oldSubscriptionData?: Subscription;
  title: string;
  buttonTitle: string;
}
