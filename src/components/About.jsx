import React from 'react';
import { 
  Terminal, 
  GraduationCap, 
  Building2, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight, 
  Award, 
  Sparkles,
  Zap
} from 'lucide-react';
import { skillsData, bentoCardsData } from '../data/portfolioData';

/**
 * About — High-Impact Bento Grid Layout.
 * Combines core engineering philosophy, dual degree credentials,
 * enterprise NBE internship experience, and key measurable metrics.
 */

export default function About({ profile }) {
  const { bio, dualDegree, enterprise, metrics } = bentoCardsData;

  return (
    <section id="about" className="bento-about-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Sparkles size={13} className="badge-icon" />
            <span>ENGINEERING PROFILE &amp; IDENTITY</span>
          </div>
          <h2 className="section-title">
            Architecting Robust Systems <span className="highlight-text">From Kernel to Cloud</span>
          </h2>
          <p className="section-subtitle">
            Bridging rigorous computer science fundamentals with modern .NET ecosystem engineering, enterprise deployment workflows, and intelligent automation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          
          {/* Card 1: Core Bio & Architectural Philosophy (Spans 2 columns on desktop) */}
          <div className="bento-card bento-card-main">
            <div className="bento-card-glow" />
            <div className="bento-header">
              <div className="bento-icon-box">
                <Terminal size={22} color="#FF6B2C" />
              </div>
              <span className="bento-tag">Full-Stack &amp; Systems Specialization</span>
            </div>

            <h3 className="bento-card-title">{bio.headline}</h3>
            <p className="bento-card-text">{bio.text}</p>

            <div className="bento-tech-pills">
              {skillsData.map((skill, i) => (
                <span key={i} className="bento-pill">
                  <CheckCircle2 size={13} color="#FF6B2C" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>

            <div className="bento-footer-note">
              <Zap size={15} color="#10B981" />
              <span>Practicing SOLID Principles, Layered Architecture &amp; Clean Code</span>
            </div>
          </div>

          {/* Card 2: Dual Degree Academic Credentials */}
          <div className="bento-card bento-card-academic">
            <div className="bento-card-glow" />
            <div className="bento-header">
              <div className="bento-icon-box">
                <GraduationCap size={22} color="#3B82F6" />
              </div>
              <span className="bento-tag tag-blue">Academic Excellence</span>
            </div>

            <h3 className="bento-card-title">{dualDegree.title}</h3>
            
            <div className="academic-institutions">
              <div className="inst-item">
                <div className="inst-dot" />
                <div>
                  <strong>{dualDegree.primaryUni}</strong>
                  <span className="inst-meta">Cairo, Egypt • {dualDegree.timeline}</span>
                </div>
              </div>
              <div className="inst-item">
                <div className="inst-dot dot-cyan" />
                <div>
                  <strong>{dualDegree.dualUni}</strong>
                  <span className="inst-meta">London, UK • Dual Degree Partner</span>
                </div>
              </div>
            </div>

            <div className="academic-highlight-badge">
              <div className="gpa-score">{dualDegree.cgpa}</div>
              <div className="gpa-details">
                <span className="gpa-grade">{dualDegree.grade}</span>
                <span className="gpa-major">Software Engineering Honors</span>
              </div>
            </div>
          </div>

          {/* Card 3: Enterprise Deployment & NBE Internship */}
          <div className="bento-card bento-card-enterprise">
            <div className="bento-card-glow" />
            <div className="bento-header">
              <div className="bento-icon-box">
                <Building2 size={22} color="#10B981" />
              </div>
              <span className="bento-tag tag-emerald">Enterprise Deployment</span>
            </div>

            <h3 className="bento-card-title">{enterprise.company}</h3>
            <div className="enterprise-role-pill">
              <span>{enterprise.role}</span>
              <span className="role-date">{enterprise.timeline}</span>
            </div>

            <p className="bento-card-text">{enterprise.details}</p>

            <div className="pipeline-flow-mini">
              <span className="flow-node">SIT</span>
              <span className="flow-arrow">➔</span>
              <span className="flow-node">UAT</span>
              <span className="flow-arrow">➔</span>
              <span className="flow-node node-prod">PROD</span>
            </div>
          </div>

          {/* Card 4: Quantitative Impact Metrics */}
          <div className="bento-card bento-card-metrics">
            <div className="bento-card-glow" />
            <div className="bento-header">
              <div className="bento-icon-box">
                <Cpu size={22} color="#F59E0B" />
              </div>
              <span className="bento-tag tag-amber">Performance Metrics</span>
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
