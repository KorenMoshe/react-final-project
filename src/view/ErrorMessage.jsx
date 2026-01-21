export function ErrorMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        marginBottom: '1.5rem',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 4px 16px rgba(220, 38, 38, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        animation: 'slideDown 0.3s ease-out'
      }}
    >
      {message}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.75rem',
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          color: 'white',
          fontSize: '1.4rem',
          cursor: 'pointer',
          padding: '0.25rem 0.5rem',
          borderRadius: '6px',
          lineHeight: '1',
          transition: 'all 0.2s ease',
          fontWeight: 'bold'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.3)';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          e.target.style.transform = 'scale(1)';
        }}
      >
        ×
      </button>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}