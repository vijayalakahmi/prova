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
    <section className="geo-story">
      <div className="container geo-story__inner">
        <SectionHeading
          eyebrow="Where you are"
          title="Your location shouldn't limit your options"
          subtitle={siteConfig.locationNote}
        />

        <ol className="geo-story__trail" aria-label="Opportunity path across regions">
          {geographicStory.map((place, index) => (
            <li
              key={place.id}
              className={`geo-story__stop${place.highlight ? ' geo-story__stop--hub' : ''}`}
              style={{ '--stop-i': index }}
            >
              <div className="geo-story__visual">
                <img src={place.image} alt={place.imageAlt} loading="lazy" />
                {place.highlight && (
                  <span className="geo-story__hub-badge">Hub</span>
                )}
              </div>
              <div className="geo-story__copy">
                <strong className="geo-story__label">{place.label}</strong>
                <span className="geo-story__tagline">{place.tagline}</span>
              </div>
              {index < geographicStory.length - 1 && (
                <span className="geo-story__connector" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <p className="geo-story__note">
          Kerala to Bangalore, and beyond — guided by people who know the ground.
        </p>

        {showCta && (
          <div className="geo-story__cta">
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
