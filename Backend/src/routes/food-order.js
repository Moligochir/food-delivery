import express from "express";

import { createFoodOrder } from "../resolvers/food-order/create-order.js";
import { deleteFoodOrder } from "../resolvers/food-order/delete-order.js";
import { getFoodOrder } from "../resolvers/food-order/get-order.js";
import { updateFoodOrder } from "../resolvers/food-order/update-order.js";

export const foodOrderRouter = express.Router();

foodOrderRouter.get("/", getFoodOrder);
foodOrderRouter.post("/", createFoodOrder);
foodOrderRouter.put("/", updateFoodOrder);
foodOrderRouter.delete("/", deleteFoodOrder);
