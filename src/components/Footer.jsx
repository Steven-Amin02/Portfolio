import React, { useState, useCallback } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';

/**
 * Footer — Contact form and footer section.
 * Manages contact submission state with inline feedback banners.
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

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name}\n${formData.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 4000);
  }, [formData, profile.email]);

  const contactItems = [
    {
      icon: Mail,
      label: 'Email Me',
      value: profile.email,
      href: `mailto:${profile.email}`,
      isExternal: false
    },
    {
      icon: Github,
      label: 'GitHub Profile',
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
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Contact Info Column */}
        <div className="contact-info">
          <h2>Let's Build Something Great!</h2>
          <p>Have an idea for a web application, business system, backend API, or automation solution? Let's build it together.</p>

          <div className="contact-details">
            {contactItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="contact-item">
                  <div className="contact-icon-box" aria-hidden="true">
                    <IconComp size={20} />
                  </div>
                <div className="contact-item-copy">
                    <div className="contact-item-label">{item.label}</div>
                    <div>
                      <a
                        href={item.href}
                        target={item.isExternal ? '_blank' : '_self'}
                        rel={item.isExternal ? 'noreferrer' : undefined}
                        className="contact-item-value"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="contact-form">
          <form onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Steven Amin"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project requirements..."
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                rows={4}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              {submitted ? (
                <>Sent Successfully <CheckCircle2 size={16} /></>
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>

            {submitted && (
              <div className="form-success">
                Thank you, {formData.name}! Your email client should open next.
              </div>
            )}
          </form>
        </div>

        {/* Integrated Clean Bottom Bar */}
        <footer className="contact-bottom-bar">
          <div>
            <span className="contact-brand">Steven<span className="logo-dot">.</span></span> — Full-Stack Software Engineer
          </div>
          <div>
            © {new Date().getFullYear()} Steven Amin. Engineered with React &amp; Vite.
          </div>
        </footer>
      </div>
    </section>
  );
}
