import './Checkbox.scss';

function Checkbox({ id, name, label, checked, onChange, disabled = false, error, className = '', ...rest }) {
  const checkboxId = id || name;

  return (
    <div className={`checkbox ${className}`.trim()}>
      <label htmlFor={checkboxId} className="checkbox__label">
        <input
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="checkbox__input"
          {...rest}
        />
        <span className="checkbox__box" aria-hidden="true" />
        <span className="checkbox__text">{label}</span>
      </label>
      {error && (
        <span className="checkbox__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Checkbox;
