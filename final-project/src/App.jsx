import { useState, useEffect } from "react";
import "./App.css";
import { Listitems } from "./view/ListItem.jsx";
import { AddTask } from "./view/TaskInput.jsx";
import { Filters } from "./view/FilterControls.jsx";
import { ErrorMessage } from "./view/ErrorMessage.jsx";

function getTodosFromStorage() {
  const storedTodoList = localStorage.getItem("todoList");
  if (storedTodoList) {
    const todos = JSON.parse(storedTodoList);
    return todos.map((todo) => ({
      ...todo,
      isEditing: todo.isEditing || false,
      originalText: todo.originalText || todo.text,
    }));
  }
  return [];
}

function App() {
  const [todoList, setTodoList] = useState(getTodosFromStorage);
  const [filter, setFilter] = useState("all");
  const [errorMessage, setErrorMessage] = useState("");

  const notCompletedCount = todoList.filter((item) => !item.completed).length;

  const filteredTodoList = todoList.filter((item) => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true; // "all"
  });

  function addTask(input) {
    if (!input.trim()) return;
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        text: input.trim(),
        originalText: input.trim(),
        completed: false,
        isEditing: false,
      },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  function deleteTask(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  function toggleTaskDone(id) {
    setTodoList(
      todoList.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed, isEditing: false }
          : item,
      ),
    );
  }

  function updateTaskText(id, text) {
    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, text } : item)),
    );
    setErrorMessage("");
  }

  function toggleEditing(id) {
    const item = todoList.find((item) => item.id === id);

    // If item doesn't exist, do nothing
    if (!item) {
      return;
    }

    if (item.isEditing && !item.text.trim()) {
      setTodoList(
        todoList.map((item) =>
          item.id === id
            ? {
                ...item,
                text: item.originalText || item.text,
                isEditing: false,
              }
            : item,
        ),
      );
      setErrorMessage("לא ניתן לשמור משימה ריקה");
      return;
    }

    if (!item.isEditing) {
      setTodoList(
        todoList.map((item) =>
          item.id === id
            ? { ...item, originalText: item.text, isEditing: true }
            : item,
        ),
      );
    } else {
      setTodoList(
        todoList.map((item) =>
          item.id === id ? { ...item, isEditing: false } : item,
        ),
      );
    }
    setErrorMessage("");
  }

  function clearCompletedTasks() {
    setTodoList(todoList.filter((item) => !item.completed));
  }

  return (
    <>
      <h1>מנהל משימות</h1>
      <p>נשארו {notCompletedCount} משימות פתוחות</p>
      <ErrorMessage
        message={errorMessage}
        onClose={() => setErrorMessage("")}
      />

      <AddTask addTask={addTask} />

      <Filters filter={filter} setFilter={setFilter} />

      {(filter === "all" || filter === "completed") &&
        todoList.some((item) => item.completed) && (
        <div className="clear-completed-container">
          <button
            className="clear-completed-button"
            onClick={clearCompletedTasks}
          >
            נקה משימות הושלמו
          </button>
        </div>
      )}

      <Listitems
        todoList={filteredTodoList}
        onDelete={deleteTask}
        onComplete={toggleTaskDone}
        onUpdateText={updateTaskText}
        onToggleEditing={toggleEditing}
      />
    </>
  );
}

export default App;
