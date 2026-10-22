import FormField from './FormField';
import './Select.scss';

/**
 * options: Array<{ value: string, label: string }>
 */
function Select({
  id,
  name,
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  required = false,
  disabled = false,
  hint,
  error,
  className = '',
  ...rest
}) {
  const selectId = id || name;

  return (
    <FormField id={selectId} label={label} required={required} hint={hint} error={error} className={className}>
      <div className="select-wrapper">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          className={`form-control select ${error ? 'form-control--error' : ''}`.trim()}
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </FormField>
  );
}

export default Select;
