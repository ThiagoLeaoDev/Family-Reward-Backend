import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { image, name, description, value, category_task, created_by } = req.body;

    const createTaskUseCase = new CreateTaskUseCase();

    const result = await createTaskUseCase.execute({ image, name, description, value, category_task, created_by });

    return res.status(201).json(result);
  }
}
