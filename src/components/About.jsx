import React from 'react';
import { 
  Terminal, 
  GraduationCap, 
  Building2, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';
import { skillsData, bentoCardsData } from '../data/portfolioData';

/**
 * About — High-Impact Bento Grid Layout.
 * Combines expanded engineering bio, dual-degree program status,
 * NBE deployment internship exposure, and factual portfolio summary cards.
 */

export default function About() {
  const { bio, dualDegree, enterprise, metrics } = bentoCardsData;

  return (
    <section id="about" className="bento-about-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Sparkles size={13} className="badge-icon" aria-hidden="true" />
            <span>ABOUT ME &amp; ENGINEERING FOCUS</span>
          </div>
          <h2 className="section-title">
            Backend Engineering &amp; <span className="highlight-text">Full-Stack Development</span>
          </h2>
          <p className="section-subtitle">
            Developing maintainable backend services, full-stack web applications, and relational databases while building practical exposure to enterprise software delivery.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          
          {/* Card 1: Expanded About Me (Spans 2 columns on desktop) */}
          <div className="bento-card bento-card-main">
            <div className="bento-card-glow" aria-hidden="true" />
            <div className="bento-header">
              <div className="bento-icon-box" aria-hidden="true">
                <Terminal size={22} color="#FF6B2C" />
              </div>
              <span className="bento-tag">Backend &amp; Full-Stack .NET Developer</span>
            </div>

            <h3 className="bento-card-title">{bio.headline}</h3>
            <p className="bento-card-text">{bio.text}</p>

            <div className="bento-tech-pills">
              {skillsData.map((skill, i) => (
                <span key={i} className="bento-pill">
                  <CheckCircle2 size={13} color="#FF6B2C" aria-hidden="true" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>

            <div className="bento-footer-note">
              <Zap size={15} color="#10B981" aria-hidden="true" />
              <span>Interested in 2027 graduate software engineering roles, internships, and suitable freelance projects</span>
            </div>
          </div>

          {/* Card 2: Dual-Degree Academic Status */}
          <div className="bento-card bento-card-academic">
            <div className="bento-card-glow" aria-hidden="true" />
            <div className="bento-header">
              <div className="bento-icon-box" aria-hidden="true">
                <GraduationCap size={22} color="#3B82F6" />
              </div>
              <span className="bento-tag tag-blue">Dual-Degree Program (In Progress)</span>
            </div>

            <h3 className="bento-card-title">{dualDegree.title}</h3>
            
            <div className="academic-institutions">
              <div className="inst-item">
                <div className="inst-dot" aria-hidden="true" />
                <div>
                  <strong>{dualDegree.primaryUni}</strong>
                  <span className="inst-meta">Cairo, Egypt • 2023–2027 (expected)</span>
                </div>
              </div>
              <div className="inst-item">
                <div className="inst-dot dot-cyan" aria-hidden="true" />
                <div>
                  <strong>{dualDegree.dualUni}</strong>
                  <span className="inst-meta">Dual-Degree Partner • 2024–2027 (expected)</span>
                </div>
              </div>
            </div>

            <div className="academic-highlight-badge">
              <div className="gpa-score">{dualDegree.cgpa}</div>
              <div className="gpa-details">
                <span className="gpa-grade">{dualDegree.grade}</span>
                <span className="gpa-major">Current CGPA • Ain Shams University</span>
              </div>
            </div>
          </div>

          {/* Card 3: NBE Deployment Internship Exposure */}
          <div className="bento-card bento-card-enterprise">
            <div className="bento-card-glow" aria-hidden="true" />
            <div className="bento-header">
              <div className="bento-icon-box" aria-hidden="true">
                <Building2 size={22} color="#10B981" />
              </div>
              <span className="bento-tag tag-emerald">Internship Exposure</span>
            </div>

            <h3 className="bento-card-title">{enterprise.company}</h3>
            <div className="enterprise-role-pill">
              <span>{enterprise.role}</span>
              <span className="role-date">{enterprise.timeline}</span>
            </div>

            <p className="bento-card-text">{enterprise.details}</p>

            <div className="pipeline-flow-mini" aria-label="Release environment sequence: SIT to UAT to Production">
              <span className="flow-node">SIT</span>
              <span className="flow-arrow" aria-hidden="true">➔</span>
              <span className="flow-node">UAT</span>
              <span className="flow-arrow" aria-hidden="true">➔</span>
              <span className="flow-node node-prod">PROD</span>
            </div>
          </div>

          {/* Card 4: Portfolio Overview */}
          <div className="bento-card bento-card-metrics">
            <div className="bento-card-glow" aria-hidden="true" />
            <div className="bento-header">
              <div className="bento-icon-box" aria-hidden="true">
                <Cpu size={22} color="#F59E0B" />
              </div>
              <span className="bento-tag tag-amber">Portfolio Summary</span>
            </div>

            <div className="metrics-bento-grid">
              {metrics.map((m, idx) => (
                <div key={idx} className="metric-box-card">
                  <div className="metric-box-num">{m.value}</div>
                  <div className="metric-box-lbl">{m.label}</div>
                  <div className="metric-box-sub">{m.note}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
