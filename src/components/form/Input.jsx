import FormField from './FormField';

function Input({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  hint,
  error,
  className = '',
  ...rest
}) {
  const inputId = id || name;

  return (
    <FormField id={inputId} label={label} required={required} hint={hint} error={error} className={className}>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        className={`form-control ${error ? 'form-control--error' : ''}`.trim()}
        {...rest}
      />
    </FormField>
  );
}

export default Input;
