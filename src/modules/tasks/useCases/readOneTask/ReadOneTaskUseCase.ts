import { prisma } from "../../../../prisma/client";
import { task } from "@prisma/client";

export class ReadOneTasksUseCase {
  async execute(id: string): Promise<task> {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new Error("Task not found");
    }

    return task;
  }
}
