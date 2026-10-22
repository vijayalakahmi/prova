import './ProcessStep.scss';

function ProcessStep({ step, title, description, isLast = false }) {
  return (
    <div className={`process-step ${isLast ? 'process-step--last' : ''}`.trim()}>
      <span className="process-step__number">{step}</span>
      <h4 className="process-step__title">{title}</h4>
      <p className="process-step__text">{description}</p>
    </div>
  );
}

export default ProcessStep;
