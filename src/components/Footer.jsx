import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Footer({ profile }) {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${contactName}! Your message has been sent successfully.`);
    setContactName('');
    setContactEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Build Something Great!</h2>
          <p>Have an idea for a web application, business system, backend API, or automation solution? Let's build it together.</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-box"><Mail size={20} /></div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Email Me</div>
                <div style={{ fontWeight: 600 }}>
                  <a href={`mailto:${profile.email}`} style={{ color: '#FFF' }}>{profile.email}</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box"><Github size={20} /></div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>GitHub Profile</div>
                <div style={{ fontWeight: 600 }}>
                  <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: '#FFF' }}>github.com/Steven-Amin02</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box"><Linkedin size={20} /></div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>LinkedIn Profile</div>
                <div style={{ fontWeight: 600 }}>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ color: '#FFF' }}>linkedin.com/in/steven-amin02</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleContactSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Steven Amin"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Tell me about your project requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-input"
                rows={4}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Send Message <Send size={16} style={{ marginLeft: '8px', display: 'inline' }} />
            </button>
          </form>
        </div>

        {/* Integrated Clean Bottom Bar */}
        <div className="contact-bottom-bar" style={{
          gridColumn: '1 / -1',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '28px',
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          color: '#9CA3AF',
          fontSize: '0.88rem'
        }}>
          <div>
            <span style={{ color: '#FFF', fontWeight: 700, fontSize: '1.1rem' }}>Steven<span style={{ color: '#FF6B2C' }}>.</span></span> — Full-Stack Software Engineer
          </div>
          <div>
            © {new Date().getFullYear()} Steven Amin. Engineered with React &amp; Vite.
          </div>
        </div>
      </div>
    </section>
  );
}
