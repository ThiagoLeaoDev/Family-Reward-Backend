import { Request, Response } from "express";
import { ReadOneTasksUseCase } from "./ReadOneTaskUseCase";

export class ReadOneTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const readOneTasksUseCase = new ReadOneTasksUseCase();

    const result = await readOneTasksUseCase.execute(id);

    return res.status(200).json(result);
  }
}
