import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production"])
    .transform((value) => value || "production"),
  APP_URL: z.string().transform((value) => value || "https://localhost:3000"),
  API_URL: z
    .string()
    .transform((value) => value || "https://localhost:3000/api"),
  DB_URL: z.string(),
  DB_URL_NON_POOLING: z.string(),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),
});

// Prevent default process.env.NODE_ENV to be parsed on next.config.mjs
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { NODE_ENV, ...env } = envSchema.parse(process.env);

export default env;
