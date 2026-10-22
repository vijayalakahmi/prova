import { Card, Badge, Button } from '../common';
import './InstitutionCard.scss';

const typeLabels = {
  university: 'University',
  college: 'College',
};

function InstitutionCard({ institution }) {
  const { name, type, area, city, state, programs, streams, description, isPlaceholder } = institution;
  const locationLabel = [area || city, state].filter(Boolean).join(', ');

  return (
    <Card hover className="institution-card">
      <div className="institution-card__top">
        <Badge variant={isPlaceholder ? 'accent' : 'primary'}>
          {isPlaceholder ? 'Guidance available' : typeLabels[type] || type}
        </Badge>
        <span className="institution-card__area">📍 {locationLabel}</span>
      </div>

      <h3 className="institution-card__name">{name}</h3>
      <p className="institution-card__text">{description}</p>

      <div className="institution-card__meta">
        <div className="institution-card__group">
          <span className="institution-card__label">Programs</span>
          <div className="institution-card__tags">
            {programs.map((p) => (
              <Badge key={p} variant="neutral">
                {p}
              </Badge>
            ))}
          </div>
        </div>
        <div className="institution-card__group">
          <span className="institution-card__label">Focus areas</span>
          <p className="institution-card__streams">{streams.join(' · ')}</p>
        </div>
      </div>

      <Button to="/contact" variant="outline" size="sm" fullWidth>
        Talk to a Counsellor
      </Button>
    </Card>
  );
}

export default InstitutionCard;
