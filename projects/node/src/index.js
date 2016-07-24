import bodyParser from "body-parser";
import express from "express";

import {
    getCurrentNode,
} from "./controllers/node";

const app = express();

app.use(bodyParser.json());

// Identity
app.get("/me", getCurrentNode);

// Heartbeats
app.get("/ping", (_, res) => res.send("pong"));

export default app;
