import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ItemsList from "./components/ItemsList/ItemsList";
import { FieldValues } from "react-hook-form";

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
    const newItems = items.filter((i) => i.id !== id);
    setItems(newItems);
  }

  function onAddItem(d: FieldValues) {
    const newId = Math.random().toString();
    const newItems = [
      ...items,
      {
        id: newId,
        description: d.description,
        amount: d.amount,
        category: d.category,
      },
    ];
    setItems(newItems);
  }

  return (
    <>
      <Form onAddItem={onAddItem}></Form>
      <ItemsList
        items={items as Items[]}
        onDeleteItems={onDeleteItem}
      ></ItemsList>
    </>
  );
}

export default App;
