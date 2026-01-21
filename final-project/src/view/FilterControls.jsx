export function Filters({ filter, setFilter }) {
  const isAll = filter === "all";
  const isActive = filter === "active";
  const isCompleted = filter === "completed";

  return (
    <div className="filter-controls">
      <span>סינון:</span>
      <button
        className={isAll ? "filter-button active-filter" : "filter-button"}
        onClick={() => setFilter("all")}
      >
        הכל
      </button>
      <button
        className={isActive ? "filter-button active-filter" : "filter-button"}
        onClick={() => setFilter("active")}
      >
        פעיל
      </button>
      <button
        className={
          isCompleted ? "filter-button active-filter" : "filter-button"
        }
        onClick={() => setFilter("completed")}
      >
        הושלם
      </button>
    </div>
  );
}

