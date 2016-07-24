import bodyParser from "body-parser";
import express from "express";

import {
    getNodes,
    addNode,
    getSingleNode,
    updateNode,
    removeNode,
    updateZoneForNode,
    getZones,
    addZone,
    getSingleZone,
    updateZone,
    removeZone,
} from "./controllers/node";

const app = express();

app.use(bodyParser.json());

// Nodes and zones
app.get("/nodes", getNodes);
app.post("/nodes", addNode);
app.get("/nodes/:id", getSingleNode);
app.put("/nodes/:id", updateNode);
app.delete("/nodes/:id", removeNode);
app.put("/nodes/:id/zone", updateZoneForNode);
app.get("/zones", getZones);
app.post("/zones", addZone);
app.get("/zones/:id", getSingleZone);
app.put("/zones/:id", updateZone);
app.delete("/zones/:id", removeZone);

// Heartbeats
app.get("/ping", (_, res) => res.send("pong"));

export default app;
