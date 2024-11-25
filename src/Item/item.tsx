import React, { useState } from "react";
import styles from "./item.module.css";

export interface ItemProps {
  taskName: string;
  isDone: boolean;
  removeTask: (taskName: string) => void;
  markTaskAsDone: (taskName: string) => void;
}

const Item: React.FC<ItemProps> = (props) => {
  const [style, setStyle] = useState<string>(styles.item);
  return (
    <div className={style}>
      <div className={styles.taskName}>{props.taskName}</div>
      <button
        className={styles.deleteB}
        onClick={() => props.removeTask(props.taskName)}
      >
        x
      </button>
      <button
        className={styles.completeB}
        onClick={() => {
          setStyle(styles.markedItem);
          props.markTaskAsDone(props.taskName);
        }}
      >
        Complete
      </button>
    </div>
  );
};

export default Item;
