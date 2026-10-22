import { PageHeader } from '../components/layout';
import { CourseCategories, CtaBanner, EnquiryForm } from '../components/sections';
import { SectionHeading, Card } from '../components/common';
import './Courses.scss';

function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="Find the right course for your next step"
        description="Explore healthcare, medical, professional and other UG/PG pathways. Start with a category — then talk to us for personalised direction."
      />

      <CourseCategories showCta={false} />

      <section className="section section--soft">
        <div className="container courses-enquiry">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Not sure what to study?"
              title="Get free course guidance"
              subtitle="Tell us your qualification and interests. We'll help you understand suitable options."
            />
          </div>
          <Card padding="lg" className="courses-enquiry__form">
            <EnquiryForm source="courses-page" submitLabel="Find My Options" />
          </Card>
        </div>
      </section>

      <CtaBanner
        title="Looking for Nursing, Allied Health, Engineering or Law?"
        text="Select your interest and get counselling support for the next step."
        buttonLabel="Get Free Guidance"
      />
    </>
  );
}

export default Courses;
