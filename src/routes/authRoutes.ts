import express, { Request, Response } from "express";
import { createUserTable, findUser } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

createUserTable();

const router = express.Router();

const validateLogin = (req: Request, res: Response, next: () => void) => {
  const { username, password } = req.body;

  // validate if required fields are present
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required fields" });
  }

  next();
};

// Authentication
router.post("/login", validateLogin, (req: Request, res: Response) => {
  const { username, password } = req.body;

  findUser(username, (err, user) => {
    if (err) throw err;

    if (user) {
      bcrypt.compare(password, user.password, (compareErr, result) => {
        if (compareErr) throw compareErr;

        console.log(
          "🚀 ~ file: authRoutes.ts:36 ~ bcrypt.compare ~ process.env.JWT_SECRET:",
          process.env.JWT_SECRET
        );
        if (result) {
          const token = jwt.sign({ username }, process.env.JWT_SECRET);
          res.json({ token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});
export = router;
