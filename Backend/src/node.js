import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { router } from "./routes/foods.js";
import { foodCategoryRouter } from "./routes/food-category.js";
import { foodOrderRouter } from "./routes/food-order.js";
import cors from "cors";
const app = express();
const PORT = 8000;

app.use(cors());

app.use(express.json());
app.use("/users", userRouter);
app.use("/foods", router);
app.use("/food-category", foodCategoryRouter);
app.use("/food-order", foodOrderRouter);

mongoose
  .connect(
    "mongodb+srv://dbuser:pass1234@food.ut7gmqz.mongodb.net/?retryWrites=true&w=majority&appName=Food"
  )
  .then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
