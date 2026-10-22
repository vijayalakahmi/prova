import './Card.scss';

/**
 * Generic card container. Pass `hover` to lift on hover, `padding` to control spacing.
 */
function Card({ children, hover = false, padding = 'md', className = '', as: Tag = 'div', ...rest }) {
  const classes = ['card', `card--pad-${padding}`, hover ? 'card--hover' : '', className].filter(Boolean).join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}

export default Card;
