import { Request, Response } from "express";

export class ReadUserController {
  async handle(req: Request, res: Response) {
    console.log(req.user);
    return res.status(200).json(req.user);
  }
}
