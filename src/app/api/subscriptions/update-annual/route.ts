import { db } from "@/db";
import { sql } from "drizzle-orm";

export async function POST() {
  const result = await db.execute(
    sql`UPDATE subscriptions SET paydate = paydate + INTERVAL '1 year' WHERE plan = 'annual' AND EXTRACT(YEAR FROM paydate) < EXTRACT(YEAR FROM CURRENT_DATE) + 1`
  );
  return Response.json(result);
}
