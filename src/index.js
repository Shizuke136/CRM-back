import express from "express"
import cors from "cors"
import { connection } from "./db/db.js";
import { register } from "../controllers/registerController.js";

const server = express();
server.use(cors())
server.use(express.json())

server.get("/status", (req, res) => res.sendStatus(200))
server.post("/sign-up", register)

server.listen(4000, () => `A mágica acontece no ${4000}`)