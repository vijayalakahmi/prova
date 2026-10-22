import './SectionHeading.scss';

function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
