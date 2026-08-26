import React from 'react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

/**
 * Services — Grid of service offerings with image previews.
 * Fully data-driven from `servicesData` in the data layer.
 */
export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div className="services-title-group">
          <h2>My <span style={{ color: '#FF6B2C' }}>Services</span></h2>
        </div>
        <p className="services-intro">
          Turning complex requirements into maintainable, high-performance, user-focused software &amp; backend infrastructure.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <article key={service.id} className="service-card">
            <div className="service-card-header">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-preview-box">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <div className="floating-circle-arrow" aria-hidden="true">
                <ArrowRight size={20} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
