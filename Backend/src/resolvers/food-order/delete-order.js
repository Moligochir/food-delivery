import { foodOrderModel } from "../../model/food-order-model.js";

export const deleteFoodOrder = async (req, res) => {
  const data = req.body;
  try {
    const FoodOrder = await foodOrderModel.findByIdAndDelete(req.body.id, {});
    res.status(200).json(FoodOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};
