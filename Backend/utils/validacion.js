const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Clave123'; 

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
    }

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified; 
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token inválido o expirado.' });
    }
};

module.exports = authenticateToken;