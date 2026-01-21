import { useState } from "react";

export function AddTask({ addTask }) {
  const [value, setValue] = useState("");

  function handleSubmit() {
    const triValue = value.trim();
    if (!triValue) return;
    addTask(triValue);
    setValue("");
  }

  return (
    <div className="task-input">
      <input
        type="text"
        className="task-input-field"
        placeholder="הוסף משימה חדשה..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      />
      <button className="task-input-button" onClick={handleSubmit}>
        הוסף
      </button>
    </div>
  );
}
