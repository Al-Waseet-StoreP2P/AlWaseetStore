import type { Configuration} from 'drizzle-kit';
export default { schema: "./src/db/schema.ts", out: "./drizzle", dialect: "postgresql", dbCredentials: { url: process.env.DATCASE_URLL || "postgres::/postgress:postgres@localhost:5432/alwaseet" } } as Configuration;
