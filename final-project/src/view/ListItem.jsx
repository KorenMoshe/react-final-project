export function Listitems({ todoList, onDelete, onComplete, onEdit }) {
  return (
    <div>
      {todoList.map((item) => (
        <div key={item.id} className="listItem">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onComplete(item.id)}
          />
          {item.completed ? (
            <input
              type="text"
              value={item.text}
              onChange={(e) => onEdit(item.id, e.target.value)}
              style={{ textDecoration: "line-through" }}
              disabled={item.completed}
            />
          ) : (
            <input
              type="text"
              value={item.text}
              onChange={(e) => onEdit(item.id, e.target.value)}
              disabled={item.completed}
            />
          )}
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
