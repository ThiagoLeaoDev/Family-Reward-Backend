import { user } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase {
  async execute({ name, image, role, email, password, balance }: CreateUserDTO): Promise<user> {
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: email
      }
    });

    if (userAlreadyExists) {
      throw new AppError("User Already exist!")
    }

    const user = await prisma.user.create({
      data: {
        name,
        image,
        role,
        email,
        password,
        balance
      }
    });

    return user;
  }
}
