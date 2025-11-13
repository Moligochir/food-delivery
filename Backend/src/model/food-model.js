import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const foodSchema = new Schema({
  id: { type: ObjectId },
  foodName: { type: String },
  price: { type: Number },
  image: { type: String },
  ingredients: { type: String },
  category: { type: Schema.ObjectId, ref: "food-category" },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});
export const foodModel = mongoose.model("food", foodSchema);
