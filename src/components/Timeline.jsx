import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="resume" className="about-section">
      <h2 className="section-title">Trainings &amp; Internships</h2>
      <p className="section-subtitle">Enterprise deployment, full-stack training, front-end development, and professional development programs</p>

      <div className="timeline-container">
        {/* Trainings & Internships */}
        <div>
          <h3 className="timeline-heading">
            <Briefcase size={22} color="#FF6B2C" /> Experience &amp; Trainings
          </h3>
          <div className="timeline-border">
            {experienceData.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
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
            <GraduationCap size={22} color="#FF6B2C" /> Education &amp; Credentials
          </h3>
          <div className="timeline-border">
            {educationData.map((item) => (
              <div key={item.id} className="timeline-item-short">
                <div className="timeline-dot"></div>
                <span className="timeline-period">{item.period}</span>
                <h4 className="timeline-title">{item.degree}</h4>
                <div className="timeline-org">{item.institution}</div>
              </div>
            ))}

            <div className="timeline-item-short">
              <div className="timeline-dot"></div>
              <span className="timeline-period">CERTIFICATIONS &amp; LEADERSHIP</span>
              <p className="timeline-certs">
                • IBM Full Stack Software Developer Certificate (In Progress)<br />
                • Python Programming — SprintsUp<br />
                • USAID Egyptian Pioneers Scholar<br />
                • AUC English Language Program<br />
                • EURECA Research Competition<br />
                • ASPIRE Leadership Program
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
