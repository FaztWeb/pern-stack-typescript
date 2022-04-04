import express from "express";
import morgan from "morgan";
import cors from "cors";

import tasksRoutes from "./routes/tasks.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", tasksRoutes);
app.use("/api/auth", authRoutes);

export default app;
