import { Request, Response, NextFunction } from "express";
import { CustomError } from "./Errors/custom-error";

export class ErrorHandler {
  public static errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): any {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    res.status(400).send({
      errors: [{ message: "Something went wrong" }],
    });
  }
}
