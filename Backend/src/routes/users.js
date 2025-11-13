import express from "express";

import { getUser } from "../resolvers/users/get-users.js";
import { createUser } from "../resolvers/users/create-users.js";
import { updateUser } from "../resolvers/users/update-users.js";
import { deleteUser } from "../resolvers/users/delete-users.js";
import { login } from "../resolvers/users/login-users.js";

export const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.put("/", updateUser);
userRouter.delete("/", deleteUser);

userRouter.post("/login", login);
