import { prisma } from "../../../../prisma/client";
import { category } from "@prisma/client";

export class ReadOneCategoryUseCase {
  async execute(id: string): Promise<category> {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  }
}
