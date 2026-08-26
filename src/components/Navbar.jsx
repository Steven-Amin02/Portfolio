import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const LEFT_NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' }
];

const RIGHT_NAV_ITEMS = [
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];

const ALL_NAV_ITEMS = [...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = useCallback((e, targetId) => {
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
  }, []);

  const renderLogo = () => (
    <a 
      href="#home" 
      onClick={(e) => handleNavClick(e, 'home')} 
      className="nav-logo"
      aria-label="Steven Amin Portfolio Home"
    >
      <div className="logo-badge">S</div>
      <span className="logo-text">Steven<span className="logo-dot">.</span></span>
    </a>
  );

  return (
    <header className={`navbar-header anim-nav ${scrolled ? 'scrolled' : ''}`}>
      {/* Desktop Floating Navigation */}
      <nav className="nav-container desktop-nav" aria-label="Main Navigation">
        {LEFT_NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}

        {renderLogo()}

        {RIGHT_NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Top Bar */}
      <div className="mobile-nav-bar">
        {renderLogo()}

        <button 
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" role="menu">
          {ALL_NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={activeSection === item.id ? 'active' : ''}
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
