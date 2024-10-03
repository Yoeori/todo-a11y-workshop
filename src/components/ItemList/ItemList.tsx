import { TodoItem } from "../../types";
import { Item } from "../Item/Item";
import styles from "./ItemList.module.css"

interface ItemListProps {
  items: TodoItem[];
  onCheck: (id: string, checked: boolean) => void;
  onDelete: (id: string) => void;
}

export default function ItemList({ items, onCheck, onDelete }: ItemListProps) {
  return <div className={styles.container}>
    {items.map((item) => (
      <Item key={item.id} item={item} onCheck={(checked) => onCheck(item.id, checked)} onDelete={() => onDelete(item.id)} />
    ))}
  </div>
}