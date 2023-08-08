import { prisma } from "../../../../prisma/client";
import { category, task } from "@prisma/client";
import { ReadAllTasksDTO } from "../../dtos/ReadAllTasksDTO";

export class ReadAllTasksUseCase {
  async execute(): Promise<ReadAllTasksDTO[]> {
    const tasks = await prisma.task.findMany();
    const categories = await prisma.category.findMany();

    const categories_tasks = categories.map((category: category) => {
      const tasks_filtered = tasks.filter((task: task) => {
        return task.category_task === category.id;
      });

      return {
        category_id: category.id,
        name: category.name,
        tasks: tasks_filtered,
      };
    });

    return categories_tasks;
  }
}
