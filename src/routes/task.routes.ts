import { Router } from "express";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/CreateTaskController";
import { ReadTasksController } from "../modules/tasks/useCases/readTasks/ReadTasksController";
import { ReadOneTaskController } from "../modules/tasks/useCases/readOneTask/ReadOneTaskController";

const createTaskController = new CreateTaskController();
const readTasksController = new ReadTasksController();
const readOneTaskController = new ReadOneTaskController();

const taskRoutes = Router();

taskRoutes.post("/", createTaskController.handle);
taskRoutes.get("/", readTasksController.handle);
taskRoutes.get("/:id", readOneTaskController.handle);

export { taskRoutes };
