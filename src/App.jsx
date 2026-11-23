import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { ExperienceSection, EducationAndCertifications } from './components/Timeline';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import DiscussionCTA from './components/DiscussionCTA';
import MarqueeTicker from './components/MarqueeTicker';
import Footer from './components/Footer';
import { initialProfileData, testimonialsData } from './data/portfolioData';

/**
 * Ordered section IDs matching Section 7 (Recommended Website Section Order):
 * 1. Hero / Introduction (#home)
 * 2. About Me (#about)
 * 3. Experience (#experience)
 * 4. Featured Projects (#projects)
 * 5. Technical Skills (#skills & #services)
 * 6. Education & Scholarships (#education)
 * 7. Achievements & Certifications (#certifications)
 * 8. Contact (#faq & #contact)
 */
const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'services',
  'education',
  'certifications',
  'faq',
  'contact'
];

/** Map sub-sections without dedicated navbar links to their logical parent nav item */
const NAV_SECTION_MAP = {
  services: 'skills',
  certifications: 'education',
  faq: 'contact'
};

/** Header offset for scroll-spy calculation (px) */
const SCROLL_SPY_OFFSET = 160;

/** IntersectionObserver threshold for scroll-reveal animations */
const REVEAL_THRESHOLD = 0.1;

const THEME_STORAGE_KEY = 'portfolio-theme-mode';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // Ignore storage access errors in strict privacy modes
  }
  return 'light';
}

export default function App() {
  const [profile] = useState(initialProfileData);
  const [activeSection, setActiveSection] = useState('home');
  const [projectCategory, setProjectCategory] = useState('all');
  const [inquiryTopic, setInquiryTopic] = useState('');
  const [theme, setTheme] = useState(getInitialTheme);

  // Sync theme with HTML data attribute and browser meta tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0A0D14' : '#F8F9FC');
    }
  }, [theme]);

  // Only persist theme when the user explicitly toggles it
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Ignore storage write errors
      }
      return next;
    });
  }, []);

  // rAF-throttled Scroll-Spy: track which section is currently in view without layout thrashing
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;
      const scrollY = window.scrollY;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + scrollY;
          if (scrollY >= top - SCROLL_SPY_OFFSET) {
            const mappedNavId = NAV_SECTION_MAP[id] || id;
            setActiveSection((prev) => (prev === mappedNavId ? prev : mappedNavId));
            break;
          }
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver: one-shot scroll-reveal for `.reveal` elements
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      revealElements.forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: REVEAL_THRESHOLD }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-main-root">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        onToggleTheme={toggleTheme} 
      />

      <main id="main-content">
        {/* 1. Hero / Introduction */}
        <Hero profile={profile} />

        {/* 2. About Me */}
        <div className="reveal"><About /></div>

        {/* 3. Experience (NBE, DEPI, relevant training) */}
        <div className="reveal reveal-delay-1"><ExperienceSection /></div>

        {/* 4. Featured Projects */}
        <div className="reveal">
          <Projects
            activeCategory={projectCategory}
            onCategoryChange={setProjectCategory}
            onSelectProjectInquiry={setInquiryTopic}
          />
        </div>

        {/* 5. Technical Skills & Engineering Focus */}
        <div className="reveal reveal-delay-1"><Skills /></div>
        <div className="reveal">
          <Services onSelectServiceCategory={setProjectCategory} />
        </div>

        {/* 6. Education & Scholarships + 7. Achievements & Certifications */}
        <div className="reveal reveal-delay-1"><EducationAndCertifications /></div>

        {/* Optional Verified Testimonials (hidden when empty) */}
        {testimonialsData.length > 0 && (
          <div className="reveal"><Testimonials /></div>
        )}

        {/* Knowledge Base FAQ & Discussion CTA */}
        <div className="reveal"><FAQ /></div>
        <div className="reveal reveal-delay-1"><DiscussionCTA /></div>

        <MarqueeTicker />
      </main>

      {/* 8. Contact */}
      <div className="reveal">
        <Footer profile={profile} inquiryTopic={inquiryTopic} />
      </div>
    </div>
  );
}
