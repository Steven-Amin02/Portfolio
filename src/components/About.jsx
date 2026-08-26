import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function About({ profile }) {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Full-Stack Software Engineer &amp; .NET Specialist</h2>
          <p>{profile.bio}</p>

          <div className="skills-tags">
            {skillsData.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">{profile.cgpa}</div>
            <div className="stat-desc">Ain Shams CGPA</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{profile.featuredCount}</div>
            <div className="stat-desc">Featured Projects</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{profile.internshipsCount}</div>
            <div className="stat-desc">Trainings &amp; Internships</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{profile.certifiedStatus}</div>
            <div className="stat-desc">Enterprise &amp; Trainee Exposure</div>
          </div>
        </div>
      </div>
    </section>
  );
}
