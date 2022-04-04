import { Handler } from "express";
import { Task } from "../entities/task.entity";
import { User } from "../entities/user.entity";

export const getTasks: Handler = async (req, res) => {
  try {
    const tasks = await Task.find({
      where: {
        userId: req.userId,
      },
    });
    return res.json(tasks);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createTask: Handler = async (req, res) => {
  try {
    const { title, description } = req.body;

    const user = await User.findOneBy({ id: req.userId });
    if (!user) return res.status(404).json({ message: "User not found" });

    const newTask = new Task();
    newTask.title = title;
    newTask.description = description;
    newTask.author = user;

    await newTask.save();
    res.json(newTask);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

// export const getTask: Handler = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
//     res.json(task.rows[0]);
//   } catch (error) {
//     if (error instanceof TypeError) {
//       return res.status(500).json({ message: error.message });
//     }
//   }
// };

// export const updateTask: Handler = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description } = req.body;
//     const updatedTask = await pool.query(
//       "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
//       [title, description, id]
//     );
//     res.json(updatedTask.rows[0]);
//   } catch (error) {
//     if (error instanceof TypeError) {
//       return res.status(500).json({ message: error.message });
//     }
//   }
// };

// export const deleteTask: Handler = async (req, res) => {
//   const { id } = req.params;
//   await pool.query("DELETE FROM task WHERE id = $1", [id]);
//   res.sendStatus(204);
// };

// export const countTask: Handler = async (req, res) => {
//   const count = await pool.query("SELECT COUNT(*) FROM task");
//   res.json(count.rows[0].count);
// };
