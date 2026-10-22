import { SectionHeading, Button } from '../components/common';
import {
  Hero,
  ServiceCard,
  FeatureItem,
  ProcessStep,
  CtaBanner,
  EnquiryForm,
  DreamHook,
  CourseCategories,
  DirectionJourney,
  GeographicStory,
  StoriesPlaceholder,
} from '../components/sections';
import { services, processSteps, whyProva } from '../data/services';
import './Home.scss';

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

      <DirectionJourney />

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

      <section className="section section--dark">
        <div className="container home-why">
          <div className="home-why__intro">
            <SectionHeading
              align="left"
              eyebrow="Why PROVA"
              title="Direction before admission"
              subtitle="We help students understand what to study and where — with honest counselling and strong Bangalore access."
            />
            <Button to="/about" variant="secondary">
              About PROVA
            </Button>
          </div>
          <div className="home-why__list">
            {whyProva.slice(0, 4).map((item) => (
              <FeatureItem key={item.title} {...item} variant="light" />
            ))}
          </div>
        </div>
      </section>

      <GeographicStory />

      <StoriesPlaceholder />

      <section className="section">
        <div className="container home-enquiry">
          <div className="home-enquiry__intro">
            <SectionHeading
              align="left"
              eyebrow="Free counselling"
              title="Get your personalised course direction"
              subtitle="Share a few details. A counsellor will help you understand your options — no pressure, no fake promises."
            />
          </div>
          <div className="home-enquiry__form">
            <EnquiryForm compact source="home-enquiry" submitLabel="Get My Free Guidance" />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

export default Home;
