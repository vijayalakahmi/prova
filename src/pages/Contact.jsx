import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/layout';
import { Card, IconBox } from '../components/common';
import { EnquiryForm } from '../components/sections';
import { siteConfig } from '../data/siteConfig';
import './Contact.scss';

function Contact() {
  const [searchParams] = useSearchParams();
  const interest = useMemo(() => searchParams.get('interest') || '', [searchParams]);

  const contactItems = [
    { icon: '📞', label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: 'Chat with a counsellor',
      href: `https://wa.me/${siteConfig.whatsapp}`,
    },
    { icon: '✉️', label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: '📍', label: 'Presence', value: siteConfig.location },
    { icon: '🕒', label: 'Working Hours', value: siteConfig.hours },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get free counselling"
        description="Share a few details about your course interest. We'll help you understand your options and next steps."
      />

      <section className="section">
        <div className="container contact">
          <aside className="contact__info">
            <h2 className="contact__heading">Talk to PROVA</h2>
            <p className="text-muted contact__intro">
              {siteConfig.locationNote}
            </p>
            <p className="text-muted contact__intro">The first counselling conversation is free.</p>
            <ul className="contact__list">
              {contactItems.map((item) => (
                <li key={item.label} className="contact__item">
                  <IconBox icon={item.icon} size="sm" />
                  <div>
                    <span className="contact__label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__value" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <Card padding="lg" className="contact__form">
            <h2 className="contact__heading">Find my options</h2>
            <p className="text-muted contact__intro">Required: name, phone and course interest. Everything else is optional.</p>
            <EnquiryForm
              initialCourseInterest={interest}
              source="contact-page"
              submitLabel="Get My Free Guidance"
            />
          </Card>
        </div>
      </section>

      <section className="contact__map" aria-label="Bangalore presence map">
        <iframe
          title="PROVA Bangalore presence"
          src="https://www.google.com/maps?q=Bengaluru,+Karnataka&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}

export default Contact;
