import React from 'react';
import { Briefcase, GraduationCap, Award, Sparkles, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';

/**
 * Timeline — Interactive Trajectory & Credentials Section.
 * Renders dual tracks for enterprise experience and academic degrees,
 * followed by a full-width showcase for accredited Certifications & Training.
 */

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
            Experience, Education &amp; <span className="highlight-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Enterprise software deployment at the National Bank of Egypt, high-performance .NET training through DEPI, dual-degree honors, and specialized accredited diplomas.
          </p>
        </div>

        {/* Dual-Column Layout: Experience & Education */}
        <div className="timeline-grid-layout">
          
          {/* Column 1: Enterprise Experience & Internships */}
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

          {/* Column 2: Academic Degrees */}
          <div className="timeline-column">
            <div className="timeline-column-header">
              <div className="timeline-col-icon-box icon-box-blue">
                <GraduationCap size={20} color="#3B82F6" />
              </div>
              <h3>Academic Education &amp; Honors</h3>
            </div>

            <div className="pipeline-track">
              {educationData.map((item, idx) => (
                <div key={item.id} className="pipeline-node-card">
                  <div className="node-indicator">
                    <div className="node-dot dot-blue" />
                    {idx < educationData.length - 1 && <div className="node-line" />}
                  </div>

                  <div className="node-body">
                    <span className="node-period-badge badge-blue">{item.period}</span>
                    <h4 className="node-title">{item.degree}</h4>
                    <div className="node-org-name">{item.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dedicated Full-Width Certifications & Training Showcase */}
        <div id="certifications" className="certifications-showcase-wrap">
          <div className="cert-showcase-header">
            <div className="section-badge">
              <Award size={13} className="badge-icon" />
              <span>ACCREDITED CREDENTIALS</span>
            </div>
            <h3 className="cert-showcase-title">
              Certifications &amp; <span className="highlight-text">Specialized Training</span>
            </h3>
            <p className="cert-showcase-subtitle">
              Industry-accredited diplomas, professional engineering certifications, and international qualifications.
            </p>
          </div>

          <div className="certifications-cards-grid">
            {certificationsData.map((cert) => (
              <div 
                key={cert.id} 
                className={`cert-card-item ${cert.status === 'In Progress' ? 'is-in-progress' : ''}`}
              >
                <div className="cert-card-top">
                  <div className="cert-issuer-tag">
                    <Award size={14} className="cert-issuer-icon" />
                    <span>{cert.issuer}</span>
                  </div>
                  <span className={`cert-badge-pill ${cert.status === 'In Progress' ? 'pill-progress' : 'pill-done'}`}>
                    {cert.status === 'In Progress' && <Clock size={11} className="spin-slow" />}
                    <span>{cert.date}</span>
                  </span>
                </div>

                <h4 className="cert-card-name">{cert.title}</h4>
                
                {cert.highlight && (
                  <div className="cert-card-metric">
                    <CheckCircle2 size={13} color="#FF6B2C" />
                    <span>{cert.highlight}</span>
                  </div>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="cert-card-chips">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="cert-skill-chip">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
