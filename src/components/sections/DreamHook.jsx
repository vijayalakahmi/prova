import { Link } from 'react-router-dom';
import { SectionHeading } from '../common';
import { dreamOptions } from '../../data/courses';
import './DreamHook.scss';

function DreamHook() {
  return (
    <section className="section section--soft dream-hook" id="dream">
      <div className="container">
        <SectionHeading
          eyebrow="Start here"
          title="What's your dream?"
          subtitle="Pick one. We'll take you to that field so you can explore courses from there."
        />

        <div className="dream-hook__options" role="list">
          {dreamOptions.map((option) => (
            <Link
              key={option.id}
              to={`/courses?field=${option.id}`}
              role="listitem"
              className={`dream-hook__option dream-hook__option--${option.tone}`}
            >
              <div className="dream-hook__media">
                <img
                  src={option.image}
                  alt={option.imageAlt}
                  className="dream-hook__image"
                  style={{ objectPosition: option.imagePosition || 'center' }}
                  loading="lazy"
                />
              </div>

              <div className="dream-hook__body">
                <div className="dream-hook__row">
                  <span className="dream-hook__label">{option.label}</span>
                  <span className="dream-hook__cta" aria-hidden="true">
                    Explore ↗
                  </span>
                </div>
                <div className="dream-hook__tags">
                  {option.tags.map((tag) => (
                    <span key={tag} className="dream-hook__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DreamHook;
