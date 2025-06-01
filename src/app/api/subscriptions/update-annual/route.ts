import { db } from "@/db";
import { sql } from "drizzle-orm";

export async function POST() {
  const result = await db.execute(
    sql`UPDATE subscriptions SET paydate = paydate + INTERVAL '1 year' WHERE plan = 'annual'`
  );
  return Response.json(result);
}
