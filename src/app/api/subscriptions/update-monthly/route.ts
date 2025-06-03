import { db } from "@/db";
import { sql } from "drizzle-orm";

export async function POST() {
  const result = await db.execute(
    sql`UPDATE subscriptions SET paydate = paydate + INTERVAL '1 month' WHERE plan = 'monthly' AND EXTRACT(MONTH FROM paydate) < EXTRACT(MONTH FROM CURRENT_DATE)`
  );
  return Response.json(result);
}
