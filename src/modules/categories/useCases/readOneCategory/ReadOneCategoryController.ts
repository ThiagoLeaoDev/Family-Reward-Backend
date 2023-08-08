import { Request, Response } from "express";
import { ReadOneCategoryUseCase } from "./ReadOneCategoryUseCase";

export class ReadOneCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const readOneCategoryUseCase = new ReadOneCategoryUseCase();

    const result = await readOneCategoryUseCase.execute(id);

    return res.status(200).json(result);
  }
}
