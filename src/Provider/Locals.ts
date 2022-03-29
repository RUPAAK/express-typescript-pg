/**
 * Define App Locals & Configs
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Application } from "express";
import * as path from "path";
import * as dotenv from "dotenv";

class Locals {
  /**
   * Makes env configs available for your app
   * throughout the app's runtime
   */
  public static config(): any {
    dotenv.config({ path: path.join(__dirname, "../../.env") });
    const url = process.env.APP_URL || `http://localhost:3000`;
    const isCORSEnabled = process.env.CORS_ENABLED || true;
    const webPrefix = process.env.WEB_API_PREFIX || "web";
    const appPrefix = process.env.APP_API_PREFIX || "app";

    return {
      url,
      isCORSEnabled,
      webPrefix,
      appPrefix,
    };
  }

  /**
   * Injects your config to the app's locals
   */
  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
