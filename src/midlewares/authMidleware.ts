import { Request, Response, NextFunction } from "express";
import { prisma } from "../../src/prisma/client";
import jwt from "jsonwebtoken";

type JwtPayload = {
  id: string
}

export const authMidleware = async (req: Request, res: Response, next: NextFunction) => {

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Token not found" });
  }
  const token = authorization.split(" ")[1];
  const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload;

  const user = await prisma.user.findFirst({
    where: {
      id
    }
  });

  if (!user) {
    throw new Error("User not found");
  }

  const { password: _, ...userReturn } = user;

  req.user = userReturn

  next();
}
