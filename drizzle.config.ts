import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "sqlite",
    schema: "./src/schemas/*.ts",
    out: "./drizzle",
    dbCredentials: {
        url: "./dev.db"
    }
});