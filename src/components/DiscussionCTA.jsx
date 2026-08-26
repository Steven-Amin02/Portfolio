import React, { useState, useCallback } from 'react';
import { Mail, Star, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

/**
 * DiscussionCTA — Interactive callout section for project inquiries.
 * Features inline email submission and trust signals.
 */

const TRUST_BADGES = [
  { icon: Star, color: '#FF9E0D', fill: '#FF9E0D', text: '4.9/5 Average Ratings' },
  { icon: Award, color: '#FF6B2C', fill: 'none', text: 'NBE & DEPI Certified' },
  { icon: ShieldCheck, color: '#10B981', fill: 'none', text: 'Production Ready Code' }
];

export default function DiscussionCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 4000);
    }
  }, [email]);

  return (
    <section className="discussion-cta-section">
      <div className="discussion-container">
        <h2 className="discussion-title">
          Have an Awesome Project <br />
          Idea? <span className="highlight">Let’s Discuss</span>
        </h2>

        <form onSubmit={handleSubmit} className="discussion-pill-bar">
          <div className="discussion-input-wrapper">
            <div className="mail-icon-badge" aria-hidden="true"><Mail size={18} /></div>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="discussion-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address for project inquiry"
              required
            />
          </div>
          <button type="submit" className="btn-send-cta">
            {submitted ? <CheckCircle2 size={18} /> : 'Send'}
          </button>
        </form>

        {submitted && (
          <div style={{ color: '#10B981', marginTop: '12px', fontWeight: 600, fontSize: '0.95rem' }}>
            ✓ Thank you! I will reach out to you shortly.
          </div>
        )}

        <div className="discussion-trust-badges">
          {TRUST_BADGES.map((badge, idx) => {
            const IconComp = badge.icon;
            return (
              <div key={idx} className="trust-badge-item">
                <IconComp size={16} color={badge.color} fill={badge.fill} aria-hidden="true" />
                <span>{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
