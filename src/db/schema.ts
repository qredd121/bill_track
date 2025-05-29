import {
  integer,
  pgEnum,
  pgTable,
  real,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const planEnum = pgEnum("plans", ["monthly", "annual"]);
export const subscriptionsTable = pgTable("subscriptions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  cost: real().notNull(),
  plan: planEnum().notNull(),
  paydate: timestamp({ mode: "string" }),
  createdAt: timestamp().defaultNow(),
});
