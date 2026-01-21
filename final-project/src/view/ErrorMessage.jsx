export function ErrorMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div
      style={{
        backgroundColor: '#dc3545',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        marginBottom: '1rem',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {message}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '0.25rem',
          right: '0.5rem',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.2rem',
          cursor: 'pointer',
          padding: '0'
        }}
      >
        ×
      </button>
    </div>
  );
}