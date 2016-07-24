import * as nodeService from "../services/node";
import tryCatch from "../util/tryCatch";

export const getNodes = tryCatch(async function getNodes(req, res) {
    const nodes = req.query.zone ?
        await nodeService.getNodesByZone(zone) :
        await nodeService.getAllNodes();
    res.json(nodes);
});

export const addNode = tryCatch(async function addNode(req, res) {
    const node = await nodeService.addNode(req.body);
    res.json(node);
});

export const getSingleNode = tryCatch(async function getSingleNode(req, res) {
    const node = await nodeService.getNodeById(req.params.id);
    res.json(node);
});

export const updateNode = tryCatch(async function updateNode(req, res) {
    const node = await nodeService.updateNodeById(req.params.id, req.body);
    res.json(node);
});

export const removeNode = tryCatch(async function removeNode(req, res) {
    await nodeService.removeNodeById(req.params.id);
    res.end();
});

export const updateZoneForNode = tryCatch(async function updateZoneForNode(req, res) {
    const node = await nodeService.updateNodeById(req.params.id, req.body);
    res.json(node);
});

export const getZones = tryCatch(async function getZones(req, res) {
    const zones = await nodeService.getAllZones();
    res.json(zones);
});

export const addZone = tryCatch(async function addZone(req, res) {
    const zone = await nodeService.addZone(req.body);
    res.json(zone);
});

export const getSingleZone = tryCatch(async function getSingleZone(req, res) {
    const zone = await nodeService.getZoneById(req.params.id);
    res.json(zone);
});

export const updateZone = tryCatch(async function updateZone(req, res) {
    const zone = await nodeService.updateZoneById(req.params.id, req.body);
    res.json(zone);
});

export const removeZone = tryCatch(async function removeZone(req, res) {
    await nodeService.removeNodeById(req.params.id);
    res.json(node);
});
