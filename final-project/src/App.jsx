import { useState, useEffect } from "react";
import "./App.css";
import { Listitems } from "./view/ListItem.jsx";

function App() {
  const [todoList, setTodoList] = useState(onLoad());
  let notCompletedTodoList = todoList.filter((item) => !item.completed).length;
  function onLoad() {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) return JSON.parse(storedTodoList);
    return [];
  }
  function onAdd(input) {
    console.log(input);
    setTodoList([
      ...todoList,
      { id: Date.now(), text: input, completed: false },
    ]);
    document.querySelector(".input").value = "";
  }
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  function onDelete(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }
  function onComplete(id) {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }
  function onEdit(id, text) {
    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, text: text } : item)),
    );
  }
  return (
    <>
      <p>{notCompletedTodoList} tasks left</p>
      <input type="text" className="input" />
      <button
        onClick={() => onAdd(document.querySelector(".input").value.trim())}
      >
        Add
      </button>
      <Listitems
        todoList={todoList}
        onDelete={onDelete}
        onComplete={onComplete}
        onEdit={onEdit}
      />
    </>
  );
}

export default App;
