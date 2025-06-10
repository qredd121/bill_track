import { db } from "@/db";
import { subscriptionsTable } from "@/db/schema";
import { mainPage } from "@/types";
import {
  and,
  count,
  eq,
  gt,
  gte,
  lt,
  max,
  min,
  or,
  sql,
  sum,
} from "drizzle-orm";

export async function GET() {
  const countRes = await db.select({ count: count() }).from(subscriptionsTable);

  const totalMonthlyExpensesRes = await db
    .select({
      sum: sum(subscriptionsTable.cost),
    })
    .from(subscriptionsTable)
    .where(
      or(
        eq(subscriptionsTable.plan, "monthly"),
        and(
          eq(subscriptionsTable.plan, "annual"),
          and(
            gte(
              subscriptionsTable.paydate,
              sql`DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')`
            ),
            lt(
              subscriptionsTable.paydate,
              sql`DATE_TRUNC('month', CURRENT_DATE)`
            )
          )
        )
      )
    );

  const nextPayRes = await db
    .select({ nextDate: min(subscriptionsTable.paydate) })
    .from(subscriptionsTable)
    .where(gt(subscriptionsTable.paydate, sql`CURRENT_DATE`));

  return Response.json({
    total: countRes[0].count || 0,
    totalMonthlyExpenses: totalMonthlyExpensesRes[0].sum || "",
    nextPay: nextPayRes[0].nextDate || "",
  });
}
