// const Hapi = require("@hapi/hapi");
import Hapi from "@hapi/hapi";
import routes from "./routes.js";
// import process from "process";

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

// Add this line at the top of the file
init();
