import { Request, Response } from "express";
import { ReadCategoriesUseCase } from "./ReadCategoriesUseCase";

export class ReadCategoriesController {
  async handle(req: Request, res: Response) {
    const readCategoriesUseCase = new ReadCategoriesUseCase();

    const result = await readCategoriesUseCase.execute();

    return res.status(200).json(result);
  }
}
