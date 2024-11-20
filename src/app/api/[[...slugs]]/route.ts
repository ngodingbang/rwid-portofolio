import { swagger } from "@elysiajs/swagger";
import { Elysia, t } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .use(
    swagger({
      path: "/doc",
      scalarConfig: {
        spec: {
          url: "/api/doc/json",
        },
      },
      exclude: ["/api/doc", "/api/doc/json"],
    }),
  )
  .get(
    "/",
    () => ({
      message: "hello Next",
    }),
    {
      response: t.Object({
        message: t.String(),
      }),
    },
  )
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
    response: t.Object({
      name: t.String(),
    }),
  });

export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const PATCH = app.handle;
export const DELETE = app.handle;
export const HEAD = app.handle;
export const OPTIONS = app.handle;
