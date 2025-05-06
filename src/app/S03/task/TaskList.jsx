"use client";

import { useState } from "react";
import "./TaskList.css";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Tarea 1", completed: false },
    { id: 2, text: "Tarea 2", completed: false },
    { id: 3, text: "Tarea 3", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ol>
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => toggleTask(task.id)}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          className="task"
        >
          {task.text}
        </li>
      ))}
    </ol>
  );
}
