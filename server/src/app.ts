import express from "express";
import morgan from "morgan";
import cors from "cors";

import config from "./config";
import tasksRoutes from "./routes/tasks.routes";

const app = express();

app.set("port", config.port);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(tasksRoutes);

export default app;
