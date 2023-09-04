import { Router } from "express";
import { CreateCategoryController } from "../modules/categories/useCases/createCategory/CreateCategoryController";
import { ReadCategoriesController } from "../modules/categories/useCases/readCategories/ReadCategoriesController";
import { ReadAllTasksController } from "../modules/categories/useCases/readAllTasks/ReadAllTasksController";
import { ReadOneCategoryController } from "../modules/categories/useCases/readOneCategory/ReadOneCategoryController";

const createCategoryController = new CreateCategoryController();
const readCategoriesController = new ReadCategoriesController();
const readAllTasksController = new ReadAllTasksController();
const readOneCategoryController = new ReadOneCategoryController();

const categoryRoutes = Router();

categoryRoutes.post("/", createCategoryController.handle);
categoryRoutes.get("/", readCategoriesController.handle);
categoryRoutes.get("/tasks", readAllTasksController.handle);
categoryRoutes.get("/:id", readOneCategoryController.handle);

export { categoryRoutes };
