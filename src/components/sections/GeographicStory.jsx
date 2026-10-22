import { SectionHeading, Button } from '../common';
import { geographicStory } from '../../data/services';
import { siteConfig } from '../../data/siteConfig';
import './GeographicStory.scss';

function GeographicStory({
  showCta = true,
  ctaLabel = 'Learn About PROVA',
  ctaTo = '/about',
}) {
  return (
    <section className="section section--soft geo-story">
      <div className="container">
        <SectionHeading
          eyebrow="Where you are"
          title="Your location shouldn't limit your options"
          subtitle={siteConfig.locationNote}
        />

        <div className="geo-story__trail" aria-label="Opportunity path">
          {geographicStory.map((place, index) => (
            <div key={place.id} className="geo-story__item">
              <span className="geo-story__dot" aria-hidden="true" />
              <strong className="geo-story__label">{place.label}</strong>
              {index < geographicStory.length - 1 && (
                <span className="geo-story__connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <p className="geo-story__note text-center text-muted">
          Kerala to Bangalore, and beyond — guided by people who know the ground.
        </p>

        {showCta && (
          <div className="text-center mt-6">
            <Button to={ctaTo} variant="outline">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GeographicStory;
