/**
 * Enable Cors
 */

import cors from "cors";
import { Application } from "express";
import Locals from "../Provider/Locals";

import Log from "./log";

class CORS {
  public mount(_express: Application): Application {
    Log.info("Booting the 'CORS' middleware...");

    const options = {
      origin: Locals.config().url,
      optionsSuccessStatus: 200, // Some legacy browsers choke on 204
    };

    _express.use(cors(options));

    return _express;
  }
}

export default new CORS();
