import React, { useState, useCallback } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, Phone, MapPin, Sparkles, ArrowUp } from 'lucide-react';

/**
 * Footer — Interactive Contact Terminal & Navigation Footer.
 * Features full contact form with direct mailto fallback, social channels,
 * and back-to-top scroll helper.
 */

export default function Footer({ profile }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleContactSubmit = useCallback((e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— Sender: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 4000);
  }, [formData, profile.email]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email Me Directly',
      value: profile.email,
      href: `mailto:${profile.email}`,
      isExternal: false
    },
    {
      icon: Github,
      label: 'GitHub Repositories',
      value: 'github.com/Steven-Amin02',
      href: profile.github,
      isExternal: true
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Professional Profile',
      value: 'linkedin.com/in/steven-amin02',
      href: profile.linkedin,
      isExternal: true
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, '')}`,
      isExternal: false
    }
  ];

  return (
    <footer id="contact" className="contact-footer-section">
      <div className="section-container">
        
        <div className="contact-grid-container">
          
          {/* Left Column: Direct Info & Channels */}
          <div className="contact-info-col">
            <div className="section-badge">
              <Sparkles size={13} className="badge-icon" />
              <span>LET'S CONNECT</span>
            </div>
            
            <h2 className="contact-heading">
              Let's Build Something <span className="highlight-text">Exceptional</span>
            </h2>
            
            <p className="contact-desc">
              Whether you are looking for a dedicated Full-Stack .NET Developer, systems engineer, or automation specialist, I'm eager to discuss how I can contribute to your team.
            </p>

            <div className="contact-channel-list">
              {contactItems.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.isExternal ? '_blank' : '_self'}
                    rel={item.isExternal ? 'noreferrer' : undefined}
                    className="contact-channel-card"
                  >
                    <div className="channel-icon-box" aria-hidden="true">
                      <IconComp size={18} />
                    </div>
                    <div className="channel-copy">
                      <div className="channel-label">{item.label}</div>
                      <div className="channel-value">{item.value}</div>
                    </div>
                  </a>
                );
              })}

              <div className="contact-location-pill">
                <MapPin size={16} color="#FF6B2C" />
                <span>Cairo, Egypt • Available for On-Site, Hybrid &amp; Remote Work</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-sub">Fill out the fields below to initiate a project inquiry.</p>

              <form onSubmit={handleContactSubmit}>
                <div className="form-input-group">
                  <label htmlFor="contact-name">Your Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="custom-form-input"
                    required
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="custom-form-input"
                    required
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="contact-message">Project Scope or Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your technical requirements, team needs, or project goals..."
                    value={formData.message}
                    onChange={handleChange}
                    className="custom-form-input custom-textarea"
                    rows={4}
                    required
                  />
                </div>

                <button type="submit" className="btn-form-submit">
                  {submitted ? (
                    <>
                      <span>Sent Successfully</span>
                      <CheckCircle2 size={18} />
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="form-success-alert">
                    ✓ Opening your email client to dispatch this message. Thank you!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Global Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-brand-wrap">
            <span className="footer-brand-name">Steven<span className="logo-dot">.</span></span>
            <span className="footer-tagline">Software Engineering &amp; Systems Development</span>
          </div>

          <div className="footer-meta-wrap">
            <span>© {new Date().getFullYear()} Steven Amin. Dual Degree Ain Shams &amp; UEL Scholar.</span>
          </div>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
