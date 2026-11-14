import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Phone,
  MapPin,
  Sparkles,
  ArrowUp,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { smoothScrollTo } from '../utils/scrollUtils';

/**
 * Footer — Interactive Contact Terminal & Navigation Footer.
 * Features full contact form with non-destructive mailto + Gmail Web & Clipboard fallbacks,
 * pre-filled project inquiry support, social channels, and back-to-top scroll helper.
 */

export default function Footer({ profile, inquiryTopic }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState(false);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    if (inquiryTopic) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? prev.message
          : `Hi Steven, I'd like to discuss "${inquiryTopic}".`
      }));
    }
  }, [inquiryTopic]);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

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
  }, [formData, profile.email]);

  const handleCopyFormatted = useCallback(async () => {
    try {
      const formatted = `To: ${profile.email}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(formatted);
        setCopiedMsg(true);
        if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
        copyTimerRef.current = setTimeout(() => setCopiedMsg(false), 3000);
      }
    } catch {
      setCopiedMsg(false);
    }
  }, [formData, profile.email]);

  const gmailComposeUrl = useCallback(() => {
    const su = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`${formData.message}\n\n— Sender: ${formData.name} (${formData.email})`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${su}&body=${body}`;
  }, [formData, profile.email]);

  const scrollToTop = () => {
    smoothScrollTo(0, 850);
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
      label: 'LinkedIn Profile',
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
              <Sparkles size={13} className="badge-icon" aria-hidden="true" />
              <span>CONTACT</span>
            </div>
            
            <h2 className="contact-heading">
              Let&apos;s Discuss Your <span className="highlight-text">Role or Project</span>
            </h2>
            
            <p className="contact-desc">
              {profile.availability}
            </p>

            <div className="contact-channel-list">
              {contactItems.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.isExternal ? '_blank' : '_self'}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
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
                <MapPin size={16} color="#FF6B2C" aria-hidden="true" />
                <span>Cairo, Egypt • Open to 2027 Graduate Roles, Internships &amp; Freelance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-sub">Fill out the fields below to initiate a hiring, internship, or project inquiry.</p>

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
                  <label htmlFor="contact-message">Role, Internship, or Project Details</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about the role, internship, or project requirements..."
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
                      <span>Email Client Triggered</span>
                      <CheckCircle2 size={18} aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={16} aria-hidden="true" />
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="form-fallback-panel" role="status">
                    <div className="form-success-alert">
                      ✓ Opening your default mail app. Using webmail instead?
                    </div>
                    <div className="form-fallback-actions">
                      <a
                        href={gmailComposeUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="form-fallback-btn"
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>Open in Gmail Web</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyFormatted}
                        className="form-fallback-btn"
                      >
                        {copiedMsg ? <Check size={14} color="#10B981" aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                        <span>{copiedMsg ? 'Message Copied!' : 'Copy Message'}</span>
                      </button>
                    </div>
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
            <span className="footer-tagline">Software Engineer | Backend &amp; Full-Stack .NET Developer</span>
          </div>

          <div className="footer-meta-wrap">
            <span>© {new Date().getFullYear()} Steven Amin. Ain Shams University &amp; UEL Dual-Degree Student (Expected 2027).</span>
          </div>

          <button 
            type="button"
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  );
}
