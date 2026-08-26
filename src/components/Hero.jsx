import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Hero — Full-viewport landing stage with portrait, arch, floating widgets, and CTA.
 * Pure presentational component driven entirely by `profile` prop.
 */
export default function Hero({ profile }) {
  const firstName = profile.name.split(' ')[0];
  const roleHeadline = profile.role.split('&')[0].trim();

  return (
    <section id="home" className="hero-section">

      {/* Hello! badge — spring pop */}
      <div className="hero-greeting anim-badge">
        <span className="greeting-bubble">Hello!</span>
        <svg className="spark-doodle" viewBox="0 0 36 28" fill="none" aria-hidden="true">
          <path className="spark-path" d="M2 24 C10 16, 20 8, 34 3" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
          <path className="spark-path" style={{ animationDelay: '0.38s' }} d="M8 27 C16 19, 25 11, 34 8" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Headline — staggered line slide-up */}
      <h1 className="hero-title">
        <span className="anim-title-1" style={{ display: 'block' }}>
          I'm <span className="highlight">{firstName}</span>{','}
        </span>
        <span className="hero-subtitle-line anim-title-2">
          <svg className="hero-doodle-underline" viewBox="0 0 80 36" fill="none" aria-hidden="true">
            <path className="spark-path" style={{ animationDelay: '0.52s' }} d="M4 28 C20 14, 40 6, 76 4" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
            <path className="spark-path" style={{ animationDelay: '0.58s' }} d="M4 34 C22 20, 44 12, 76 10" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          {roleHeadline}
        </span>
      </h1>

      {/* Hero stage — arch, portrait, floating widgets */}
      <div className="hero-stage">

        {/* Left testimonial quote */}
        <div className="widget-left anim-widget-l">
          <div className="big-double-quotes">❝❝</div>
          <p>{profile.snippet}</p>
        </div>

        {/* Semicircle arch background */}
        <div className="hero-arch-bg anim-arch" />

        {/* Portrait image */}
        <div className="hero-portrait-container">
          <img
            src="/Steven-Amin-Portrait_nobg.png"
            alt={`${profile.name} portrait`}
            className="hero-portrait"
            loading="eager"
          />
        </div>

        {/* Right rating widget */}
        <div className="widget-right anim-widget-r">
          <span className="stars-rating" aria-label="5 star rating">★★★★★</span>
          <span className="experience-number">Fresh Grad</span>
          <span className="experience-label">Full-Stack .NET Developer</span>
        </div>

        {/* CTA pill */}
        <div className="hero-cta-pill anim-cta">
          <a href="#projects" className="btn-portfolio anim-btn-glow">
            Portfolio <ArrowUpRight size={18} strokeWidth={2.5} />
          </a>
          <a href={`mailto:${profile.email}`} className="btn-hire">Hire me</a>
        </div>

      </div>
    </section>
  );
}
