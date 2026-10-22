import { SectionHeading, Button } from '../common';
import { directionJourney } from '../../data/services';
import './DirectionJourney.scss';

function DirectionJourney() {
  return (
    <section className="section direction-journey" id="direction">
      <div className="container">
        <SectionHeading
          eyebrow="How direction works"
          title="Not sure where to start?"
          subtitle="Tell us your dream. We'll help you find the direction — step by step."
        />

        <ol className="direction-journey__path">
          {directionJourney.map((step, index) => (
            <li key={step.id} className="direction-journey__step">
              <div className="direction-journey__node">
                <span className="direction-journey__index">{String(index + 1).padStart(2, '0')}</span>
                <strong className="direction-journey__label">{step.label}</strong>
                <span className="direction-journey__desc">{step.description}</span>
              </div>
              {index < directionJourney.length - 1 && (
                <span className="direction-journey__arrow" aria-hidden="true">
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="text-center mt-6">
          <Button to="/contact" size="lg">
            Help Me Choose
          </Button>
        </div>
      </div>
    </section>
  );
}

export default DirectionJourney;
