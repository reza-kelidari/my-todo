import { useEffect, useState } from "react";
import Styles from "./styles.module.scss";
import Done from "../../Assets/Done";
import { defaultNewTodo, key, Todo } from "../Home";
import { Link } from "react-router-dom";

export default function Add() {
  const [tasks, setTasks] = useState<Array<Todo>>([]);
  const [newTodo, setNewTodo] = useState<Todo>(defaultNewTodo);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    setTasks(data);
  }, []);

  return (
    <div className={Styles.addTodo}>
      <div className={Styles.titleBar}>
        <h3 className={Styles.title}>کار جدید</h3>
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
      <Link
        to={newTodo.name !== "" && newTodo.desc !== "" ? "/" : ""}
        className={[
          Styles.save,
          newTodo.name === "" || newTodo.desc === "" ? Styles.disabled : "",
        ].join(" ")}
        onClick={() => {
          if (newTodo.name !== "" && newTodo.desc !== "")
            localStorage.setItem(key, JSON.stringify([...tasks, newTodo]));
          
          console.log(localStorage);
        }}
      >
        <button>ذخیره</button>
        <Done />
      </Link>
    </div>
  );
}
