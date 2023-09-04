import { Router } from "express";
import { userRoutes } from "./user.routes";
import { taskRoutes } from "./task.routes";
import { categoryRoutes } from "./category.routes";
import { executionRoutes } from "./execution.routes";

const routes = Router();

routes.use("/tasks", taskRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/executions", executionRoutes);


routes.use("/users", userRoutes);

export { routes };
