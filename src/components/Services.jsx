import React, { useCallback } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { scrollToElement } from '../utils/scrollUtils';

/**
 * Services — Interactive Engineering Solutions Grid.
 * Clicking any service card filters the relevant project portfolio
 * or navigates directly to enterprise deployment experience.
 */

export default function Services({ onSelectServiceCategory }) {
  const handleServiceAction = useCallback((service) => {
    if (service.filterCategory && onSelectServiceCategory) {
      onSelectServiceCategory(service.filterCategory);
    }
    scrollToElement(service.targetSection || 'projects', 85, 850);
  }, [onSelectServiceCategory]);

  return (
    <section id="services" className="services-section">
      <div className="section-container">

        <div className="services-header">
          <div className="services-header-left">
            <div className="section-badge">
              <Sparkles size={13} className="badge-icon" aria-hidden="true" />
              <span>CAPABILITIES &amp; EXPERTISE</span>
            </div>
            <h2 className="section-title">
              Specialized Services &amp; <span className="highlight-text">Engineering Offerings</span>
            </h2>
          </div>
          <p className="services-intro">
            Turning complex requirements into maintainable, high-performance, user-focused software and enterprise backend infrastructure.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="service-card service-card-interactive"
              onClick={() => handleServiceAction(service)}
              role="button"
              tabIndex={0}
              aria-label={`${service.title} — ${service.actionLabel || 'Explore related work'}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleServiceAction(service);
                }
              }}
            >
              <div className="service-card-header">
                <div className="service-tags-row">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag-pill">{tag}</span>
                  ))}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
              </div>

              <div className="service-preview-box">
                <img
                  src={service.image}
                  alt={`${service.title} — Software engineering service by Steven Amin`}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="260"
                />
                <span className="service-action-hint">
                  {service.actionLabel || 'Explore Work'}
                </span>
                <div className="floating-circle-arrow" aria-hidden="true">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
