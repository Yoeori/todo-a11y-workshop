// import { useState } from 'react'
import { TodoItem } from './types'
import ItemList from './components/ItemList/ItemList'
import styles from "./App.module.css"
import AddItemForm from './components/AddItemForm/AddItemForm'
import { useState } from 'react'

const initialItems: TodoItem[] = [
  {
    id: self.crypto.randomUUID(),
    text: 'Find list of all different purple colors',
    done: true
  },
  {
    id: self.crypto.randomUUID(),
    text: 'Make presentation for work',
    done: false
  },
  {
    id: self.crypto.randomUUID(),
    text: 'Implement a11y',
    done: false
  }
];

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <div style={{ width: "100%", height: "80px", backgroundImage: "url('./logo.png')", backgroundPosition: "center", marginBottom: "20px"}} />
      <div className={styles.container}>
        <ItemList
          items={items} onCheck={((id, checked) => {
            setItems((cur) => cur.map((item) => item.id === id ? { ...item, done: checked } : item))
          })}
          onDelete={(id) => setItems((cur) => cur.filter((item) => item.id !== id))}
        />
      </div>
      <AddItemForm onAdd={(text) => setItems((cur) => [...cur, {
        id: self.crypto.randomUUID(),
        text,
        done: false
      }])} />
    </>
  )
}

export default App
