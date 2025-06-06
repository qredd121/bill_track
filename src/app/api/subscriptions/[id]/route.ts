import { db } from "@/db";
import { subscriptionsTable } from "@/db/schema";
import { Subscription } from "@/types";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await db
    .select()
    .from(subscriptionsTable)
    .where(eq(subscriptionsTable.id, parseInt(params.id)));

  return Response.json(res[0]);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const { name, cost, plan, paydate }: Subscription = await request.json();
  return await db
    .update(subscriptionsTable)
    .set({ name, cost, plan, paydate })
    .where(eq(subscriptionsTable.id, id));
}
