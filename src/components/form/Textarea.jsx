import FormField from './FormField';
import './Textarea.scss';

function Textarea({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
  disabled = false,
  hint,
  error,
  className = '',
  ...rest
}) {
  const textareaId = id || name;

  return (
    <FormField id={textareaId} label={label} required={required} hint={hint} error={error} className={className}>
      <textarea
        id={textareaId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        className={`form-control textarea ${error ? 'form-control--error' : ''}`.trim()}
        {...rest}
      />
    </FormField>
  );
}

export default Textarea;
