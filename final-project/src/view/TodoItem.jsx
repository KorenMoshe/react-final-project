export function TodoItem({
  item,
  onDelete,
  onComplete,
  onUpdateText,
  onToggleEditing,
}) {
  return (
    <div className="listItem">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onComplete(item.id)}
      />
      {item.isEditing ? (
        <input
          type="text"
          value={item.text}
          onChange={(e) => onUpdateText(item.id, e.target.value)}
          onBlur={() => onToggleEditing(item.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onToggleEditing(item.id);
            }
          }}
          autoFocus
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            opacity: item.completed ? 0.7 : 1,
          }}
        />
      ) : (
        <span
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            opacity: item.completed ? 0.7 : 1,
            flex: 1,
            cursor: item.completed ? "default" : "pointer",
          }}
          onClick={() => !item.completed && onToggleEditing(item.id)}
        >
          {item.text}
        </span>
      )}
      {!item.completed && !item.isEditing && (
        <button className="edit-button" onClick={() => onToggleEditing(item.id)}>ערוך</button>
      )}
      <button onClick={() => onDelete(item.id)}>מחק</button>
    </div>
  );
}
