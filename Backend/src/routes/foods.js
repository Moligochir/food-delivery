import express from "express";

import { getFood } from "../resolvers/foods/get-foods.js";
import { createFood } from "../resolvers/foods/create-foods.js";
import { updateFood } from "../resolvers/foods/update-foods.js";
import { deleteFood } from "../resolvers/foods/delete-foods.js";
import { getFoodByCategoryId } from "../resolvers/foods/get-foodsByCategoryID.js";

export const router = express.Router();

router.get("/", getFood);
router.post("/", createFood);
router.put("/", updateFood);
router.delete("/", deleteFood);
router.get("/:categoryId", getFoodByCategoryId);
