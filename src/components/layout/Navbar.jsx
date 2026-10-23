import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../common';
import { navLinks, siteConfig } from '../../data/siteConfig';
import './Navbar.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`.trim()}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <img
            src={siteConfig.logos.blue}
            alt={siteConfig.name}
            className="navbar__logo"
          />
          <span className="navbar__motto">{siteConfig.motto}</span>
        </Link>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`.trim()}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`.trim()}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`.trim()}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" size="sm" onClick={closeMenu}>
            Get Free Counselling
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
