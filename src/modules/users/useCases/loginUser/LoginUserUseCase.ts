import { prisma } from "../../../../prisma/client";
import { compare } from "bcrypt";
import { AppError } from "../../../../errors/AppError";
import { CreateUserDTO, UserReturnDTO } from "../../dtos/CreateUserDTO";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type loginData = Pick<CreateUserDTO, "email" | "password">

interface AuthUser {
  user: UserReturnDTO
  token: string
}

export class LoginUserUseCase {
  async execute({ email, password }: loginData): Promise<AuthUser> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '8h' });

    const { password: _, ...userLogin } = user;

    return {
      user: userLogin,
      token
    }
  }
}
