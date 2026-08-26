import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ profile }) {
  return (
    <section id="home" className="hero-section">

      {/* Hello! badge — spring pop */}
      <div className="hero-greeting anim-badge">
        <span className="greeting-bubble">Hello!</span>
        <svg className="spark-doodle" viewBox="0 0 36 28" fill="none">
          <path className="spark-path" d="M2 24 C10 16, 20 8, 34 3" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
          <path className="spark-path" style={{ animationDelay: '0.38s' }} d="M8 27 C16 19, 25 11, 34 8" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Headline — staggered line slide-up */}
      <h1 className="hero-title">
        <span className="anim-title-1" style={{ display: 'block' }}>
          I'm <span className="highlight">{profile.name.split(' ')[0]}</span>{','}
        </span>
        <span className="hero-subtitle-line anim-title-2">
          <svg className="hero-doodle-underline" viewBox="0 0 80 36" fill="none">
            <path className="spark-path" style={{ animationDelay: '0.52s' }} d="M4 28 C20 14, 40 6, 76 4" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
            <path className="spark-path" style={{ animationDelay: '0.58s' }} d="M4 34 C22 20, 44 12, 76 10" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          {profile.role.split('&')[0].trim()}
        </span>
      </h1>

      {/* Hero stage */}
      <div className="hero-stage">

        {/* Left quote — fade from left */}
        <div className="widget-left anim-widget-l">
          <div className="big-double-quotes">❝❝</div>
          <p>Steven's Exceptional full-stack &amp; backend systems ensure website's success. Highly Recommended</p>
        </div>

        {/* Arch — scale up from bottom */}
        <div className="hero-arch-bg anim-arch" />

        {/* Portrait static without animation */}
        <div className="hero-portrait-container">
          <img
            src="/Steven-Amin-Portrait_nobg.png"
            alt={profile.name}
            className="hero-portrait"
          />
        </div>

        {/* Right rating — fade from right */}
        <div className="widget-right anim-widget-r">
          <span className="stars-rating">★★★★★</span>
          <span className="experience-number">Fresh Grad</span>
          <span className="experience-label">Full-Stack .NET Developer</span>
        </div>

        {/* CTA pill — spring up last */}
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
