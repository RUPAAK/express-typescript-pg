import { DataSource } from "typeorm";
import { PostEntity } from "../entities/post";

jest.setTimeout(1000000);

let connection = new DataSource({
  type: "postgres",
  database: ":memory",
  dropSchema: true,
  entities: [PostEntity],
  synchronize: true,
  logging: false,
});

beforeEach(async () => {
  return connection.initialize();
});

afterEach(() => {
  return connection.destroy();
});


