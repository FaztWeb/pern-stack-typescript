import { Router } from "express";
import {
  createTask,
  getTasks,
  // getTask,
  // countTask,
  // deleteTask,
  // updateTask,
} from "../controllers/tasks.controller";
import { verifyAccessToken } from "../libs/jwt";

const router = Router();

router.post("/tasks", verifyAccessToken, createTask);

router.get("/tasks", verifyAccessToken, getTasks);

// router.get("/tasks/count", countTask);

// router.get("/tasks/:id", getTask);

// router.put("/tasks/:id", updateTask);

// router.delete("/tasks/:id", deleteTask);

export default router;
