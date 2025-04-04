import { connectDB } from "../utils/sql.js";
import { hashPassword } from "../utils/hash.js";

export const login = async (req, res) => {
  const sql = connectDB();
  const query = {
    text: "select * from users where username = $1",
    values: [req.body.username],
  };
  const data = await sql.query(query);
  if (data.rows.length === 0) {
    res.json({ isLogin: false, user: {} });
    return;
  }
  const salt = data.rows[0].password.substring(0, process.env.SALT);
  const hash = hashPassword(req.body.password, salt);
  const saltedHash = salt + hash;
  if (saltedHash === data.rows[0].password) {
    res.json({ isLogin: true, user: data.rows[0] });
    return;
  } else {
    res.json({ isLogin: false, user: {} });
  }
  const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getUserByEmail } = require('../utils/sql'); 
const SECRET_KEY = 'Clave123'; 

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email); 
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar el token
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

module.exports = { login };
};
