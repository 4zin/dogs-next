import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes/index";

const server = express();

server.use(cors());
server.use(morgan("dev"));

server.use("/", router);

export default server;
