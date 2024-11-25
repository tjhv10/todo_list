import React, { useState, useEffect } from "react";
import styles from "./Tasks.module.css";
import Item, { ItemProps } from "../Item/item.tsx";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<ItemProps[]>([]);
  const [query, setQuery] = useState("");
  const [itemsLeft, setItemsLeft] = useState(0);

  const addTask = (task: ItemProps) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskName: string) => {
    setTasks(tasks.filter((task) => task.taskName !== taskName));
  };

  const markTaskAsDone = (taskName: String) => {
    setTasks(
      tasks.map((task) =>
        taskName === task.taskName ? { ...task, isDone: true } : task
      )
    );
  };

  const renderTasks = () => {
    return tasks.map((task) => (
      <Item
        taskName={task.taskName}
        isDone={task.isDone}
        removeTask={removeTask}
        markTaskAsDone={markTaskAsDone}
      />
    ));
  };

  useEffect(() => {
    setItemsLeft(tasks.filter((task) => !task.isDone).length);
  }, [tasks]);

  useEffect(() => {
    window.addEventListener("keydown", _handleKeyDown);
    return () => {
      window.removeEventListener("keydown", _handleKeyDown);
    };
  });

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let wrongInput = false;
      // console.log(e)
      if (query.trim() === "") {
        alert("Please enter a task!");
        wrongInput = true;
      }
      tasks.map((task) => {
        if (task.taskName === query) {
          alert("Please enter a task that doesnt already exist!");
          wrongInput = true;
          return;
        }
      });
      if (!wrongInput) {
        addTask({
          taskName: query,
          isDone: false,
          removeTask,
          markTaskAsDone,
        });
      }
      setQuery("");
    }
  };

  return (
    <>
      <h2 className={styles.pendingTasks}>Pending tasks ({itemsLeft})</h2>
      <div className={styles.content}>{renderTasks()}</div>
      <div>
        <input
          id="taskInput"
          type="text"
          className={styles.taskInput}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder={"Add a new task"}
        />
      </div>
    </>
  );
};

export default Tasks;
