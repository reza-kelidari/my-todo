import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import Styles from "./styles.module.scss";
import Done from "../../Assets/Done";

export interface Todo {
  id: number;
  name: string;
  desc: string;
}

export default function Home() {
  const key: string = "my-todo";
  const [tasks, setTasks] = useState<Array<Todo>>([]);

  const defaultNewTodo: Todo = {
    id: Date.now(),
    name: "",
    desc: "",
  };
  const [newTodo, setNewTodo] = useState<Todo>(defaultNewTodo);

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
            desc={item.desc}
            remove={setTasks}
            id={item.id}
          />
        ))}
      </div>

      <div className={Styles.addTodo}>
        <div className={Styles.titleBar}>
          <h3 className={Styles.title}>کار جدید</h3>
          <div
            onClick={() => {
              if (newTodo.name !== "" && newTodo.desc !== "") {
                setTasks((prevTasks: Array<Todo>) => [...prevTasks, newTodo]);
                setNewTodo(defaultNewTodo);
              }
            }}
          >
            <Done />
          </div>
        </div>
        <div className={Styles.item}>
          <p className={Styles.desc}>چیکار میخوای کنی؟</p>
          <input
            className={Styles.input}
            value={newTodo.name}
            onChange={(event) =>
              setNewTodo((prevState: Todo) => ({
                ...prevState,
                name: event.target.value,
              }))
            }
          />
        </div>
        <div className={Styles.item}>
          <p className={Styles.desc}>یه توضیح هم براش بنویس</p>
          <input
            className={Styles.input}
            value={newTodo.desc}
            onChange={(event) =>
              setNewTodo((prevState: Todo) => ({
                ...prevState,
                desc: event.target.value,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}
