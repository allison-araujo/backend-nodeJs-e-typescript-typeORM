import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/api-error";

const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;

  return res.status(statusCode).json({ message: error.message });
};

export default errorMiddleware;
