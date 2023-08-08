import { prisma } from "../../../../prisma/client";
import { task } from "@prisma/client";

export class ReadTasksUseCase {
  async execute(): Promise<task[]> {
    const tasks = await prisma.task.findMany();

    return tasks;
  }
}
