import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className={`navbar-header anim-nav ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container desktop-nav">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')} 
          className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')} 
          className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
        >
          About
        </a>
        <a 
          href="#services" 
          onClick={(e) => handleNavClick(e, 'services')} 
          className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}
        >
          Service
        </a>
        <a 
          href="#skills" 
          onClick={(e) => handleNavClick(e, 'skills')} 
          className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
        >
          Skills
        </a>

        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="nav-logo"
        >
          <div className="logo-badge">S</div>
          <span className="logo-text">Steven<span className="logo-dot">.</span></span>
        </a>

        <a 
          href="#resume" 
          onClick={(e) => handleNavClick(e, 'resume')} 
          className={`nav-item ${activeSection === 'resume' ? 'active' : ''}`}
        >
          Resume
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleNavClick(e, 'projects')} 
          className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
        >
          Project
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')} 
          className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
        >
          Contact
        </a>
      </nav>

      {/* Mobile Top Bar */}
      <div className="mobile-nav-bar">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="nav-logo"
        >
          <div className="logo-badge">S</div>
          <span className="logo-text">Steven<span className="logo-dot">.</span></span>
        </a>

        <button 
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={activeSection === 'services' ? 'active' : ''}>Services</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#resume" onClick={(e) => handleNavClick(e, 'resume')} className={activeSection === 'resume' ? 'active' : ''}>Resume</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      )}
    </header>
  );
}
