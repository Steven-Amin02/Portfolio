import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import DiscussionCTA from './components/DiscussionCTA';
import MarqueeTicker from './components/MarqueeTicker';
import Footer from './components/Footer';
import { initialProfileData } from './data/portfolioData';

/** Ordered section IDs matching DOM layout sequence */
const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'services', 'resume', 'testimonials', 'contact'];

/** Header offset for scroll-spy calculation (px) */
const SCROLL_SPY_OFFSET = 150;

/** IntersectionObserver threshold for scroll-reveal animations */
const REVEAL_THRESHOLD = 0.12;

export default function App() {
  const [profile] = useState(initialProfileData);
  const [activeSection, setActiveSection] = useState('home');
  
  // Theme state: defaults to saved preference or light mode
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });

  // Sync theme with HTML data attribute, localStorage, and browser meta tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0A0D14' : '#F8F9FC');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  // Scroll-spy: track which section is currently in view
  const handleScroll = useCallback(() => {
    const scrollY = window.pageYOffset;

    for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTION_IDS[i]);
      if (el) {
        const top = el.getBoundingClientRect().top + scrollY;
        if (scrollY >= top - SCROLL_SPY_OFFSET) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // IntersectionObserver: one-shot scroll-reveal for `.reveal` elements
  useEffect(() => {
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

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-main-root">
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        onToggleTheme={toggleTheme} 
      />
      <Hero profile={profile} />

      <div className="reveal"><About profile={profile} /></div>
      <div className="reveal reveal-delay-1"><Skills /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal reveal-delay-1"><Services /></div>
      <div className="reveal"><Timeline /></div>
      <div className="reveal reveal-delay-1"><Testimonials /></div>
      <div className="reveal"><DiscussionCTA /></div>

      <MarqueeTicker />

      <div className="reveal"><Footer profile={profile} /></div>
    </div>
  );
}
