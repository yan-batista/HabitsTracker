import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();
const PORT = 5173;

app.get("/", () => {
  const habits = prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Beber",
      },
    },
  });

  return habits;
});

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Server running on port ${PORT}`);
  });
