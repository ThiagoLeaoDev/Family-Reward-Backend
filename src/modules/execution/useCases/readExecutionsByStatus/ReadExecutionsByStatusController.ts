import { Request, Response } from "express";
import { ReadExecutionsByStatusUseCase } from "./ReadExecutionsByStatusUseCase";

export class ReadExecutionsByStatusController {
  async handle(req: Request, res: Response) {
    const { status, id } = req.params;

    const readApprovedExecutions = new ReadExecutionsByStatusUseCase();

    const executions = await readApprovedExecutions.execute({ status, id });

    return res.status(200).json(executions);
  }
}
