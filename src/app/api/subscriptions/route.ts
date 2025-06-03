import { db } from "@/db";
import { subscriptionsTable } from "@/db/schema";
import { updateAnnual, updateMonthly } from "@/handlers/update-handler";
import { Subscription } from "@/types";
import { NextResponse } from "next/server";

export async function GET() {
  const subscriptions = await db.select().from(subscriptionsTable);
  return NextResponse.json(subscriptions);
}

export async function POST(request: Request) {
  const { name, cost, plan, paydate }: Subscription = await request.json();
  const result = await db
    .insert(subscriptionsTable)
    .values({ name, cost, plan, paydate })
    .returning();

  if (plan == "monthly") updateMonthly();

  if (plan == "annual") updateAnnual();

  return NextResponse.json(result[0]);
}
