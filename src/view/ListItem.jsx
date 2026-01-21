import { TodoItem } from "./TodoItem.jsx";

export function Listitems({
  todoList,
  onDelete,
  onComplete,
  onUpdateText,
  onToggleEditing,
}) {
  return (
    <div>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onComplete={onComplete}
          onUpdateText={onUpdateText}
          onToggleEditing={onToggleEditing}
        />
      ))}
    </div>
  );
}
