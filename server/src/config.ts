import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;

export const DB_USER = process.env.DB_USER || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "mysecretpassword";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = Number(process.env.DB_PORT) || 5432;
export const DB_DATABASE = process.env.DB_DATABASE || "tasksdb";

export const SECRET_ACESSS_TOKEN = process.env.SECRET_ACCESS_TOKEN || "mysecret";
export const SECRET_REFRESH_TOKEN = process.env.SECRET_REFRESH_TOKEN || "mysecret";