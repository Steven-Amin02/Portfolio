import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Sparkles, Award, ShieldCheck, FileText } from 'lucide-react';
import { heroTechBadges } from '../data/portfolioData';
import { scrollToElement } from '../utils/scrollUtils';

/**
 * Event-driven scroll parallax hook.
 * Only computes transforms when the user actually scrolls and the Hero is in view,
 * eliminating continuous 60fps CPU/GPU wakeups when idle or scrolled past.
 */
function useHeroMotion() {
  const layers = useRef({
    greeting: null,
    title: null,
    arch: null,
    portrait: null,
    left: null,
    right: null,
    cta: null
  });

  useEffect(() => {
    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileMq = window.matchMedia('(max-width: 900px)');
    const { current: el } = layers;
    let rafId = 0;
    let ticking = false;

    const clear = () => {
      Object.values(el).forEach((node) => {
        if (node) node.style.transform = '';
      });
    };

    const applyParallax = () => {
      ticking = false;
      if (reduceMq.matches || mobileMq.matches) return;

      const maxScroll = window.innerHeight * 1.25;
      const rawY = window.scrollY;
      if (rawY > maxScroll) return;

      const y = Math.max(rawY, 0);

      if (el.greeting) el.greeting.style.transform = `translate3d(0, ${y * 0.14}px, 0)`;
      if (el.title) el.title.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
      if (el.arch) {
        const scale = 1 + y * 0.00018;
        el.arch.style.transform = `translate3d(0, ${y * 0.05}px, 0) scale(${scale})`;
      }
      if (el.portrait) el.portrait.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
      if (el.left) el.left.style.transform = `translate3d(${-y * 0.1}px, ${y * 0.14}px, 0)`;
      if (el.right) el.right.style.transform = `translate3d(${y * 0.1}px, ${y * 0.14}px, 0)`;
      if (el.cta) el.cta.style.transform = `translateX(-50%) translate3d(0, ${y * 0.08}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking && !reduceMq.matches && !mobileMq.matches) {
        ticking = true;
        rafId = requestAnimationFrame(applyParallax);
      }
    };

    const sync = () => {
      if (reduceMq.matches || mobileMq.matches) {
        if (rafId) cancelAnimationFrame(rafId);
        ticking = false;
        clear();
      } else {
        applyParallax();
      }
    };

    sync();
    window.addEventListener('scroll', onScroll, { passive: true });
    reduceMq.addEventListener('change', sync);
    mobileMq.addEventListener('change', sync);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clear();
      window.removeEventListener('scroll', onScroll);
      reduceMq.removeEventListener('change', sync);
      mobileMq.removeEventListener('change', sync);
    };
  }, []);

  return layers;
}

export default function Hero({ profile }) {
  const layers = useHeroMotion();

  const scrollToProjects = (e) => {
    e.preventDefault();
    scrollToElement('projects', 85, 850);
  };

  const scrollToResume = (e) => {
    e.preventDefault();
    scrollToElement('resume', 85, 850);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    scrollToElement('contact', 85, 850);
  };

  return (
    <section id="home" className="hero-section">
      {/* Background ambient lighting orbs */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-mesh-grid" aria-hidden="true" />

      {/* Greeting pill */}
      <div className="hero-greeting anim-badge">
        <div
          className="parallax-layer hero-greeting-float"
          ref={(node) => { layers.current.greeting = node; }}
        >
          <span className="greeting-bubble">
            <Sparkles size={14} className="greeting-sparkle-icon" aria-hidden="true" />
            <span className="greeting-text-full">Hello! Welcome to my engineering portfolio</span>
            <span className="greeting-text-short">Welcome to my portfolio</span>
          </span>
          <svg className="spark-doodle" viewBox="0 0 36 28" fill="none" aria-hidden="true">
            <path className="spark-path" d="M2 24 C10 16, 20 8, 34 3" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
            <path className="spark-path" style={{ animationDelay: '0.38s' }} d="M8 27 C16 19, 25 11, 34 8" stroke="#FF9E0D" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Hero Title */}
      <h1 className="hero-title">
        <div
          className="parallax-layer"
          ref={(node) => { layers.current.title = node; }}
        >
          <span className="anim-title-1 hero-lead-line">
            I&apos;m <span className="hero-highlight-name">Steven Amin</span>,
          </span>
          <span className="hero-subtitle-line anim-title-2">
            <svg className="hero-doodle-underline" viewBox="0 0 80 36" fill="none" aria-hidden="true">
              <path className="spark-path" style={{ animationDelay: '0.52s' }} d="M4 28 C20 14, 40 6, 76 4" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
              <path className="spark-path" style={{ animationDelay: '0.58s' }} d="M4 34 C22 20, 44 12, 76 10" stroke="#FFA500" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            Full-Stack .NET &amp; Systems Engineer
          </span>
        </div>
      </h1>

      {/* Subtitle statement */}
      <p className="hero-subtext anim-title-2">
        Building high-availability web applications, enterprise .NET backends, automation workflows, and intelligent software.
      </p>

      {/* Hero Visual Stage */}
      <div className="hero-stage">

        {/* Floating tech badges around the portrait (Desktop Widescreen) */}
        <div className="hero-tech-orbit" aria-hidden="true">
          {heroTechBadges.slice(0, 4).map((badge, idx) => (
            <div key={idx} className={`hero-orbit-pill orbit-pill-${idx + 1}`}>
              <span className="orbit-pill-dot" style={{ backgroundColor: badge.color }} />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Left widget: Endorsement & Architecture */}
        <div className="widget-left anim-widget-l">
          <div
            className="parallax-layer hero-widget-card"
            ref={(node) => { layers.current.left = node; }}
          >
            <div className="widget-card-header">
              <ShieldCheck size={18} color="#FF6B2C" aria-hidden="true" />
              <span>Enterprise Verified</span>
            </div>
            <div className="big-double-quotes" aria-hidden="true">❝❝</div>
            <p className="widget-quote">{profile.snippet}</p>
            <div className="widget-author-tag">
              <Award size={14} color="#10B981" aria-hidden="true" />
              <span>NBE &amp; DEPI Trained</span>
            </div>
          </div>
        </div>

        {/* Central Arch Portal */}
        <div className="hero-arch-wrap anim-arch" aria-hidden="true">
          <div
            className="hero-arch-bg"
            ref={(node) => { layers.current.arch = node; }}
          >
            <div className="arch-portal-ring" />
            <div className="arch-portal-core" />
          </div>
        </div>

        {/* Hero Portrait Cutout with WebP + PNG Fallback */}
        <div className="hero-portrait-container anim-portrait">
          <div
            className="parallax-layer portrait-wrap"
            ref={(node) => { layers.current.portrait = node; }}
          >
            <picture>
              <source srcSet="/Steven-Amin-Portrait_nobg.webp" type="image/webp" />
              <img
                src="/Steven-Amin-Portrait_nobg.png"
                alt={`${profile.name} — Full-Stack .NET Developer & Software Engineer in Cairo, Egypt`}
                className="hero-portrait"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                width="413"
                height="550"
              />
            </picture>
            <div className="portrait-bottom-fade" aria-hidden="true" />
          </div>
        </div>

        {/* Right widget: Scholar & Metrics */}
        <div className="widget-right anim-widget-r">
          <div
            className="parallax-layer hero-widget-card"
            ref={(node) => { layers.current.right = node; }}
          >
            <div className="widget-card-header">
              <span className="stars-rating" aria-label="5 star rating">★★★★★</span>
              <span className="rating-pill">Top 5%</span>
            </div>
            <div className="experience-number">Dual Degree</div>
            <div className="experience-label">Ain Shams &amp; UEL Scholar</div>
            <div className="widget-submetrics">
              <span className="metric-chip">CGPA: 3.22</span>
              <span className="metric-chip">Excellence</span>
            </div>
          </div>
        </div>

        {/* High-Contrast Interactive CTA Pill */}
        <div
          className="hero-cta-pill anim-cta"
          ref={(node) => { layers.current.cta = node; }}
        >
          <a href="#projects" className="btn-portfolio anim-btn-glow" onClick={scrollToProjects}>
            <span>Explore Projects</span>
            <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </a>
          <a href="#resume" className="btn-hire btn-resume-pill" onClick={scrollToResume}>
            <FileText size={16} aria-hidden="true" />
            <span>Credentials</span>
          </a>
          <a href="#contact" className="btn-hire" onClick={scrollToContact}>
            <Mail size={16} aria-hidden="true" />
            <span>Contact Me</span>
          </a>
        </div>

      </div>
    </section>
  );
}
