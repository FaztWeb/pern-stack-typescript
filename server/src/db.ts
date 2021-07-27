import { Pool } from "pg";
import config from "./config";

const pool = new Pool({
  user: config.db.user,
  password: config.db.password,
  host: config.db.host,
  database: config.db.database,
  port: config.db.port,
});

export { pool };
