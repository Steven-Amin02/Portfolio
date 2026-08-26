import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

/**
 * Timeline — Split-panel resume section: Trainings & Internships + Education.
 * Data-driven from experienceData and educationData in the data layer.
 */

const CERTIFICATIONS = [
  'IBM Full Stack Software Developer Certificate (Coursera - In Progress)',
  'Programming with Python — Sprints',
  'USAID Egyptian Pioneers Scholarship Program',
  'DataCamp Data Science Scholarship',
  'AUC Continuing Education — English & Communication',
  'ASPIRE Leadership Program (Feb 2024 – Jan 2025)',
  'EURECA Research Competition (Feb 2025)'
];

export default function Timeline() {
  return (
    <section id="resume" className="about-section">
      <h2 className="section-title">Trainings &amp; Internships</h2>
      <p className="section-subtitle">
        Enterprise deployment, full-stack training, front-end development, and professional development programs
      </p>

      <div className="timeline-container">
        {/* Trainings & Internships */}
        <div>
          <h3 className="timeline-heading">
            <Briefcase size={22} color="#FF6B2C" aria-hidden="true" /> Experience &amp; Trainings
          </h3>
          <div className="timeline-border">
            {experienceData.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot" />
                {item.period && (
                  <span className="timeline-period">{item.period}</span>
                )}
                <h4 className="timeline-title">{item.title}</h4>
                <div className="timeline-org">{item.company}</div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div>
          <h3 className="timeline-heading">
            <GraduationCap size={22} color="#FF6B2C" aria-hidden="true" /> Education &amp; Credentials
          </h3>
          <div className="timeline-border">
            {educationData.map((item) => (
              <div key={item.id} className="timeline-item-short">
                <div className="timeline-dot" />
                <span className="timeline-period">{item.period}</span>
                <h4 className="timeline-title">{item.degree}</h4>
                <div className="timeline-org">{item.institution}</div>
              </div>
            ))}

            <div className="timeline-item-short">
              <div className="timeline-dot" />
              <span className="timeline-period">CERTIFICATIONS &amp; LEADERSHIP</span>
              <p className="timeline-certs">
                {CERTIFICATIONS.map((cert, i) => (
                  <React.Fragment key={i}>
                    • {cert}
                    {i < CERTIFICATIONS.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
