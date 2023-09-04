import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { LoginUserController } from "../modules/users/useCases/loginUser/LoginUserController";
import { ReadUserController } from "../modules/users/useCases/readUser/ReadUserController";

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const readUserController = new ReadUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", loginUserController.handle);
userRoutes.get("/", readUserController.handle);

export { userRoutes };
