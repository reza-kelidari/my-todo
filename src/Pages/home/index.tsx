import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import Styles from "./styles.module.scss";

export interface Todo {
  time: number;
  name: string;
  desc: string;
}

export default function Home() {
  const key: string = "my-todo";

  const [tasks, setTasks] = useState<Array<Todo>>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    setTasks(data);
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(key) || "[]") !== tasks) {
      localStorage.setItem(key, JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>کارهای من</h1>

      <div className={Styles.list}>
        {tasks.map((item: Todo, index: number) => (
          <TodoItem
            key={index}
            name={item.name}
            time={item.time}
            desc={item.desc}
            remove={setTasks}
          />
        ))}
        <button
          onClick={() =>
            setTasks((prevTasks: Array<Todo>) => [
              ...prevTasks,
              {
                name: "کار من",
                time: Date.now(),
                desc: "1234",
              },
            ])
          }
        >
          Add
        </button>
      </div>
    </div>
  );
}
