import { Request, Response } from "express";
import { CreateExecutionUseCase } from "./CreateExecutionUseCase";

export class CreateExecutionController {
  async handle(req: Request, res: Response) {
    const { before_image, after_image, status, executed_by, task_executed } = req.body;

    const createExecutionUseCase = new CreateExecutionUseCase();

    const result = await createExecutionUseCase.execute({ before_image, after_image, status, executed_by, task_executed });

    return res.status(201).json(result);
  }
}
