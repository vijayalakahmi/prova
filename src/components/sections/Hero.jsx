import { Button, Badge } from '../common';
import { siteConfig } from '../../data/siteConfig';
import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <Badge variant="accent">{siteConfig.motto}</Badge>
          <h1 className="hero__title">
            Your dream needs the <span>right direction</span>
          </h1>
          <p className="hero__text">
            PROVA helps students and parents choose the right course and college — with clear counselling,
            strong Bangalore access, and guidance that starts from where you are.
          </p>
          <div className="hero__actions">
            <Button to="/contact" size="lg">
              Get Free Counselling
            </Button>
            <Button to="/courses" variant="outline" size="lg">
              Find My Course
            </Button>
          </div>
          <ul className="hero__points">
            <li>Higher education guidance</li>
            <li>Healthcare, medical &amp; professional courses</li>
            <li>Kerala to Bangalore — and beyond</li>
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card--main">
            <span className="hero__card-icon">🩺</span>
            <strong>Healthcare</strong>
            <span>Nursing · Allied Health · Pharmacy</span>
          </div>
          <div className="hero__card hero__card--float-1">
            <span className="hero__card-icon">🎓</span>
            <strong>Higher Education</strong>
            <span>Engineering · Law · Management · UG/PG</span>
          </div>
          <div className="hero__card hero__card--float-2">
            <span className="hero__card-icon">📍</span>
            <strong>Strong Bangalore Access</strong>
            <span>Local college connections &amp; ground-level guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
