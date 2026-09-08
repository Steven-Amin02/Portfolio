import React from 'react';
import { Quote, Building2, Code, GraduationCap, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

/**
 * Testimonials — Verified Enterprise & Academic Endorsements.
 * Highlights official recommendations from NBE, DEPI, and academic faculty.
 */

const ICON_MAP = {
  Building2,
  Code,
  GraduationCap
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Sparkles size={13} className="badge-icon" />
            <span>ENDORSEMENTS &amp; REPUTATION</span>
          </div>
          <h2 className="section-title">
            Testimonials That Speak to <span className="highlight-text">My Impact</span>
          </h2>
          <p className="section-subtitle">
            Direct feedback and performance endorsements from enterprise leadership, program supervisors, and academic mentors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => {
            const IconComp = ICON_MAP[item.icon] || Building2;
            return (
              <article key={item.id} className="testimonial-card">
                <div className="testimonial-card-glow" />
                
                <div className="testimonial-top">
                  <div className="testimonial-author">
                    <div className="author-avatar" aria-hidden="true">
                      <IconComp size={20} />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{item.author}</h4>
                      <span className="author-role">{item.role}</span>
                    </div>
                  </div>
                  <div className="quote-badge" aria-hidden="true">
                    <Quote size={24} />
                  </div>
                </div>

                <div className="testimonial-rating-row">
                  <div className="stars-glow" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#FF9E0D" color="#FF9E0D" />
                    ))}
                  </div>
                  <span className="rating-score">{item.rating.toFixed(1)} / 5.0</span>
                  <span className="verified-stamp">
                    <ShieldCheck size={13} color="#10B981" /> Verified
                  </span>
                </div>

                <blockquote className="testimonial-quote">
                  "{item.quote}"
                </blockquote>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
