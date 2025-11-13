import { foodModel } from "../../model/food-model.js";
import jwt from "jsonwebtoken";

export const createFood = async (req, res) => {
  const data = req.body;
  // const token = req.headers.authorization;

  try {
    // const tokenData = await jwt.verify(token, "secret-key");
    // console.log(tokenData);

    // if (tokenData.role !== "ADMIN") {
    //   return res.status(400).send("Permission not sufficient");
    // }
    const newFood = await foodModel.create({
      foodName: data.foodName,
      price: data.price,
      image: data.image,
      ingredients: data.ingredients,
      category: data.category,
    });
    return res.status(200).json(newFood);
  } catch (error) {
    res.status(401).send("Unauthorization");
  }
};
