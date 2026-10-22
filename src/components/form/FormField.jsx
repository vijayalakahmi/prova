import './FormField.scss';

/**
 * Wraps any control with a label, optional hint and error message.
 * Used internally by Input, Select and Textarea so they share one layout.
 */
function FormField({ id, label, required, hint, error, className = '', children }) {
  return (
    <div className={`form-field ${className}`.trim()}>
      {label && (
        <label htmlFor={id} className="form-field__label">
          {label}
          {required && <span className="form-field__required">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <span className="form-field__error" role="alert">
          {error}
        </span>
      ) : (
        hint && <span className="form-field__hint">{hint}</span>
      )}
    </div>
  );
}

export default FormField;
