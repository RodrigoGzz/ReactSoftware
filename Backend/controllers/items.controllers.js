import {sqlConnect, sql} from "../utilidades/sql.js"

export const getItems = async () => {
    const pool = await sqlConnect();
    const data = await pool.request().query("select * from items");
};

export const getItem = async () => {
    const pool = await sqlConnect();
    const data = await pool.request().input("", sql.varChar, req.parameters.id).query("insert into items (name,price) values (@name, @price)");
    res.status(200).json({operation: true});

};