import { SectionHeading, Button, Card } from '../common';
import './StoriesPlaceholder.scss';

function StoriesPlaceholder() {
  return (
    <section className="section stories-placeholder">
      <div className="container">
        <SectionHeading
          eyebrow="Real stories"
          title="Your story could be next"
          subtitle="We're just getting started. As we help more students find their direction, we'll share their real experiences here."
        />
        <Card className="stories-placeholder__card">
          <p className="stories-placeholder__text">
            Student success stories coming soon — only verified experiences, never invented testimonials.
          </p>
          <Button to="/contact" size="lg">
            Start Your Journey
          </Button>
        </Card>
      </div>
    </section>
  );
}

export default StoriesPlaceholder;
