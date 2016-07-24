import * as nodeService from "../services/node";

export async function getCurrentNode(req, res) {
    const node = await nodeService.getCurrentNode();
    res.json(node);
}
