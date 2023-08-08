import { category, task } from "@prisma/client";

export interface ReadAllTasksDTO {
  category_id: string;
  name: string;
  tasks: task[];
}
