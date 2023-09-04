import bcrypt from "bcrypt";

import { user } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO, UserReturnDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase {
  async execute({ name, image, role, email, password, balance }: CreateUserDTO): Promise<UserReturnDTO> {
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: email
      }
    });

    if (userAlreadyExists) {
      throw new AppError("User Already exist!")
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        image,
        role,
        email,
        password: hashPassword,
        balance
      }
    });

    const { password: _, ...user } = newUser

    return user;
  }
}
