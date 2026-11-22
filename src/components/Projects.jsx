import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {
  ArrowRight,
  Clock,
  Github,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  Zap,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { scrollToElement } from '../utils/scrollUtils';

/**
 * Projects — Interactive Filterable Project Grid + Architecture Overview Modal.
 *Clearly distinguishes completed projects, hackathon prototypes, and ongoing/planned projects.
 */

const FILTERS = [
  { key: 'all',      label: 'All Projects' },
  { key: 'dotnet',   label: '.NET & Backend' },
  { key: 'rpa',      label: 'UiPath RPA' },
  { key: 'ai',       label: 'AI, ML & Mobility' },
  { key: 'frontend', label: 'Frontend & Web' }
];

export default function Projects({ activeCategory, onCategoryChange, onSelectProjectInquiry }) {
  const [internalFilter, setInternalFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filter = activeCategory !== undefined ? activeCategory : internalFilter;

  const setFilter = useCallback((nextKey) => {
    if (onCategoryChange) {
      onCategoryChange(nextKey);
    } else {
      setInternalFilter(nextKey);
    }
  }, [onCategoryChange]);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projectsData;
    return projectsData.filter((p) => p.category === filter);
  }, [filter]);

  const filterCounts = useMemo(() => {
    const counts = { all: projectsData.length };
    FILTERS.forEach((f) => {
      if (f.key !== 'all') {
        counts[f.key] = projectsData.filter((p) => p.category === f.key).length;
      }
    });
    return counts;
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;
    document.body.classList.add('nav-locked');

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('nav-locked');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const handleInquireClick = useCallback((project) => {
    setSelectedProject(null);
    if (onSelectProjectInquiry) {
      onSelectProjectInquiry(project.title);
    }
    scrollToElement('contact', 85, 850);
  }, [onSelectProjectInquiry]);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <Sparkles size={13} className="badge-icon" aria-hidden="true" />
            <span>SELECTED PROJECTS</span>
          </div>
          <h2 className="section-title">
            Featured Work &amp; <span className="highlight-text">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            Completed backend, full-stack, RPA, and machine-learning projects alongside ongoing graduation and development work.
          </p>

          {/* Filter Buttons (WAI-ARIA Toggle Group) */}
          <div className="filter-container" role="group" aria-label="Filter projects by technology domain">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                aria-pressed={filter === f.key}
                className={`filter-btn ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                <span>{f.label}</span>
                <span className="filter-count">{filterCounts[f.key]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const hasExternalRepo = project.link && project.link.startsWith('http');

            return (
              <article
                key={project.id}
                className={`project-card ${project.isBuilding ? 'is-building' : ''} ${project.featured ? 'is-featured' : ''}`}
              >
                {/* Card Image Holder */}
                <div
                  className={`project-img-holder ${project.containImage ? 'contain-img' : ''}`}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open project overview for ${project.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} — Software project by Steven Amin`}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="340"
                  />
                  <div className="project-img-overlay" />
                  
                  {project.isBuilding ? (
                    <span className="status-pill status-building">
                      <Clock size={12} className="spin-slow" aria-hidden="true" /> {project.statusLabel || 'In Progress'}
                    </span>
                  ) : project.statusLabel === 'Hackathon Prototype' ? (
                    <span className="status-pill status-featured">
                      <Sparkles size={12} aria-hidden="true" /> Hackathon Prototype
                    </span>
                  ) : project.featured ? (
                    <span className="status-pill status-featured">
                      <Sparkles size={12} aria-hidden="true" /> Featured Project
                    </span>
                  ) : null}
                </div>

                {/* Card Content */}
                <div className="project-content">
                  <div className="project-tag-row">
                    <span className="project-category-tag">{project.tag}</span>
                  </div>

                  <h3 className="project-title">
                    <button
                      type="button"
                      className="project-title-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </button>
                  </h3>
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

                  {/* Action Links: Overview Modal + Repository / Inquiry */}
                  <div className="project-footer-action">
                    <button
                      type="button"
                      className="project-case-study-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Layers size={15} aria-hidden="true" />
                      <span>{project.isBuilding ? 'Planned Scope' : 'Project Details'}</span>
                    </button>

                    {hasExternalRepo ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Github size={15} aria-hidden="true" />
                        <span>GitHub Repo</span>
                        <ArrowRight size={15} className="link-arrow" aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleInquireClick(project)}
                        className="project-link-btn"
                      >
                        <MessageSquare size={15} aria-hidden="true" />
                        <span>Ask About Project</span>
                        <ArrowRight size={15} className="link-arrow" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Project Architecture & Scope Modal */}
      {selectedProject && (
        <div
          className="case-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="case-modal-card">
            <div className="case-modal-top">
              <div>
                <span className="project-category-tag">
                  {selectedProject.tag} {selectedProject.statusLabel ? `• ${selectedProject.statusLabel}` : ''}
                </span>
                <h3 id="case-modal-title" className="case-modal-title">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                className="case-modal-close"
                aria-label="Close project details modal"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="case-modal-body">
              <p className="case-modal-summary">{selectedProject.description}</p>

              {selectedProject.architecture && (
                <div className="case-arch-box">
                  <div className="case-arch-label">
                    <Layers size={15} color="#FF6B2C" aria-hidden="true" />
                    <span>{selectedProject.isBuilding ? 'Planned & Explored Architecture' : 'Architecture Overview'}</span>
                  </div>
                  <div className="case-arch-value">{selectedProject.architecture}</div>
                </div>
              )}

              {selectedProject.impact && (
                <div className="case-impact-box">
                  <Zap size={16} color="#10B981" aria-hidden="true" />
                  <span>{selectedProject.impact}</span>
                </div>
              )}

              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="case-highlights-section">
                  <h4 className="case-sub-heading">
                    {selectedProject.isBuilding ? 'Main Concepts & Planned Modules' : 'Engineering Focus & Implementation'}
                  </h4>
                  <ul className="case-highlights-list">
                    {selectedProject.highlights.map((pt, idx) => (
                      <li key={idx} className="case-highlight-item">
                        <CheckCircle2 size={16} color="#FF6B2C" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.techStack && (
                <div className="case-tech-section">
                  <h4 className="case-sub-heading">
                    {selectedProject.isBuilding ? 'Design & Planned Technology' : 'Technology Stack'}
                  </h4>
                  <div className="project-tech-tags">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="project-tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="case-modal-footer">
              {selectedProject.link && selectedProject.link.startsWith('http') && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-portfolio"
                >
                  <Github size={17} aria-hidden="true" />
                  <span>View Source on GitHub</span>
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              )}
              <button
                type="button"
                className="btn-hire"
                onClick={() => handleInquireClick(selectedProject)}
              >
                <MessageSquare size={16} aria-hidden="true" />
                <span>Discuss This Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
