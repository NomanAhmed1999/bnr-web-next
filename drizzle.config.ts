import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  schema: "./src/app/drizzle/schema.ts",
  out: "./src/app/drizzle/migrations",
});
