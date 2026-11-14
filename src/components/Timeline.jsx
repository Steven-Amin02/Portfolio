import React, { useState, useMemo } from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  experienceData,
  educationData,
  scholarshipsData,
  certificationsData
} from '../data/portfolioData';

/**
 * ExperienceSection — Section 3 in Recommended Portfolio Order.
 * Presents NBE deployment internship exposure, DEPI full-stack .NET training, and Sprints Python training.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="timeline-section">
      <div className="section-container">
        <div className="section-header-centered">
          <div className="section-badge">
            <Briefcase size={13} className="badge-icon" aria-hidden="true" />
            <span>INDUSTRY EXPERIENCE &amp; TRAINING</span>
          </div>
          <h2 className="section-title">
            Practical Experience &amp; <span className="highlight-text">Technical Training</span>
          </h2>
          <p className="section-subtitle">
            Enterprise release workflow exposure at the National Bank of Egypt alongside structured .NET and Python developer training programs.
          </p>
        </div>

        <div className="timeline-column experience-single-card">
          <div className="timeline-column-header">
            <div className="timeline-col-icon-box" aria-hidden="true">
              <Briefcase size={20} color="#FF6B2C" />
            </div>
            <h3>Internships &amp; Developer Training</h3>
          </div>

          <div className="pipeline-track">
            {experienceData.map((item, idx) => (
              <div key={item.id} className="pipeline-node-card">
                <div className="node-indicator" aria-hidden="true">
                  <div className="node-dot" />
                  {idx < experienceData.length - 1 && <div className="node-line" />}
                </div>

                <div className="node-body">
                  <div className="node-badge-row">
                    {item.period && (
                      <span className="node-period-badge">{item.period}</span>
                    )}
                    {item.note && (
                      <span className="node-period-badge badge-blue">{item.note}</span>
                    )}
                  </div>
                  <h4 className="node-title">{item.title}</h4>
                  <div className="node-org-name">{item.company}</div>
                  {item.bullets && item.bullets.length > 0 ? (
                    <ul className="node-bullet-list">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="node-bullet-item">
                          <CheckCircle2 size={14} color="#FF6B2C" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="node-description">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * EducationAndCertifications — Sections 6 & 7 in Recommended Portfolio Order.
 * Presents Dual-Degree Education (in progress), Scholarships, and an expandable Achievements & Certifications showcase.
 */
export function EducationAndCertifications() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  const curatedCerts = useMemo(
    () => certificationsData.filter((c) => c.curated),
    []
  );

  const visibleCerts = showAllCerts ? certificationsData : curatedCerts;
  const hiddenCount = certificationsData.length - curatedCerts.length;

  return (
    <section id="education" className="timeline-section">
      <div className="section-container">
        {/* Section Header: Education & Scholarships */}
        <div className="section-header-centered">
          <div className="section-badge">
            <GraduationCap size={13} className="badge-icon" aria-hidden="true" />
            <span>EDUCATION &amp; SCHOLARSHIPS</span>
          </div>
          <h2 className="section-title">
            Academic Background &amp; <span className="highlight-text">Scholarships</span>
          </h2>
          <p className="section-subtitle">
            Undergraduate dual-degree studies in Computer Science and Software Engineering (expected graduation: 2027) and academic scholarship awards.
          </p>
        </div>

        {/* Dual-Column Layout: Degrees (In Progress) & Scholarships */}
        <div className="timeline-grid-layout">
          {/* Column 1: Undergraduate Degrees (In Progress) */}
          <div className="timeline-column">
            <div className="timeline-column-header">
              <div className="timeline-col-icon-box icon-box-blue" aria-hidden="true">
                <GraduationCap size={20} color="#3B82F6" />
              </div>
              <h3>Dual-Degree Education (In Progress)</h3>
            </div>

            <div className="pipeline-track">
              {educationData.map((item, idx) => (
                <div key={item.id} className="pipeline-node-card">
                  <div className="node-indicator" aria-hidden="true">
                    <div className="node-dot dot-blue" />
                    {idx < educationData.length - 1 && <div className="node-line" />}
                  </div>

                  <div className="node-body">
                    <span className="node-period-badge badge-blue">{item.period}</span>
                    <h4 className="node-title">{item.degree}</h4>
                    <div className="node-org-name">{item.institution}</div>
                    {item.details && (
                      <p className="node-description">{item.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Scholarships */}
          <div className="timeline-column">
            <div className="timeline-column-header">
              <div className="timeline-col-icon-box" aria-hidden="true">
                <Award size={20} color="#FF6B2C" />
              </div>
              <h3>Scholarships &amp; Selections</h3>
            </div>

            <div className="pipeline-track">
              {scholarshipsData.map((sch, idx) => (
                <div key={sch.id} className="pipeline-node-card">
                  <div className="node-indicator" aria-hidden="true">
                    <div className="node-dot" />
                    {idx < scholarshipsData.length - 1 && <div className="node-line" />}
                  </div>

                  <div className="node-body">
                    <span className="node-period-badge">{sch.status}</span>
                    <h4 className="node-title">{sch.title}</h4>
                    <div className="node-org-name">{sch.issuer}</div>
                    <p className="node-description">{sch.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 7: Achievements & Certifications (Curated + Expandable View) */}
        <div id="certifications" className="certifications-showcase-wrap">
          <div className="cert-showcase-header">
            <div className="section-badge">
              <Sparkles size={13} className="badge-icon" aria-hidden="true" />
              <span>ACHIEVEMENTS &amp; CERTIFICATIONS</span>
            </div>
            <h3 className="cert-showcase-title">
              Curated Credentials &amp; <span className="highlight-text">Additional Training</span>
            </h3>
            <p className="cert-showcase-subtitle">
              Showing {visibleCerts.length} of {certificationsData.length} internships, scholarships, hackathons, and technical training programs.
            </p>
          </div>

          <div className="certifications-cards-grid">
            {visibleCerts.map((cert) => (
              <div
                key={cert.id}
                className={`cert-card-item ${cert.status === 'In Progress' ? 'is-in-progress' : ''}`}
              >
                <div className="cert-card-top">
                  <div className="cert-issuer-tag">
                    <Award size={14} className="cert-issuer-icon" aria-hidden="true" />
                    <span>{cert.issuer}</span>
                  </div>
                  <span className={`cert-badge-pill ${cert.status === 'In Progress' ? 'pill-progress' : 'pill-done'}`}>
                    {cert.status === 'In Progress' && <Clock size={11} className="spin-slow" aria-hidden="true" />}
                    <span>{cert.date}</span>
                  </span>
                </div>

                <h4 className="cert-card-name">{cert.title}</h4>

                {cert.highlight && (
                  <div className="cert-card-metric">
                    <CheckCircle2 size={13} color="#FF6B2C" aria-hidden="true" />
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

          {hiddenCount > 0 && (
            <div className="cert-expand-action-wrap">
              <button
                type="button"
                className="cert-expand-btn"
                aria-expanded={showAllCerts}
                onClick={() => setShowAllCerts((prev) => !prev)}
              >
                {showAllCerts ? (
                  <>
                    <span>Show Curated Selection ({curatedCerts.length})</span>
                    <ChevronUp size={16} aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <span>Show All Training &amp; Credentials (+{hiddenCount} More)</span>
                    <ChevronDown size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Timeline() {
  return (
    <>
      <ExperienceSection />
      <EducationAndCertifications />
    </>
  );
}
