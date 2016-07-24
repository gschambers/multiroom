import {getMac} from "getmac";
import ip from "ip";
import {NODE_ID} from "../constants";

function _getMac() {
    return new Promise((resolve, reject) => {
        getMac((err, macAddress) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(macAddress);
        });
    });
}

export async function getCurrentNode() {
    const macAddress = await _getMac();
    const ipAddress = ip.address();

    return {
        id: NODE_ID,
        macAddress,
        ipAddress,
    };
}
