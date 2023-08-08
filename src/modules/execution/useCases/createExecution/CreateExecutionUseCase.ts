import { execution } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateExecutionDTO } from "../../dtos/CreateExecutionDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateExecutionUseCase {
  async execute({ before_image, after_image, status, executed_by, task_executed }: CreateExecutionDTO): Promise<execution> {
    const verifyUser = await prisma.user.findFirst({
      where: {
        id: executed_by
      }
    });

    if (!verifyUser) {
      throw new AppError("User not found!")
    }

    const execution = await prisma.execution.create({
      data: {
        before_image,
        after_image,
        status,
        executed_by,
        task_executed
      }
    });

    return execution;
  }
}
