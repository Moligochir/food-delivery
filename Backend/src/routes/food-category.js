import express from "express";

import { createFoodCategory } from "../resolvers/food-category/create-category.js";
import { deleteFoodCategory } from "../resolvers/food-category/delete-category.js";
import { getFoodCategory } from "../resolvers/food-category/get-category.js";
import { updateFoodCategory } from "../resolvers/food-category/update-category.js";

export const foodCategoryRouter = express.Router();

foodCategoryRouter.get("/", getFoodCategory);
foodCategoryRouter.post("/", createFoodCategory);
foodCategoryRouter.put("/", updateFoodCategory);
foodCategoryRouter.delete("/", deleteFoodCategory);
