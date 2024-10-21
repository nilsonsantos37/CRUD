import{ db } from "../db.js";

 export const getUsers = (_, rest) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return rest.json(err);

        return rest.status(200).json(data);
    });
 };