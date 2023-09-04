import { UserReturnDTO } from "../modules/users/dtos/CreateUserDTO";

declare global {
  namespace Express {
    export interface Request {
      user?: UserReturnDTO;
    }
  }
}
