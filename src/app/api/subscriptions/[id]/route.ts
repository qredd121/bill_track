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
    .where(eq(subscriptionsTable.id, parseInt(await params.id)));

  return Response.json(res[0]);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(await params.id);
  const { name, cost, plan, paydate }: Subscription = await request.json();
  const res = await db
    .update(subscriptionsTable)
    .set({ name, cost: parseFloat(cost), plan, paydate })
    .where(eq(subscriptionsTable.id, id));

  return Response.json(res);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(await params.id);
  const res = await db
    .delete(subscriptionsTable)
    .where(eq(subscriptionsTable.id, id));

  return Response.json(res);
}
