import { Button } from '../common';
import './CtaBanner.scss';

function CtaBanner({
  title = 'Ready to find your direction?',
  text = 'Get free counselling and take the next step with clarity.',
  buttonLabel = 'Start Your Journey',
  buttonTo = '/contact',
}) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2 className="cta-banner__title">{title}</h2>
          <p className="cta-banner__text">{text}</p>
        </div>
        <Button to={buttonTo} variant="secondary" size="lg">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}

export default CtaBanner;
