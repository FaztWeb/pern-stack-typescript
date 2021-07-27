import { Router } from "express";
import {
  countTask,
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller";
const router = Router();

router.post("/tasks", createTask);

router.get("/tasks", getTasks);

router.get("/tasks/count", countTask);

router.get("/tasks/:id", getTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
