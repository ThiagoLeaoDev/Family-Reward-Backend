import { Router } from "express";
import { CreateExecutionController } from "../modules/execution/useCases/createExecution/CreateExecutionController";

const createExecutionController = new CreateExecutionController();

const executionRoutes = Router();

executionRoutes.post("/", createExecutionController.handle);

export { executionRoutes };
