import { useState } from "react";
import "./App.css";
import ItemsList from "./components/ItemsList/ItemsList";

interface Items {
  id: string;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [items, setItems] = useState([
    { id: "1", description: "Milk", amount: 5, category: "Groceries" },
    { id: "2", description: "Eggs", amount: 10, category: "Groceries" },
    { id: "3", description: "Milk", amount: 5, category: "Groceries" },
  ]);

  function onDeleteItem(id: string) {
    console.log("clicked");

    const newItems = items.filter((i) => i.id !== id);
    setItems(newItems);
  }

  return (
    <>
      <ItemsList
        items={items as Items[]}
        onDeleteItems={onDeleteItem}
      ></ItemsList>
    </>
  );
}

export default App;
