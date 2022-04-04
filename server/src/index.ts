import "reflect-metadata";
import app from "./app";
import { PORT } from "./config";
import { AppDataSource } from "./db";

async function main() {
  await AppDataSource.initialize();
  app.listen(PORT);
  console.log(`Server is running on port ${PORT}`);
}

main();
