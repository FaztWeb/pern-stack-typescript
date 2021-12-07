import { Handler } from "express";
import { pool } from "../db";

export const getTasks: Handler = async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    return res.json(allTasks.rows);
  } catch (error: any) {
    return res.status(400).send(error.message);
  }
};

export const createTask: Handler = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1,$2) RETURNING *",
      [title, description]
    );
    res.json(newTask.rows[0]);
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getTask: Handler = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    res.json(task.rows[0]);
  } catch (error: any) {
    console.error(error.message);
  }
};

export const updateTask: Handler = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updatedTask = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );
  console.log(updatedTask);
  res.json(updatedTask.rows[0]);
};

export const deleteTask: Handler = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM task WHERE id = $1", [id]);
  res.sendStatus(204);
};

export const countTask: Handler = async (req, res) => {
  const count = await pool.query("SELECT COUNT(*) FROM task");
  res.json(count.rows[0].count);
};
