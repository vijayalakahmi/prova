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
          subtitle="Start with a category. We'll help you narrow it to the right course and college."
        />

        <div className="grid grid--2 course-categories__grid">
          {categories.map((category) => (
            <Card key={category.id} hover className="course-category">
              <div className="course-category__head">
                <span className="course-category__icon" aria-hidden="true">
                  {category.icon}
                </span>
                <div>
                  <h3 className="course-category__title">{category.name}</h3>
                  <p className="course-category__desc">{category.description}</p>
                </div>
              </div>
              <ul className="course-category__list">
                {category.courses.map((course) => (
                  <li key={course.id}>
                    <Link to={`/contact?interest=${course.id}`} className="course-category__link">
                      <span>{course.name}</span>
                      <span className="course-category__level">{course.level}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {showCta && (
          <div className="text-center mt-6">
            <Button to="/courses" variant="outline">
              Explore Courses
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CourseCategories;
