import React, { useState, useMemo, useCallback } from 'react';
import { ArrowRight, Clock, Github, ExternalLink, Sparkles, Code2, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

/**
 * Projects — Interactive Filterable Project Grid with Flagship Highlights.
 * Features tech stack badge chips, github/external links, and category counters.
 */

const FILTERS = [
  { key: 'all',      label: 'All Projects' },
  { key: 'dotnet',   label: '.NET & Full-Stack' },
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

  // Compute item counts for each filter
  const filterCounts = useMemo(() => {
    const counts = { all: projectsData.length };
    FILTERS.forEach((f) => {
      if (f.key !== 'all') {
        counts[f.key] = projectsData.filter((p) => p.category === f.key).length;
      }
    });
    return counts;
  }, []);

  const handleFilterClick = useCallback((key) => {
    setFilter(key);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Sparkles size={13} className="badge-icon" />
            <span>FEATURED PORTFOLIO</span>
          </div>
          <h2 className="section-title">
            Engineered Systems &amp; <span className="highlight-text">Production Projects</span>
          </h2>
          <p className="section-subtitle">
            A showcase of distributed backend services, full-stack web applications, RPA automation workflows, and machine learning models.
          </p>

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
                <span>{f.label}</span>
                <span className="filter-count">{filterCounts[f.key]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.isBuilding ? 'is-building' : ''} ${project.featured ? 'is-featured' : ''}`}
            >
              {/* Card Image Holder */}
              <div className={`project-img-holder ${project.containImage ? 'contain-img' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-img-overlay" />
                
                {project.isBuilding ? (
                  <span className="status-pill status-building">
                    <Clock size={12} className="spin-slow" /> Currently Building
                  </span>
                ) : project.featured ? (
                  <span className="status-pill status-featured">
                    <Sparkles size={12} /> Flagship System
                  </span>
                ) : null}
              </div>

              {/* Card Content */}
              <div className="project-content">
                <div className="project-tag-row">
                  <span className="project-category-tag">{project.tag}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Stack Pills */}
                {project.techStack && (
                  <div className="project-tech-tags">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="project-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Link */}
                <div className="project-footer-action">
                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    {project.isBuilding ? (
                      <>
                        <span>Preview Specifications</span>
                        <ArrowRight size={15} />
                      </>
                    ) : (
                      <>
                        <Github size={15} />
                        <span>View Repository</span>
                        <ArrowRight size={15} className="link-arrow" />
                      </>
                    )}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
