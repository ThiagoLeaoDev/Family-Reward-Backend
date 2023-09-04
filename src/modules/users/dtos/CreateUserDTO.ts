import { Decimal } from "@prisma/client/runtime/library";

export interface CreateUserDTO {
  name: string;
  image: string;
  role: string;
  email: string;
  password: string;
  balance: number;
}

export interface UserReturnDTO {
  name: string;
  image: string;
  role: string;
  email: string;
  balance: Decimal;
}
