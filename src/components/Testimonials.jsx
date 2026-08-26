import React from 'react';
import { Quote, Building2, Code, GraduationCap } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

/**
 * Testimonials — Enterprise & Academic recommendations grid.
 * Data-driven from testimonialsData in portfolioData.js.
 */

const ICON_MAP = {
  Building2,
  Code,
  GraduationCap
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-header">
        <h2>Testimonials That Speak to <span className="highlight">My Results</span></h2>
        <p>Endorsements and official recommendations from enterprise leadership, internship managers, and academic supervisors.</p>
      </div>

      <div className="testimonials-grid">
        {testimonialsData.map((item) => {
          const IconComp = ICON_MAP[item.icon] || Building2;
          return (
            <article key={item.id} className="testimonial-card">
              <div>
                <div className="testimonial-top">
                  <div className="testimonial-author">
                    <div className="author-avatar" aria-hidden="true">
                      <IconComp size={22} />
                    </div>
                    <div className="author-info">
                      <h4>{item.author}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <div className="big-quote-icon" aria-hidden="true">
                    <Quote size={36} />
                  </div>
                </div>
                <div className="testimonial-rating" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                  <span className="stars" aria-hidden="true">★★★★★</span>
                  <span className="rating-num">{item.rating.toFixed(1)}</span>
                </div>
                <blockquote className="testimonial-text">
                  "{item.quote}"
                </blockquote>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
