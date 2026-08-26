import React from 'react';
import { skillsData } from '../data/portfolioData';

/**
 * About — Profile bio, skill tags, and stats grid.
 * Data-driven via `profile` prop and `skillsData` from the data layer.
 */

const STATS_CONFIG = [
  { key: 'cgpa',             label: 'Ain Shams CGPA' },
  { key: 'featuredCount',    label: 'Featured Projects' },
  { key: 'internshipsCount', label: 'Trainings & Internships' },
  { key: 'certifiedStatus',  label: 'Enterprise & Trainee Exposure' }
];

export default function About({ profile }) {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>{profile.role}</h2>
          <p>{profile.bio}</p>

          <div className="skills-tags">
            {skillsData.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="stats-grid">
          {STATS_CONFIG.map(({ key, label }) => (
            <div key={key} className="stat-box">
              <div className="stat-number">{profile[key]}</div>
              <div className="stat-desc">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
