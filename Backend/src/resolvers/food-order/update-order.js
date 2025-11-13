import { foodOrderModel } from "../../model/food-order-model.js";

export const updateFoodOrder = async (req, res) => {
  const data = req.body;
  try {
    const foodOrder = await foodOrderModel.findByIdAndUpdate(req.body.id, {
      nuser: data.user,
      totalPrice: data.totalPrice,
      foodOrderItems: data.foodOrderItems,
      status: data.status,
    });
    res.status(200).json(foodOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};
