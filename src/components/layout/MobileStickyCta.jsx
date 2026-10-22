import { useEffect, useState } from 'react';
import { Button } from '../common';
import { siteConfig } from '../../data/siteConfig';
import './MobileStickyCta.scss';

function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-sticky-cta" role="region" aria-label="Quick actions">
      <Button to="/contact" size="sm" className="mobile-sticky-cta__primary">
        Get Free Counselling
      </Button>
      <Button
        href={`https://wa.me/${siteConfig.whatsapp}`}
        variant="outline"
        size="sm"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </Button>
    </div>
  );
}

export default MobileStickyCta;
