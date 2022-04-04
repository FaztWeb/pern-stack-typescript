import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import { generateAccessToken, generateRefreshToken } from "../libs/jwt";

interface UserSignup {
  email: string;
  password: string;
}

export const signup = async (
  req: Request<unknown, unknown, UserSignup>,
  res: Response
) => {
  const { email, password } = req.body;

  const userFound = await User.findOneBy({ email: email.toLowerCase() });
  if (userFound)
    return res.status(409).json({ message: "User already exists" });

  const user = new User();
  user.email = email;
  user.password = password;

  await user.save();

  const token = await generateAccessToken(user);
  const refreshToken = await generateRefreshToken(user);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });
  return res.json({
    token,
  });
};

export const signin = async (req: Request, res: Response) => {
  res.send("Signup");
};
