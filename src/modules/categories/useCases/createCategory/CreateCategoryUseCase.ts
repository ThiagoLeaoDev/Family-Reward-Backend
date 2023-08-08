import { category } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateCategoryDTO } from "../../dtos/CreateCategoryDTO";

export class CreateCategoryUseCase {
  async execute({ name, image }: CreateCategoryDTO): Promise<category> {
    const category = await prisma.category.create({
      data: {
        name,
        image
      }
    });

    return category;
  }
}
