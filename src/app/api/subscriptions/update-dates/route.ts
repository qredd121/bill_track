import { db } from "@/db";
import { subscriptionsTable } from "@/db/schema";
import { and, eq, sql } from "drizzle-orm";

export default async function GET() {
  await db.execute(
    sql`UPDATE subscriptions SET paydate = paydate + INTERVAL '1 month' WHERE plan = 'monthly'`
  );

  // Increment paydate by 1 year for annual plans
  await db.execute(
    sql`UPDATE subscriptions SET paydate = paydate + INTERVAL '1 year' WHERE plan = 'annual'`
  );
}
