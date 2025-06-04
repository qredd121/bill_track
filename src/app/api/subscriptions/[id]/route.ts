import { db } from "@/db";
import { subscriptionsTable } from "@/db/schema";
import { Subscription } from "@/types";
import { eq } from "drizzle-orm";
import { useRouter } from "next/router";

export async function GET() {
  const router = useRouter();
  const id: string = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id ?? "";

  return await db
    .select()
    .from(subscriptionsTable)
    .where(eq(subscriptionsTable.id, parseInt(id)));
}

export async function POST(request: Request) {
  const { name, cost, plan, paydate }: Subscription = await request.json();
  return await db.update(subscriptionsTable).set({ name, cost, plan, paydate });
}
