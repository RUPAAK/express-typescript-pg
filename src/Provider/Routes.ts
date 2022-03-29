import { Application } from "express";
import Locals from "./Locals";
import Log from "../middlewares/log";
import { indexAppRouter } from "../routes/app";

class Routes {
  public mountWeb(_express: Application): Application {
    const appPrefix = Locals.config().appPrefix;

    Log.info("Routes :: Mounting App Routes...");

    return _express.use(`/${appPrefix}`, indexAppRouter);
  }

  // public mountApi(_express: Application): Application {
  // 	const apiPrefix = Locals.config().apiPrefix;
  // 	Log.info('Routes :: Mounting API Routes...');

  // 	return _express.use(`/${apiPrefix}`, apiRouter);
  // }
}

export default new Routes();
