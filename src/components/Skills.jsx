import React from 'react';
import { Server, Database, Layout, Cpu, Code2, CheckCircle2 } from 'lucide-react';
import { categorizedSkillsData } from '../data/portfolioData';

/**
 * Skills — Categorized technology grid with icon badges and proficiency levels.
 * Icon mapping resolves string icon names from data to actual Lucide components.
 */

const ICON_MAP = {
  Server,
  Database,
  Layout,
  Cpu
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
        {categorizedSkillsData.map((category) => {
          const IconComponent = ICON_MAP[category.icon] || Code2;

          return (
            <div key={category.id} className="skill-category-card">
              <div className="skill-cat-header">
                <div className="skill-cat-icon" aria-hidden="true">
                  <IconComponent size={24} color="#FF6B2C" />
                </div>
                <h3>{category.category}</h3>
              </div>

              <ul className="skill-items-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item-row">
                    <div className="skill-item-info">
                      <CheckCircle2 size={16} color="#FF6B2C" aria-hidden="true" />
                      <span className="skill-item-name">{skill.name}</span>
                    </div>
                    <span className="skill-item-level">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
