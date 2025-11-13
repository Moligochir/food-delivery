import { foodCategoryModel } from "../../model/food-category-model.js";

export const createFoodCategory = async (req, res) => {
  const data = req.body;
  try {
    const FoodCategory = await foodCategoryModel.create({
      categoryName: data.categoryName,
    });
    res.status(200).json(FoodCategory);
  } catch (error) {
    res.status(400).json(error);
  }
};
