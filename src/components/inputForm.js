import "./inputForm.css";
import { useState } from "react";
import List from "./list";
import Input from "./input";

const InputForm = ({ edit, update }) => {
  // const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const completeItem = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      console.log(item.isComplete);
      return item;
    });
    setItems(updatedItems);
  };

  const addItem = (todo) => {

    // const item = {
    //   id: 1 + Math.random(),
    //   value: newItem,
    // };
    // setItems((oldList) => {
    //   return [...oldList, item];
    // });
    const newTodo = [...items, todo];
    setItems(newTodo);
    console.log(items);
    // setNewItem("");
  };

  const editItem = (id, newText) => {
    console.log(id);
    setItems((prev) => prev.map((item) => (item.id === id ? newText : item)));
  };

  const deleteItem = (id) => {
    console.log(id);
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="input-form">
      <h1>To-do List</h1>
      <Input onSubmit={addItem} />
      <List
        items={items}
        completeItem={completeItem}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </div>
  );
};
export default InputForm;
