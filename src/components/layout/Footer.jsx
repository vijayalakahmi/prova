import { Link } from 'react-router-dom';
import { navLinks, siteConfig } from '../../data/siteConfig';
import { services } from '../../data/services';
import './Footer.scss';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img
                src={siteConfig.logos.white}
                alt={siteConfig.name}
                className="footer__logo-img"
              />
            </Link>
            <p className="footer__motto">{siteConfig.motto}</p>
            <p className="footer__tagline">{siteConfig.tagline}</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">How we help</h4>
            <ul className="footer__list">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/how-prova-works">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__list footer__list--contact">
              <li>{siteConfig.location}</li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="footer__social">
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
