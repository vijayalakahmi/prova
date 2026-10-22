import { Link } from 'react-router-dom';
import './Button.scss';

/**
 * Renders a <button>, or a router <Link> when `to` is provided,
 * or an <a> when `href` is provided. Same look in all three cases.
 */
function Button({
  children,
  variant = 'primary', // primary | secondary | outline | ghost
  size = 'md', // sm | md | lg
  fullWidth = false,
  to,
  href,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    loading ? 'btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled || loading} {...rest}>
      {loading ? 'Please wait…' : children}
    </button>
  );
}

export default Button;
