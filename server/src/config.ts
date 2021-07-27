import { config as dotenv } from "dotenv";
dotenv();

export default {
  port: process.env.PORT || 3000,
  db: {
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_DATABASE || "tasksdb",
  },
};
