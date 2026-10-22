import { useState } from 'react';
import { SectionHeading, Button } from '../common';
import { dreamOptions } from '../../data/courses';
import EnquiryForm from './EnquiryForm';
import './DreamHook.scss';

function DreamHook() {
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setShowForm(false);
  };

  return (
    <section className="section section--soft dream-hook" id="dream">
      <div className="container">
        <SectionHeading
          eyebrow="Start here"
          title="What's your dream?"
          subtitle="Pick one. We'll help you find the direction from there."
        />

        <div className="dream-hook__options" role="list">
          {dreamOptions.map((option) => {
            const isActive = selected?.id === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="listitem"
                className={`dream-hook__option ${isActive ? 'dream-hook__option--active' : ''}`.trim()}
                onClick={() => handleSelect(option)}
                aria-pressed={isActive}
              >
                <span className="dream-hook__icon" aria-hidden="true">
                  {option.icon}
                </span>
                <span className="dream-hook__label">{option.label}</span>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="dream-hook__followup">
            <p className="dream-hook__confirm">
              Great. Let&apos;s find your direction for <strong>{selected.label}</strong>.
            </p>
            {!showForm ? (
              <Button size="lg" onClick={() => setShowForm(true)}>
                Help Me Choose
              </Button>
            ) : (
              <div className="dream-hook__form">
                <EnquiryForm
                  compact
                  initialCourseInterest={selected.courseInterest}
                  dreamSelection={selected.id}
                  source="dream-hook"
                  submitLabel="Find My Options"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default DreamHook;
