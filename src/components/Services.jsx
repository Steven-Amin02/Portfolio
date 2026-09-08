import React from 'react';
import { ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

/**
 * Services — Engineering Solutions Grid.
 * Showcases core services with photography preview cards,
 * architectural tags, and radiant hover micro-interactions.
 */

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        
        <div className="services-header">
          <div className="services-header-left">
            <div className="section-badge">
              <Sparkles size={13} className="badge-icon" />
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
            <article key={service.id} className="service-card">
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
                  alt={service.title}
                  loading="lazy"
                />
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
