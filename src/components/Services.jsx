import React from 'react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div className="services-title-group">
          <h2>My <span style={{ color: '#FF6B2C' }}>Services</span></h2>
        </div>
        <p className="services-intro">
          Turning complex requirements into maintainable, high-performance, user-focused software & backend infrastructure.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={service.id} className="service-card">
            <div className="service-card-header">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-preview-box">
              <img src={service.image} alt={service.title} />
              <div className="floating-circle-arrow">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots Indicator */}
      <div className="services-dots-bar">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}
