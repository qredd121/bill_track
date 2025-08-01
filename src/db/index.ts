import { drizzle } from "drizzle-orm/node-postgres";
import "../../env-config";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgresql://postgres:postgres@localhost:5432/postgres",
});
export const db = drizzle({ client: pool });
