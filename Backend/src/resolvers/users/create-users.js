import { userModel } from "../../model/user-model.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  const data = req.body;

  try {
    const pass = await bcrypt.hash(data.password, 10);

    const newUser = await userModel.create({
      email: data.email,
      password: pass,
      phoneNumber: data.phoneNumber,
      address: data.address,
      role: data.role,
      orderedFoods: data.orderedFoods,
      ttl: data.ttl,
      isVerified: data.isVerified,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
