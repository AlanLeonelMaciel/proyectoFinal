import tokenGenerator from "../../src/utils/tokenGenerator.js";
import * as usersModel from "../models/usersModel.js";

export const login = async (req, res) => {
  const { email, contraseña } = req.body;
  const user = await usersModel.getUserByEmail(email);
  if (user.email === email && user.contraseña === contraseña) {
    const token = tokenGenerator.generateToken(user);
    return res.send({ token });
  } else {
    res.status(401).send({ message: "las credenciales no son validas." });
  }
};
