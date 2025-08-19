import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: "./.env" });

const databaseUrl = process.env.DATABASE_URL_POSTGRES;
if (!databaseUrl) {
  throw new Error("DATABASE_URL_POSTGRES environment variable is not set.");
}

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
