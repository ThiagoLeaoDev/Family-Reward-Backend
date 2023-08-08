import { Request, Response } from "express";
import { ReadAllTasksUseCase } from "./ReadAllTasksUseCase";

export class ReadAllTasksController {
  async handle(req: Request, res: Response) {
    const readAllTasksUseCase = new ReadAllTasksUseCase();

    const result = await readAllTasksUseCase.execute();

    return res.status(200).json(result);
  }
}
