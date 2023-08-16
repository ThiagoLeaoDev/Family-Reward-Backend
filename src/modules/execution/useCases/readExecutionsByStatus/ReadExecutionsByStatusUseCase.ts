import { execution } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class ReadExecutionsByStatusUseCase {
  async execute({ status, id }: { id: string, status: string }): Promise<execution[]> {
    const executions = await prisma.execution.findMany({
      where: {
        executed_by: id,
        status: status,
      },
      include: {
        task: true,
      },
    });

    if (!executions) {
      throw new AppError("No executions found");
    }

    return executions;
  }
}
