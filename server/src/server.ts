import Fastify from "fastify";
import { appRoutes } from "./routes";

const app = Fastify();
const PORT = 5173;

app.register(appRoutes);

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Server running on port ${PORT}`);
  });
