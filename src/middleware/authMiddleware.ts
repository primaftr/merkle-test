import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];

  //   Allow non-admin to access the api with limited info
  const allowUnauthenticatedRoutes = ["/notes"];
  if (allowUnauthenticatedRoutes.includes(req.path) && !token) {
    return next();
  }

  if (!token) return res.status(401).json({ message: "Access denied" });
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

export { verifyToken };
