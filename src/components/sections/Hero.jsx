import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../common';
import { siteConfig } from '../../data/siteConfig';
import { whyProva } from '../../data/services';
import './Hero.scss';

const AUTO_MS = 6000;

function Hero() {
  const slides = whyProva;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const goTo = useCallback(
    (index) => {
      const len = slides.length;
      setActive(((index % len) + len) % len);
    },
    [slides.length],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || slides.length < 2) return undefined;
    const id = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, next, slides.length]);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current == null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta > 0) prev();
    else next();
  };

  const slide = slides[active];

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Why PROVA"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="hero__media" aria-hidden="true">
        {slides.map((item, index) => (
          <div
            key={item.title}
            className={`hero__slide${index === active ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
            role="img"
            aria-label={item.imageAlt}
          />
        ))}
        <div className="hero__veil" />
      </div>

      <button
        type="button"
        className="hero__arrow hero__arrow--prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="hero__arrow hero__arrow--next"
        onClick={next}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="container hero__inner">
        <div className="hero__content" key={slide.title}>
          <img
            src={siteConfig.logos.white}
            alt={siteConfig.shortName}
            className="hero__brand"
          />
          <p className="hero__eyebrow">Why PROVA · {siteConfig.motto}</p>
          <h1 className="hero__title">{slide.title}</h1>
          <p className="hero__text">{slide.description}</p>
          <div className="hero__actions">
            <Button to="/contact" size="lg">
              Get Free Counselling
            </Button>
            <Button to="/courses" variant="secondary" size="lg" className="hero__btn-ghost">
              Find My Course
            </Button>
          </div>
        </div>

        <div className="hero__controls">
          <div className="hero__dots" role="tablist" aria-label="Carousel slides">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show: ${item.title}`}
                className={`hero__dot${index === active ? ' is-active' : ''}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>

          <div className="hero__progress" aria-hidden="true">
            <span
              key={`${active}-${paused}`}
              className={`hero__progress-bar${paused ? ' is-paused' : ''}`}
              style={{ animationDuration: `${AUTO_MS}ms` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
