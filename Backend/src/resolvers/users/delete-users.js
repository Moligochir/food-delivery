import { userModel } from "../../model/user-model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  const token = req.body.authorization;
  try {
    jwt.verify(token, "secret-key");
    const User = await userModel.findByIdAndDelete(req.body.id);
    res.status(200).json(User);
  } catch (error) {
    res.status(400).json(error);
  }
};
