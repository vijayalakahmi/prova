import { PageHeader } from '../components/layout';
import { SectionHeading, Card, IconBox, Button } from '../components/common';
import { FeatureItem, CtaBanner, GeographicStory } from '../components/sections';
import { whyProva } from '../data/services';
import { siteConfig } from '../data/siteConfig';
import './About.scss';

const values = [
  {
    icon: '🎯',
    title: 'Direction first',
    description: 'We help students understand options before choosing a college — not the other way around.',
  },
  {
    icon: '🔎',
    title: 'Honest guidance',
    description: 'Clear conversations about eligibility, fit and practical constraints. No exaggerated claims.',
  },
  {
    icon: '🤝',
    title: 'Human counselling',
    description: 'Students and parents speak with a real counsellor who explains options clearly.',
  },
];

const confusionPoints = [
  'What course to choose',
  'Which college is suitable',
  'What they are eligible for',
  'What the admission process actually involves',
  'What options exist beyond their hometown',
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About PROVA"
        title="Direction to Dreams"
        description="PROVA is an education guidance and admission consultancy helping students and parents move from uncertainty to a clear next step."
      />

      <section className="section">
        <div className="container about-story">
          <div className="about-story__text">
            <SectionHeading
              align="left"
              eyebrow="Why we exist"
              title="Students often know they want a better future — but not how to get there"
            />
            <p>
              Many students and parents feel stuck between ambition and information. They want higher education that
              fits their goals, but the choices feel overwhelming.
            </p>
            <p>PROVA exists to provide that direction — especially across healthcare, medical and other UG/PG pathways.</p>
            <p className="about-story__motto">
              <strong>{siteConfig.motto}.</strong> Help students move from &quot;I don&apos;t know what to choose&quot; to
              &quot;I know my next step.&quot;
            </p>
          </div>
          <Card className="about-story__panel">
            <h3 className="about-story__panel-title">Students often need clarity on</h3>
            <ul className="about-story__points">
              {confusionPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Button to="/contact" fullWidth>
              Get Free Counselling
            </Button>
          </Card>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Our values" title="What guides every recommendation" />
          <div className="grid grid--3">
            {values.map((item) => (
              <Card key={item.title} className="about-value">
                <IconBox icon={item.icon} variant="accent" />
                <h3 className="about-value__title">{item.title}</h3>
                <p className="about-value__text">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why PROVA"
            title="Real differentiators — not invented statistics"
            subtitle="We are a growing consultancy. We earn trust by being clear, useful and honest."
          />
          <div className="grid grid--2 about-features">
            {whyProva.map((item) => (
              <FeatureItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <GeographicStory showCta={false} />

      <section className="section">
        <div className="container about-building">
          <Card className="about-building__card">
            <SectionHeading
              eyebrow="Growing with every student"
              title="We're building something real"
              subtitle="No fake years of experience, no invented partner lists, no fictional team profiles. As PROVA grows, this space will reflect verified progress and real student journeys."
            />
            <Button to="/contact" size="lg">
              Start Your Journey
            </Button>
          </Card>
        </div>
      </section>

      <CtaBanner
        title="Ready for clearer direction?"
        text="Talk to PROVA and take the next step with confidence."
        buttonLabel="Get Free Guidance"
      />
    </>
  );
}

export default About;
