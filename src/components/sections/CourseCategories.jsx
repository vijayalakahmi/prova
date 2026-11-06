import { Link } from 'react-router-dom';
import { SectionHeading, Button, Card } from '../common';
import { courseCategories } from '../../data/courses';
import './CourseCategories.scss';

function CourseCategories({ limit, showCta = true }) {
  const categories = limit ? courseCategories.slice(0, limit) : courseCategories;

  return (
    <section className="section course-categories" id="courses">
      <div className="container">
        <SectionHeading
          eyebrow="Courses"
          title="Explore where you could go"
          subtitle="Start with a field. On the courses page you can browse every pathway, subcategory by subcategory."
        />

        <div className="grid grid--2 course-categories__grid">
          {categories.map((category) => (
            <Card key={category.id} hover className="course-category" as={Link} to={`/courses?field=${category.id}`}>
              <div className="course-category__head">
                <span className="course-category__icon" aria-hidden="true">
                  {category.icon}
                </span>
                <div>
                  <h3 className="course-category__title">{category.name}</h3>
                  <p className="course-category__desc">{category.description}</p>
                </div>
              </div>
              <div className="course-category__footer">
                <span className="course-category__count">
                  {category.courseCount}+ courses
                </span>
                <span className="course-category__cta">Browse pathways →</span>
              </div>
            </Card>
          ))}
        </div>

        {showCta && (
          <div className="text-center mt-6">
            <Button to="/courses" variant="outline">
              Explore All Courses
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CourseCategories;
