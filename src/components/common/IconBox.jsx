import './IconBox.scss';

/**
 * Rounded square that holds an emoji / icon character. Keeps icon sizing consistent.
 */
function IconBox({ icon, size = 'md', variant = 'primary', className = '' }) {
  return (
    <span className={`icon-box icon-box--${size} icon-box--${variant} ${className}`.trim()} aria-hidden="true">
      {icon}
    </span>
  );
}

export default IconBox;
