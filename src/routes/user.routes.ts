import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { LoginUserController } from "../modules/users/useCases/loginUser/LoginUserController";
import { ReadUserController } from "../modules/users/useCases/readUser/ReadUserController";
import { authMidleware } from "../midlewares/authMidleware";

const routes = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const readUserController = new ReadUserController();

const userRoutes = Router();

userRoutes.post("/login", loginUserController.handle);
userRoutes.post("/", createUserController.handle);

userRoutes.get("/", authMidleware, readUserController.handle);

export { userRoutes };
