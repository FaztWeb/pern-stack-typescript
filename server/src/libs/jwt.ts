import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, VerifyErrors, VerifyOptions } from "jsonwebtoken";
import { SECRET_ACESSS_TOKEN, SECRET_REFRESH_TOKEN } from "../config";
import { User } from "../entities/user.entity";

export const generateAccessToken = (user: User) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { userId: user.id },
      SECRET_ACESSS_TOKEN,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) reject(err);

        resolve(token);
      }
    );
  });
};

export const generateRefreshToken = (user: User) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { userId: user.id },
      SECRET_REFRESH_TOKEN,
      { expiresIn: "15m" },
      (err, token) => {
        if (err) reject(err);

        resolve(token);
      }
    );
  });
};

export const verifyAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token)
    return res.status(401).json({ message: "Access token is missing" });

  jwt.verify(token, SECRET_ACESSS_TOKEN, (err, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = decoded.userId;
    next();
  });
};
