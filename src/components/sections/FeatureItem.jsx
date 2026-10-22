import { IconBox } from '../common';
import './FeatureItem.scss';

/**
 * Icon + title + description row. Used in "Why choose us" and similar lists.
 */
function FeatureItem({ icon, title, description, variant = 'primary' }) {
  return (
    <div className="feature-item">
      <IconBox icon={icon} size="sm" variant={variant} />
      <div className="feature-item__body">
        <h4 className="feature-item__title">{title}</h4>
        <p className="feature-item__text">{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
