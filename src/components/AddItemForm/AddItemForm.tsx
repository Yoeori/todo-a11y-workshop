import { useRef } from "react";
import styles from "./AddItemForm.module.css"

interface AddItemFormProps {
  onAdd: (text: string) => void;
}

export default function AddItemForm({ onAdd }: AddItemFormProps) {
  const ref = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    if (ref.current && ref.current.value.trim() !== "") {
      onAdd(ref.current.value);
      ref.current.value = "";
    }
  }

  return (
    <div className={styles.form}>
      <input ref={ref} className={styles.input} type="text" onKeyDown={(e) => {
        if(e.key === "Enter") handleAdd();
      }} />
      <div className={styles["add-button"]} onClick={handleAdd}>+</div>
    </div>
  );
}