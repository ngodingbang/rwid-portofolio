import prisma from "@prisma/client";

const model = new prisma.PrismaClient({
  log: [{ emit: "event", level: "query" }],
});

if (process.env.NODE_ENV === "development") {
  import("chalk").then((chalk) => {
    model.$on("query", (event) => {
      console.info(`${chalk.default.blue("prisma:query")} ${event.query}`);
      console.info(`${chalk.default.blue("prisma:params")}: ${event.params}`);
      console.info(
        `${chalk.default.blue("prisma:duration")}: ${event.duration}ms`,
      );
      console.info(`${chalk.default.red("-----")}`);
    });
  });
}

const modelX = model.$extends({});

export { model, modelX, prisma };
