import * as path from "path";
import * as dotenv from "dotenv";
import Log from "../middlewares/log";
import Express from "./Express";
import { Database } from "./Database";

export class App {
  /**
   *   Loads your dotenv file
   */
  public loadConfiguration(): void {
    Log.info("Configuration :: Booting @ Master...");

    dotenv.config({ path: path.join(__dirname, "../../.env") });
  }

  /**
   * Loads instance of express server
   */
  public loadServer(): void {
    Log.info("Server :: Booting @ Master...");

    Express.init();
  }

  /**
   * Tries to oonnect to database
   */
  public loadDatabase(): void {
    Log.info("Database :: Booting @ Master...");

    Database.init();
  }
}

export default new App();
