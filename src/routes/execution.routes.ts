import { Router } from "express";
import { CreateExecutionController } from "../modules/execution/useCases/createExecution/CreateExecutionController";
import { ReadExecutionsByStatusController } from "../modules/execution/useCases/readExecutionsByStatus/ReadExecutionsByStatusController";

const createExecutionController = new CreateExecutionController();
const readExecutionsByStatusController = new ReadExecutionsByStatusController();

const executionRoutes = Router();

executionRoutes.post("/", createExecutionController.handle);
executionRoutes.get("/:status/:id", readExecutionsByStatusController.handle);

export { executionRoutes };
