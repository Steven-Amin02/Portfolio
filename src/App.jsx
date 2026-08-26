import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [profile] = useState(initialProfileData);
  const [activeSection, setActiveSection] = useState('home');

  // Active section tracker
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'services', 'resume', 'testimonials', 'contact'];
    const onScroll = () => {
      const y = window.pageYOffset;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 150;
          if (y >= top && y < top + el.offsetHeight) setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection Observer — scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-main-root">
      <Navbar activeSection={activeSection} />
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
