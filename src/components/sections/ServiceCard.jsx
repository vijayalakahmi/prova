import { Card, IconBox } from '../common';
import './ServiceCard.scss';

function ServiceCard({ icon, title, description, highlights = [], compact = false }) {
  return (
    <Card hover className="service-card">
      <IconBox icon={icon} />
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__text">{description}</p>
      {!compact && highlights.length > 0 && (
        <ul className="service-card__list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}

export default ServiceCard;
