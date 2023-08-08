import { Request, Response } from "express";
import { ReadTasksUseCase } from "./ReadTasksUseCase";

export class ReadTasksController {
  async handle(req: Request, res: Response) {
    const readTasksUseCase = new ReadTasksUseCase();

    const result = await readTasksUseCase.execute();

    return res.status(200).json(result);
  }
}
