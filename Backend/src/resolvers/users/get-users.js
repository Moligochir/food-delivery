import { userModel } from "../../model/user-model.js";

export const getUser = async (req, res) => {
  const users = await userModel.find().populate(["orderedFoods"]);

  res.status(200).json(users);
};
