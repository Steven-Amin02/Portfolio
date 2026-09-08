import React, { useState } from 'react';
import { Server, Database, Layout, Cpu, Code2, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { categorizedSkillsData } from '../data/portfolioData';

/**
 * Skills — Interactive Technical Matrix.
 * Displays categorized proficiencies with glassmorphism cards,
 * level indicator tags, and glowing category accents.
 */

const ICON_MAP = {
  Server,
  Database,
  Layout,
  Cpu
};

const CATEGORY_ACCENTS = {
  backend: { border: 'rgba(255, 107, 44, 0.4)', text: '#FF6B2C', bg: 'rgba(255, 107, 44, 0.1)' },
  database: { border: 'rgba(59, 130, 246, 0.4)', text: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)' },
  frontend: { border: 'rgba(6, 182, 212, 0.4)', text: '#06B6D4', bg: 'rgba(6, 182, 212, 0.1)' },
  devops: { border: 'rgba(16, 185, 129, 0.4)', text: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' }
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const displayedCategories = activeFilter === 'all'
    ? categorizedSkillsData
    : categorizedSkillsData.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Sparkles size={13} className="badge-icon" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="section-title">
            Engineering Stack &amp; <span className="highlight-text">Core Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my software engineering stack, backend frameworks, database design, and modern web development tools.
          </p>

          {/* Filter Pills */}
          <div className="skills-filter-tabs">
            <button
              className={`filter-pill-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Domains
            </button>
            {categorizedSkillsData.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.category.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid-container">
          {displayedCategories.map((category) => {
            const IconComponent = ICON_MAP[category.icon] || Code2;
            const accent = CATEGORY_ACCENTS[category.id] || CATEGORY_ACCENTS.backend;

            return (
              <div 
                key={category.id} 
                className="skill-category-card"
                style={{ '--cat-accent': accent.text, '--cat-border': accent.border }}
              >
                <div className="skill-cat-header">
                  <div className="skill-cat-icon" style={{ background: accent.bg }}>
                    <IconComponent size={24} color={accent.text} />
                  </div>
                  <div>
                    <h3 className="skill-cat-title">{category.category}</h3>
                    <span className="skill-cat-sub">{category.skills.length} core competencies</span>
                  </div>
                </div>

                <ul className="skill-items-list">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="skill-item-row">
                      <div className="skill-item-info">
                        <CheckCircle2 size={16} color={accent.text} aria-hidden="true" />
                        <span className="skill-item-name">{skill.name}</span>
                      </div>
                      <span className="skill-item-level" style={{ color: accent.text, borderColor: accent.border }}>
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
