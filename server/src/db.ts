import { DataSource } from "typeorm";
import { Task } from "./entities/task.entity";
import { User } from "./entities/user.entity";

import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  entities: [Task, User],
  logging: false
});
