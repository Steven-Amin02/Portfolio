import React from 'react';
import { Quote, Building2, Code, GraduationCap } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

const iconMap = {
  Building2: Building2,
  Code: Code,
  GraduationCap: GraduationCap
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
          const IconComp = iconMap[item.icon] || Building2;
          return (
            <div key={item.id} className="testimonial-card">
              <div>
                <div className="testimonial-top">
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <IconComp size={22} />
                    </div>
                    <div className="author-info">
                      <h4>{item.author}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <div className="big-quote-icon">
                    <Quote size={36} />
                  </div>
                </div>
                <div className="testimonial-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-num">{item.rating.toFixed(1)}</span>
                </div>
                <p className="testimonial-text">
                  "{item.quote}"
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
