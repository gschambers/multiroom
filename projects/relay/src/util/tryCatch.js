import {Errors} from "../constants";

export default function tryCatch(fn) {
    return async function(req, res) {
        try {
            return await fn(req, res);
        } catch(err) {
            switch (err.name) {
                case Errors.NOT_FOUND:
                    res.status(404);
                    res.json({ error: "Not found" });
                    break;

                default:
                    res.status(500);
                    res.json({ error: err.message });
                    break;
            }
        }
    }
}
