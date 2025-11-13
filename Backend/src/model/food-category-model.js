import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const foodCategorySchema = new Schema({
  id: { type: ObjectId },
  categoryName: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});
export const foodCategoryModel = mongoose.model(
  "food-category",
  foodCategorySchema
);
