import app from "./src/app.ts";
import http from "http";
import dotenv from "dotenv";
dotenv.config();

const server = http.createServer(app);

server.listen(process.env.PORT, async () => {
  console.log("server is listening on ", process.env.PORT);
});
