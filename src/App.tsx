import { ChangeEvent, useState } from "react";
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

  const [currentItems, setCurrentItems] = useState(items);

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value === "all") {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter((i) => i.category === value));
    }
  }

  function onDeleteItem(id: string) {
    const newItems = items.filter((i) => i.id !== id);
    const newCurrentItems = currentItems.filter((i) => i.id !== id);
    setItems(newItems);
    setCurrentItems(newCurrentItems);
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
    setCurrentItems(newItems);
  }

  return (
    <>
      <Form onAddItem={onAddItem}></Form>
      <ItemsList
        currentItems={currentItems as Items[]}
        onSelectChange={onSelectChange}
        onDeleteItems={onDeleteItem}
      ></ItemsList>
    </>
  );
}

export default App;
