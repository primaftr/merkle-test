import { Request } from "express";

// Hackfix for typescript to recognize user in Request type
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
