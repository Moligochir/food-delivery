import { foodCategoryModel } from "../../model/food-category-model.js";

export const getFoodCategory = async (req, res) => {
  const FoodCategory = await foodCategoryModel.find();

  res.status(200).json(FoodCategory);
};
