import {sqlConnect, sql} from "../utilidades/sql.js"

export const getItems = async () => {
    const pool = await sqlConnect();
    const data = await pool.request().query("select * from items");
};