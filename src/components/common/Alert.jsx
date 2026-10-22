import './Alert.scss';

function Alert({ type = 'success', title, children, onClose }) {
  return (
    <div className={`alert alert--${type}`} role="status">
      <div className="alert__body">
        {title && <strong className="alert__title">{title}</strong>}
        {children && <div className="alert__text">{children}</div>}
      </div>
      {onClose && (
        <button type="button" className="alert__close" onClick={onClose} aria-label="Dismiss">
          ×
        </button>
      )}
    </div>
  );
}

export default Alert;
