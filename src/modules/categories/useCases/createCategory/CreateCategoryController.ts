import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name, image } = req.body;

    const createCategoryUseCase = new CreateCategoryUseCase();

    const result = await createCategoryUseCase.execute({ name, image });

    return res.status(201).json(result);
  }
}
