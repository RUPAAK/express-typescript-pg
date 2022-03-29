import express, { Request, Response } from "express";
import "express-async-errors";
import { NotFoundError } from "../exception/Errors/not-found-error";
import Kernel from "./Kernel";
import Locals from "./Locals";
import Routes from "./Routes";
import { ErrorHandler } from "../exception/ErrorHandler";

class Express {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.mountMiddlewares();
    this.mountDotEnv();
    this.mountRoutes();
  }

  /**
   * Mounts config varibale to application
   */
  private mountDotEnv(): void {
    this.app = Locals.init(this.app);
  }

  /**
   * Mounts all the defined middlewares
   */
  private mountMiddlewares(): void {
    this.app = Kernel.init(this.app);
  }

  /**
   * Mounts all the defined routes
   */
  private mountRoutes(): void {
    this.app = Routes.mountWeb(this.app);
  }

  /**
   * Express app error handling and launching http server
   */
  public init(): any {
    this.app.set("PORT", process.env.PORT || 9261);

    /**
     * App Error Handler
     */
    this.app.all("*", (req: Request, res: Response) => {
      throw new NotFoundError();
    });

    this.app.use(ErrorHandler.errorHandler);

    /**
     * Server inital
     */
    this.app
      .listen(this.app.get("PORT"), () => {
        return console.log(`SERVER UP AND RUNNING : ${this.app.get("PORT")}`);
      })
      .on("error", (e) => {
        return console.log(e);
      });
  }
}

export default new Express();
