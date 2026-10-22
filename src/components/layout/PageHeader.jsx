import './PageHeader.scss';

/**
 * Banner at the top of every inner page (everything except Home).
 */
function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="page-header">
      <div className="container page-header__inner">
        {eyebrow && <span className="page-header__eyebrow">{eyebrow}</span>}
        <h1 className="page-header__title">{title}</h1>
        {description && <p className="page-header__description">{description}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
