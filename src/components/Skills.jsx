import React from 'react';
import { Server, Database, Layout, Cpu, Code2, CheckCircle2 } from 'lucide-react';
import { categorizedSkillsData } from '../data/portfolioData';

const iconMap = {
  Server: Server,
  Database: Database,
  Layout: Layout,
  Cpu: Cpu
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <div className="section-badge">TECHNICAL EXPERTISE</div>
        <h2>Skills &amp; <span style={{ color: '#FF6B2C' }}>Technologies</span></h2>
        <p>A comprehensive overview of my software engineering stack, backend frameworks, database design, and modern web development tools.</p>
      </div>

      <div className="skills-grid-container">
        {categorizedSkillsData.map((cat) => {
          const IconComponent = iconMap[cat.icon] || Code2;
          return (
            <div key={cat.id} className="skill-category-card">
              <div className="skill-cat-header">
                <div className="skill-cat-icon">
                  <IconComponent size={24} color="#FF6B2C" />
                </div>
                <h3>{cat.category}</h3>
              </div>

              <div className="skill-items-list">
                {cat.skills.map((item, idx) => (
                  <div key={idx} className="skill-item-row">
                    <div className="skill-item-info">
                      <CheckCircle2 size={16} color="#FF6B2C" className="check-icon" />
                      <span className="skill-item-name">{item.name}</span>
                    </div>
                    <span className="skill-item-level">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
