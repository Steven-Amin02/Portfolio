import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { scrollToElement } from '../utils/scrollUtils';

const LEFT_NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' }
];

const RIGHT_NAV_ITEMS = [
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'resume', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

const ALL_NAV_ITEMS = [...LEFT_NAV_ITEMS, ...RIGHT_NAV_ITEMS];

export default function Navbar({ activeSection, theme = 'light', onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-locked', mobileMenuOpen);
    return () => document.body.classList.remove('nav-locked');
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToElement(targetId, 85, 950);
  }, []);

  const renderLogo = () => (
    <a 
      href="#home" 
      onClick={(e) => handleNavClick(e, 'home')} 
      className="nav-logo"
      aria-label="Steven Amin Portfolio Home"
    >
      <div className="logo-badge">
        <span>S</span>
      </div>
      <div className="logo-text-wrap">
        <span className="logo-text">Steven<span className="logo-dot">.</span></span>
      </div>
    </a>
  );

  return (
    <header className={`navbar-header anim-nav ${scrolled ? 'scrolled' : ''}`}>
      {/* Desktop Floating Navigation */}
      <nav className="nav-container desktop-nav" aria-label="Main Navigation">
        <div className="nav-group-left">
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
        </div>

        {renderLogo()}

        <div className="nav-group-right">
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
          
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')} 
            className="nav-cta-pill"
          >
            <span className="live-status-dot" aria-hidden="true" />
            <span>Available</span>
          </a>

          {/* Desktop Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="theme-toggle-icon icon-sun" />
            ) : (
              <Moon size={18} className="theme-toggle-icon icon-moon" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="mobile-nav-bar">
        {renderLogo()}

        <div className="mobile-nav-actions">
          {/* Mobile Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle-btn mobile-theme-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={17} className="theme-toggle-icon icon-sun" />
            ) : (
              <Moon size={17} className="theme-toggle-icon icon-moon" />
            )}
          </button>

          <span className="mobile-status-badge">
            <span className="live-status-dot" aria-hidden="true" />
            <span>Open for Hire</span>
          </span>

          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="mobile-menu-backdrop"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="mobile-menu-overlay" role="menu">
            {ALL_NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                role="menuitem"
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} opacity={0.6} />
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                onToggleTheme();
              }}
              className="mobile-theme-row"
            >
              <span>Switch to {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a 
              href="mailto:stevenameen02@gmail.com" 
              className="mobile-contact-action"
            >
              <Sparkles size={16} /> Get In Touch
            </a>
          </div>
        </>
      )}
    </header>
  );
}
