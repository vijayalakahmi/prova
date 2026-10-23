import { SectionHeading, Button } from '../components/common';
import {
  Hero,
  ServiceCard,
  ProcessStep,
  CtaBanner,
  DreamHook,
  CourseCategories,
  GeographicStory,
} from '../components/sections';
import { services, processSteps } from '../data/services';

function Home() {
  return (
    <>
      <Hero />

      <DreamHook />

      <CourseCategories limit={4} />

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            eyebrow="How we help"
            title="Guidance that goes beyond getting a seat"
            subtitle="From course direction to college shortlisting and admission support — built for students and parents."
          />
          <div className="grid grid--3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} compact />
            ))}
          </div>
          <div className="text-center mt-6">
            <Button to="/how-prova-works" variant="outline">
              See How PROVA Works
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The PROVA path"
            title="A simple way to move from confusion to clarity"
            subtitle="Dream → Direction → Right course → Right college → Admission guidance."
          />
          <div className="grid grid--4">
            {processSteps.map((item, index) => (
              <ProcessStep key={item.step} {...item} isLast={index === processSteps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      <GeographicStory />

      <CtaBanner />
    </>
  );
}

export default Home;
