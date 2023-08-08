import { CreateTaskDTO } from "../../dtos/CreateTaskDTO";
import { prisma } from "../../../../prisma/client";
import { task, category } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";

export class CreateTaskUseCase {
  async execute({ image, name, description, value, category_task, created_by }: CreateTaskDTO): Promise<task> {
    const verifyCategory = await prisma.category.findFirst({
      where: {
        id: category_task
      }
    });

    if (!verifyCategory) {
      throw new AppError("Category not found!");
    }

    const verifyUser = await prisma.user.findFirst({
      where: {
        id: created_by
      }
    });

    if (!verifyUser) {
      throw new AppError("User not found!");
    }

    const task = await prisma.task.create({
      data: {
        image,
        name,
        description,
        value,
        category_task,
        created_by
      }
    });

    return task;
  }
}
