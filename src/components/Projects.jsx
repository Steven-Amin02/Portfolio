import React, { useState, useMemo, useCallback } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

/**
 * Projects — Filterable project grid with category tabs.
 * Filter config is declared outside the component to avoid re-creation on each render.
 */

const FILTERS = [
  { key: 'all',      label: 'All Projects' },
  { key: 'dotnet',   label: '.NET / Full-Stack' },
  { key: 'rpa',      label: 'UiPath RPA' },
  { key: 'ai',       label: 'AI & Machine Learning' },
  { key: 'frontend', label: 'Frontend / UI' }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projectsData;
    return projectsData.filter((p) => p.category === filter);
  }, [filter]);

  const handleFilterClick = useCallback((key) => {
    setFilter(key);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Featured <span style={{ color: '#FF6B2C' }}>Projects</span></h2>
        <p>A collection of software systems, web applications, RPA workflows, and machine learning models.</p>

        {/* Filter Tabs */}
        <div className="filter-container" role="tablist" aria-label="Project category filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => handleFilterClick(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`project-card ${project.isBuilding ? 'is-building' : ''}`}
          >
            {/* Image */}
            <div className={`project-img-holder ${project.containImage ? 'contain-img' : ''}`}>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
              {project.isBuilding && (
                <span className="building-badge">Currently Building</span>
              )}
            </div>

            {/* Content */}
            <div className="project-content">
              <div className="project-tag">{project.tag}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="project-link"
              >
                {project.isBuilding ? 'In Active Development' : 'View GitHub Repository'}
                {project.isBuilding ? <Clock size={15} /> : <ArrowRight size={15} />}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
