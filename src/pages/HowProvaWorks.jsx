import { PageHeader } from '../components/layout';
import { SectionHeading } from '../components/common';
import { ServiceCard, ProcessStep, CtaBanner, DirectionJourney } from '../components/sections';
import { services, processSteps } from '../data/services';

function HowProvaWorks() {
  return (
    <>
      <PageHeader
        eyebrow="How PROVA Works"
        title="From dream to direction to your next step"
        description="We help students and parents understand courses, shortlist colleges and navigate admissions — with honest, human counselling."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we offer"
            title="Support that stays student-first"
            subtitle="We do not overpromise. These are the ways PROVA can help you today."
          />
          <div className="grid grid--3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <DirectionJourney />

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Our process" title="How we work with you" />
          <div className="grid grid--4">
            {processSteps.map((item, index) => (
              <ProcessStep key={item.step} {...item} isLast={index === processSteps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which path you need?"
        text="Talk to a counsellor and we'll help you find your direction."
        buttonLabel="Get Free Counselling"
      />
    </>
  );
}

export default HowProvaWorks;
