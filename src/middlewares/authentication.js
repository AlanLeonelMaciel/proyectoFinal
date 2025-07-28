import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.jwt_secret_key;

// Middleware para verificar el token JWT
export const authentication = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Token no proporcionado o mal formado" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, secret_key, (err) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido o expirado" });
    }
    next();
  });
};

export default authentication;