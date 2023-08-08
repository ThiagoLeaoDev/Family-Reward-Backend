import { prisma } from "../../../../prisma/client";
import { category } from "@prisma/client";

export class ReadCategoriesUseCase {
  async execute(): Promise<category[]> {
    const categories = await prisma.category.findMany();

    return categories;
  }
}
