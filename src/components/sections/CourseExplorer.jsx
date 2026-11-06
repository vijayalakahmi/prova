import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../common';
import { courseFields, countCoursesInField } from '../../data/courses';
import './CourseExplorer.scss';

function CourseExplorer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const detailRef = useRef(null);

  const paramField = searchParams.get('field');
  const selectedField = useMemo(
    () => courseFields.find((field) => field.id === paramField) || null,
    [paramField]
  );

  const [activeSubId, setActiveSubId] = useState(null);
  const [openCourseId, setOpenCourseId] = useState(null);

  useEffect(() => {
    setActiveSubId(null);
    setOpenCourseId(null);
    if (selectedField && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedField]);

  const openField = (fieldId) => {
    setSearchParams({ field: fieldId }, { replace: false });
  };

  const backToFields = () => {
    setSearchParams({}, { replace: false });
    setActiveSubId(null);
    setOpenCourseId(null);
  };

  const guidanceLink = (courseId) =>
    `/contact?interest=${encodeURIComponent(courseId)}&field=${encodeURIComponent(selectedField.id)}`;

  const visibleSubs = useMemo(() => {
    if (!selectedField?.subcategories?.length) return [];
    if (!activeSubId) return selectedField.subcategories;
    return selectedField.subcategories.filter((sub) => sub.id === activeSubId);
  }, [selectedField, activeSubId]);

  /* ---------- Step 1: main category gallery ---------- */
  if (!selectedField) {
    return (
      <section className="section course-explorer" id="course-catalogue">
        <div className="container course-explorer__gallery-wrap">
          <div className="course-explorer__gallery-head">
            <p className="course-explorer__kicker">Choose a direction</p>
            <h2 className="course-explorer__gallery-title">Where do you want to go?</h2>
            <p className="course-explorer__gallery-sub">
              Pick a field to explore pathways, courses and career scope — one step at a time.
            </p>
          </div>

          <div className="course-gallery" role="list">
            {courseFields.map((field) => {
              const count = countCoursesInField(field);
              return (
                <button
                  key={field.id}
                  type="button"
                  role="listitem"
                  className={`course-gallery__card course-gallery__card--${field.tone}`}
                  onClick={() => openField(field.id)}
                >
                  <div className="course-gallery__media">
                    <img
                      src={field.image}
                      alt={field.imageAlt}
                      style={{ objectPosition: field.imagePosition || 'center' }}
                      loading="lazy"
                    />
                  </div>

                  <div className="course-gallery__body">
                    <div className="course-gallery__top">
                      <h3>{field.name}</h3>
                      {count > 0 ? (
                        <span className="course-gallery__count">{count}</span>
                      ) : (
                        <span className="course-gallery__count course-gallery__count--soft">?</span>
                      )}
                    </div>
                    <p>{field.description}</p>
                    <div className="course-gallery__tags">
                      {field.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Step 2: selected field detail ---------- */
  return (
    <section className="section course-explorer" id="course-catalogue" ref={detailRef}>
      <div className="container">
        <button
          type="button"
          className="course-explorer__back"
          onClick={backToFields}
          aria-label="Back to all fields"
        >
          ←
        </button>

        <header className={`course-hero course-hero--${selectedField.tone}`}>
          <div className="course-hero__media">
            <img
              src={selectedField.image}
              alt={selectedField.imageAlt}
              style={{ objectPosition: selectedField.imagePosition || 'center' }}
            />
          </div>
          <div className="course-hero__content">
            <h2 className="course-hero__title">{selectedField.name}</h2>
            <p className="course-hero__desc">{selectedField.description}</p>

            {selectedField.id !== 'exploring' && selectedField.subcategories.length > 0 && (
              <div className="course-subs" aria-label="Filter by area">
                <button
                  type="button"
                  className={`course-subs__chip ${!activeSubId ? 'is-active' : ''}`}
                  onClick={() => setActiveSubId(null)}
                >
                  All areas
                </button>
                {selectedField.subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    className={`course-subs__chip ${activeSubId === sub.id ? 'is-active' : ''}`}
                    onClick={() => {
                      setActiveSubId(sub.id);
                      setOpenCourseId(null);
                    }}
                  >
                    <strong>{sub.name}</strong>
                    <span>{sub.courses.length}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        {selectedField.id === 'exploring' ? (
          <div className="course-explore-panel">
            <div className="course-explore-panel__inner">
              <h3>Let’s figure it out together</h3>
              <p>
                Share your interests, subjects and goals. A PROVA counsellor will help you explore
                suitable fields and courses step by step — with no pressure to decide today.
              </p>
              <Button to="/contact?interest=not-sure" size="lg">
                Talk to a Counsellor
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="course-panels">
              {visibleSubs.map((sub) => (
                <section key={sub.id} className="course-panel">
                  <div className="course-panel__head">
                    <div>
                      <h3>{sub.name}</h3>
                      <p>
                        {sub.courses.length} course{sub.courses.length === 1 ? '' : 's'} in this pathway
                      </p>
                    </div>
                  </div>

                  <div className="course-cards">
                    {sub.courses.map((course) => {
                      const isOpen = openCourseId === course.id;
                      return (
                        <article
                          key={course.id}
                          className={`course-card ${isOpen ? 'is-open' : ''}`}
                        >
                          <button
                            type="button"
                            className="course-card__face"
                            onClick={() =>
                              setOpenCourseId((current) =>
                                current === course.id ? null : course.id
                              )
                            }
                            aria-expanded={isOpen}
                          >
                            <div className="course-card__topline">
                              <h4>{course.name}</h4>
                              <span className="course-card__plus" aria-hidden="true">
                                {isOpen ? '−' : '+'}
                              </span>
                            </div>

                            <div className="course-card__meta">
                              {course.duration && <span>{course.duration}</span>}
                              {course.eligibility && (
                                <span className="course-card__pill">{course.eligibility}</span>
                              )}
                              {course.level && <span>{course.level}</span>}
                            </div>

                            <p className="course-card__blurb">{course.description}</p>
                          </button>

                          <div className="course-card__actions">
                            <button
                              type="button"
                              className="course-card__more"
                              onClick={() =>
                                setOpenCourseId((current) =>
                                  current === course.id ? null : course.id
                                )
                              }
                              aria-expanded={isOpen}
                            >
                              {isOpen ? 'Hide details' : 'See career scope'}
                            </button>
                            <Button to={guidanceLink(course.id)} size="sm">
                              Connect with us
                            </Button>
                          </div>

                          {isOpen && (
                            <div className="course-card__detail">
                              <div className="course-card__scope">
                                <h5>Career scope</h5>
                                <p>{course.scope}</p>
                              </div>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {selectedField.note && (
              <p className="course-explorer__footnote">{selectedField.note}</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default CourseExplorer;
