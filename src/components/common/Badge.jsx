import './Badge.scss';

function Badge({ children, variant = 'primary', className = '' }) {
  return <span className={`badge badge--${variant} ${className}`.trim()}>{children}</span>;
}

export default Badge;
