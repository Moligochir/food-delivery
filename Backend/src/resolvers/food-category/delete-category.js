import { foodCategoryModel } from "../../model/food-category-model.js";

export const deleteFoodCategory = async (req, res) => {
  const data = req.body;
  try {
    const FoodCategory = await foodCategoryModel.findByIdAndDelete(req.body.id);
    res.status(200).json(FoodCategory);
  } catch (error) {
    res.status(400).json(error);
  }
};
