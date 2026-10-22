import { Card } from '../common';
import './TestimonialCard.scss';

function TestimonialCard({ name, role, quote, rating = 5 }) {
  return (
    <Card className="testimonial-card">
      <div className="testimonial-card__stars" aria-label={`${rating} out of 5 stars`}>
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
      <blockquote className="testimonial-card__quote">“{quote}”</blockquote>
      <div className="testimonial-card__author">
        <span className="testimonial-card__avatar" aria-hidden="true">
          {name.charAt(0)}
        </span>
        <div>
          <strong className="testimonial-card__name">{name}</strong>
          <span className="testimonial-card__role">{role}</span>
        </div>
      </div>
    </Card>
  );
}

export default TestimonialCard;
