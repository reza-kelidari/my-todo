import { ReactElement } from "react";
import Styles from "./styles.module.scss";
import Close from "../../../../Assets/Close";
import { Todo } from "../..";

export default function TodoItem({
  name,
  desc,
  remove,
  id,
}: Todo & {
  remove: any;
}): ReactElement {
  return (
    <div className={Styles.item}>
      <div className={Styles.titleBar}>
        <span>{name}</span>
        <div
          className={Styles.close}
          onClick={() =>
            remove((prevTasks: Array<Todo>) =>
              prevTasks.filter((item) => item.id !== id)
            )
          }
        >
          <Close />
        </div>
      </div>
      <div className={Styles.desc}>{desc}</div>
    </div>
  );
}
