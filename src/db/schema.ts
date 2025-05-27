import {
  integer,
  pgTable,
  real,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const subscriptionsTable = pgTable("subscriptions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  cost: real().notNull(),
  paydate: timestamp({ mode: "string" }),
  createdAt: timestamp().defaultNow(),
});
