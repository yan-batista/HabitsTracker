import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();
const PORT = 3333;

app.register(appRoutes);
app.register(cors);

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Server running on port ${PORT}`);
  });
