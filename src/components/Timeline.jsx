import React from 'react';
import { Briefcase, GraduationCap, Award, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

/**
 * Timeline — Interactive Experience & Education Pipeline.
 * Renders dual tracks for enterprise trainings/internships and dual-degree academic credentials.
 */

const CERTIFICATIONS = [
  'IBM Full Stack Software Developer Certificate (Coursera - In Progress)',
  'USAID Egyptian Pioneers Scholarship Program',
  'Programming with Python — Sprints',
  'DataCamp Data Science Scholarship',
  'ASPIRE Leadership Program (Feb 2024 – Jan 2025)',
  'AUC Continuing Education — Professional English',
  'EURECA Research Competition (Feb 2025)'
];

export default function Timeline() {
  return (
    <section id="resume" className="timeline-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Sparkles size={13} className="badge-icon" />
            <span>TRAJECTORY &amp; EXPERTISE</span>
          </div>
          <h2 className="section-title">
            Experience, Trainings &amp; <span className="highlight-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Enterprise software deployment at the National Bank of Egypt, high-performance .NET training through DEPI, and dual-degree computer science honors.
          </p>
        </div>

        <div className="timeline-grid-layout">
          
          {/* Column 1: Enterprise Experience & Trainings */}
          <div className="timeline-column">
            <div className="timeline-column-header">
              <div className="timeline-col-icon-box">
                <Briefcase size={20} color="#FF6B2C" />
              </div>
              <h3>Experience &amp; Internships</h3>
            </div>

            <div className="pipeline-track">
              {experienceData.map((item, idx) => (
                <div key={item.id} className="pipeline-node-card">
                  <div className="node-indicator">
                    <div className="node-dot" />
                    {idx < experienceData.length - 1 && <div className="node-line" />}
                  </div>

                  <div className="node-body">
                    {item.period && (
                      <span className="node-period-badge">{item.period}</span>
                    )}
                    <h4 className="node-title">{item.title}</h4>
                    <div className="node-org-name">{item.company}</div>
                    <p className="node-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Certifications */}
          <div className="timeline-column">
            <div className="timeline-column-header">
              <div className="timeline-col-icon-box icon-box-blue">
                <GraduationCap size={20} color="#3B82F6" />
              </div>
              <h3>Education &amp; Credentials</h3>
            </div>

            <div className="pipeline-track">
              {educationData.map((item, idx) => (
                <div key={item.id} className="pipeline-node-card">
                  <div className="node-indicator">
                    <div className="node-dot dot-blue" />
                    <div className="node-line" />
                  </div>

                  <div className="node-body">
                    <span className="node-period-badge badge-blue">{item.period}</span>
                    <h4 className="node-title">{item.degree}</h4>
                    <div className="node-org-name">{item.institution}</div>
                  </div>
                </div>
              ))}

              {/* Certifications Block */}
              <div className="pipeline-node-card certs-card-node">
                <div className="node-indicator">
                  <div className="node-dot dot-amber" />
                </div>

                <div className="node-body">
                  <span className="node-period-badge badge-amber">
                    <Award size={12} /> CERTIFICATIONS &amp; SCHOLARSHIPS
                  </span>
                  <div className="certs-chips-list">
                    {CERTIFICATIONS.map((cert, i) => (
                      <div key={i} className="cert-chip-item">
                        <CheckCircle2 size={13} color="#FF6B2C" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
