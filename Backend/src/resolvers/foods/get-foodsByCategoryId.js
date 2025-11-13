import { foodModel } from "../../model/food-model.js";

export const getFoodByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;

  const foods = await foodModel.find({ category: categoryId });
  res.status(200).json(foods);
};
