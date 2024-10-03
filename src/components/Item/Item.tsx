import { TodoItem } from "../../types";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./Item.module.css";

interface ItemProps {
  item: TodoItem;
  onCheck: (checked: boolean) => void;
  onDelete: () => void;
}

export function Item({ item, onCheck, onDelete }: ItemProps) {
  return <div className={`${styles.item} ${item.done ? styles.checked : ""}`} onClick={() => onCheck(!item.done)}>
    <Checkbox checked={item.done} />
    <div className={styles.text}>{item.text}</div>
    <div className={styles.delete} onClick={(e) => {
      e.stopPropagation();
      onDelete();
    }}>+</div>
  </div>
}