import { useState } from "react";
import { FieldValues } from "react-hook-form";
import Form from "./components/Form/Form";

import ItemsList from "./components/ItemsList/ItemsList";
import Filter from "./components/Filter/Filter";
import "./App.css";

interface Items {
  id: string;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [items, setItems] = useState([
    { id: "1", description: "Milk", amount: 5, category: "Groceries" },
    { id: "2", description: "Eggs", amount: 10, category: "Groceries" },
    { id: "3", description: "Milk", amount: 5, category: "Groceries" },
  ]);

  function onSelectCategory(category: string) {
    setSelectedCategory(category);
  }

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

  const visibleItems = selectedCategory
    ? items.filter((i) => i.category === selectedCategory)
    : items;

  return (
    <>
      <Form onAddItem={onAddItem}></Form>
      <Filter
        onSelectCategory={(category) => onSelectCategory(category)}
      ></Filter>
      <ItemsList
        items={visibleItems as Items[]}
        onDeleteItems={onDeleteItem}
      ></ItemsList>
    </>
  );
}

export default App;
