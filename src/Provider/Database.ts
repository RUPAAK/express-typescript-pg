import { PostEntity } from "../entities/post";
import { DataSource } from "typeorm";
import Log from "../middlewares/log";

export class Database {
  public static init(): any {
    const AppDataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "",
      password: "",
      database: "",
      synchronize: true,
      logging: false,
      entities: [PostEntity],
      //   entities: [Client, Banker, Transactions],
    });

    AppDataSource.initialize()
      .then(() => {
        Log.info("Connection to database established");
        console.log("CONNECTION TO DATABSE ESTABLISHED");
      })
      .catch((e) => {
        Log.info("Failed to connect to database");
        console.log(e);
        console.log("FAILED TO CONNECT DATABASE");
      });
  }
}
