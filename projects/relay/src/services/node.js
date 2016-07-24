import uniq from "lodash.uniq";
import uuid from "uuid";
import db from "../db";
import Node from "../models/node";
import {Errors} from "../constants";

function _getAllNodesWithIds(nodeIds) {
    return Promise.all(nodeIds.map(getNodeById));
}

function _getAllNodeIds() {
    return new Promise((resolve, reject) => {
        db.get("nodes", (err, value) => {
            if (err) {
                if (err.name === Errors.NOT_FOUND) {
                    resolve([]);
                    return;
                }

                reject(err);
                return;
            }

            const nodeIds = JSON.parse(value);

            resolve(nodeIds);
        });
    });
}

export function getAllNodes() {
    return _getAllNodeIds().then(_getAllNodesWithIds);
}

export function getNodesByZone(zone) {
    return new Promise((resolve, reject) => {
        db.get(`zones.${zone}`, (err, value) => {
            if (err) {
                reject(err);
                return;
            }

            const nodeIds = JSON.parse(value);

            _getAllNodesWithIds(nodeIds)
                .then(resolve)
                .catch(reject);
        })
    });
}

export function getNodeById(id) {
    return new Promise((resolve, reject) => {
        db.get(`nodes.${id}`, (err, value) => {
            if (err) {
                reject(err);
                return;
            }

            const node = JSON.parse(value);

            resolve(node);
        });
    });
}

export function addNode(node) {
    node = Node(
        Object.assign({
            id: uuid.v4()
        }, node)
    );

    return new Promise((resolve, reject) => {
        db.put(`nodes.${node.id}`, JSON.stringify(node), async (err) => {
            if (err) {
                reject(err);
                return;
            }

            let nodeIds = await _getAllNodeIds();

            nodeIds = uniq(nodeIds.concat([node.id])).sort();

            db.put("nodes", JSON.stringify(nodeIds), (err) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(node);
            });
        });
    });
}
