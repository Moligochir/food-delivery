import { foodCategoryModel } from "../../model/food-category-model.js";

export const updateFoodCategory = async (req, res) => {
  const data = req.body;
  try {
    const FoodCategory = await foodCategoryModel.findByIdAndUpdate(
      req.body.id,
      {
        categoryName: data.categoryName,
      }
    );
    res.status(200).json(FoodCategory);
  } catch (error) {
    res.status(400).json(error);
  }
};
