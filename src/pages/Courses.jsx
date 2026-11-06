import { PageHeader } from '../components/layout';
import { CourseExplorer, CtaBanner } from '../components/sections';

function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="Find a field that feels like you"
        description="Start with one clear direction. Then explore pathways and courses — with description, career scope and free guidance."
      />

      <CourseExplorer />

      <CtaBanner
        title="Ready for personalised direction?"
        text="Share your goals and we’ll help you shortlist the right course and college path."
        buttonLabel="Connect with us"
      />
    </>
  );
}

export default Courses;
