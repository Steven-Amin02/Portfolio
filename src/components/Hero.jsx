import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Scroll-linked parallax + idle float. Transforms live on inner layers so
 * CSS entrance animations on the outer wrappers are not overwritten.
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
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return undefined;

    const { current: el } = layers;
    let rafId = 0;

    const loop = (now) => {
      const y = Math.min(Math.max(window.scrollY, 0), window.innerHeight * 1.35);
      const bob = Math.sin(now / 680) * 8;
      const spark = Math.sin(now / 430) * 4;

      if (el.greeting) {
        el.greeting.style.transform = `translate3d(0, ${y * 0.2 + bob}px, 0)`;
      }
      if (el.title) {
        el.title.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
      }
      if (el.arch) {
        const scale = 1 + y * 0.00028;
        el.arch.style.transform = `translate3d(0, ${y * 0.08}px, 0) scale(${scale})`;
      }
      if (el.portrait) {
        el.portrait.style.transform = `translate3d(0, ${y * 0.26}px, 0)`;
      }
      if (el.left) {
        el.left.style.transform = `translate3d(${-y * 0.16}px, ${y * 0.2 + spark}px, 0)`;
      }
      if (el.right) {
        el.right.style.transform = `translate3d(${y * 0.16}px, ${y * 0.2 - spark}px, 0)`;
      }
      if (el.cta) {
        el.cta.style.transform = `translateX(-50%) translate3d(0, ${y * 0.14}px, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return layers;
}

/**
 * Hero — JCREA-style landing stage: greeting, headline, arch, portrait,
 * floating widgets, glass CTA, and scroll parallax.
 */
export default function Hero({ profile }) {
  const layers = useHeroMotion();
  const firstName = profile.name.split(' ')[0];
  const roleHeadline = profile.role.split('&')[0].trim();

  return (
    <section id="home" className="hero-section">

      <div className="hero-greeting anim-badge">
        <div
          className="parallax-layer"
          ref={(node) => { layers.current.greeting = node; }}
        >
          <span className="greeting-bubble">Hello!</span>
          <svg className="spark-doodle" viewBox="0 0 36 28" fill="none" aria-hidden="true">
            <path className="spark-path" d="M2 24 C10 16, 20 8, 34 3" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
            <path className="spark-path" style={{ animationDelay: '0.38s' }} d="M8 27 C16 19, 25 11, 34 8" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      <h1 className="hero-title">
        <div
          className="parallax-layer"
          ref={(node) => { layers.current.title = node; }}
        >
          <span className="anim-title-1" style={{ display: 'block' }}>
            I&apos;m <span className="highlight">{firstName}</span>{','}
          </span>
          <span className="hero-subtitle-line anim-title-2">
            <svg className="hero-doodle-underline" viewBox="0 0 80 36" fill="none" aria-hidden="true">
              <path className="spark-path" style={{ animationDelay: '0.52s' }} d="M4 28 C20 14, 40 6, 76 4" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
              <path className="spark-path" style={{ animationDelay: '0.58s' }} d="M4 34 C22 20, 44 12, 76 10" stroke="#FF6B2C" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            {roleHeadline}
          </span>
        </div>
      </h1>

      <div className="hero-stage">

        <div className="widget-left anim-widget-l">
          <div
            className="parallax-layer"
            ref={(node) => { layers.current.left = node; }}
          >
            <div className="big-double-quotes">❝❝</div>
            <p>{profile.snippet}</p>
          </div>
        </div>

        <div className="hero-arch-wrap anim-arch">
          <div
            className="hero-arch-bg"
            ref={(node) => { layers.current.arch = node; }}
          />
        </div>

        <div className="hero-portrait-container anim-portrait">
          <div
            className="parallax-layer"
            ref={(node) => { layers.current.portrait = node; }}
          >
            <img
              src="/Steven-Amin-Portrait_nobg.png"
              alt={`${profile.name} portrait`}
              className="hero-portrait"
              loading="eager"
            />
          </div>
        </div>

        <div className="widget-right anim-widget-r">
          <div
            className="parallax-layer"
            ref={(node) => { layers.current.right = node; }}
          >
            <span className="stars-rating" aria-label="5 star rating">★★★★★</span>
            <span className="experience-number">Fresh Grad</span>
            <span className="experience-label">Full-Stack .NET Developer</span>
          </div>
        </div>

        <div
          className="hero-cta-pill anim-cta"
          ref={(node) => { layers.current.cta = node; }}
        >
          <a href="#projects" className="btn-portfolio anim-btn-glow">
            Portfolio <ArrowUpRight size={18} strokeWidth={2.5} />
          </a>
          <a href={`mailto:${profile.email}`} className="btn-hire">Hire me</a>
        </div>

      </div>
    </section>
  );
}
