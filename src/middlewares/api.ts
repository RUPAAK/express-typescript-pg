import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { NotAuthorizedError } from "../exception/Errors/not-authorized-error";

interface UserPayload {
  id: string;
  email: string;
  iat: string;
}

declare global {
  namespace Express {
    interface Request {
      // currentUser?: UserPayload;
      // userData?: UserDoc;
      // userRole?: RoleDoc;
      // limitedField?: [];
    }
  }
}

export class Api {
  public static currentUser(req: Request, res: Response, next: NextFunction) {
    // if (!req.headers.authorization) {
    //   throw new NotAuthorizedError();
    // }

    // const jwtToken = req.headers.authorization.split(" ")[1];

    // try {
    //   //   const payload = jwt.verify(
    //   //     jwtToken,
    //   //     process.env.JWT_KEY!
    //   //   ) as unknown as UserPayload;
    //   // const payload = (await promisify(jwt.verify)(
    //   //   jwtToken,
    //   //   process.env.JWT_KEY
    //   // )) as UserPayload;
    //   // if(payload.isTemporry)
    //   // req.currentUser = payload;
    // } catch (err) {
    //   throw new NotAuthorizedError();
    // }

    next();
  }
}
