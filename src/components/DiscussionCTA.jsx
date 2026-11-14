import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Mail, GraduationCap, Briefcase, Code2, CheckCircle2, ArrowRight, Sparkles, Copy, Check } from 'lucide-react';
import { initialProfileData } from '../data/portfolioData';

/**
 * DiscussionCTA — Project & Opportunity Inquiry Callout.
 * Features quick email input, 1-click email copy, and factual background highlights.
 */

const TRUST_BADGES = [
  { icon: GraduationCap, color: '#3B82F6', fill: 'none', text: 'Dual-Degree CS & Software Engineering (Expected 2027)' },
  { icon: Briefcase, color: '#FF6B2C', fill: 'none', text: 'NBE Deployment Intern (July 2026) & DEPI Trainee' },
  { icon: Code2, color: '#10B981', fill: 'none', text: 'Open to 2027 Graduate Roles, Internships & Freelance' }
];

export default function DiscussionCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const submitTimerRef = useRef(null);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    const subject = encodeURIComponent('Software Engineering Role / Project Inquiry');
    const body = encodeURIComponent(
      `Hi Steven,\n\nI would like to discuss a software engineering role, internship, or project opportunity. Please reach back to me at ${trimmed}.\n\nBest regards,`
    );
    window.location.href = `mailto:${initialProfileData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);

    if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
    submitTimerRef.current = setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  }, [email]);

  const handleCopyEmail = useCallback(async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(initialProfileData.email);
      }
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <section className="discussion-cta-section">
      <div className="section-container">
        
        <div className="discussion-card">
          <div className="discussion-card-glow" aria-hidden="true" />

          <div className="section-badge">
            <Sparkles size={13} className="badge-icon" aria-hidden="true" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="discussion-title">
            Looking for a 2027 Graduate Engineer, <br />
            Intern, or Developer? <span className="highlight-text">Let’s Connect.</span>
          </h2>
          <p className="discussion-subtitle">
            Interested in 2027 graduate software engineering roles, internships, and suitable freelance projects involving C#, ASP.NET Core, React, and SQL Server.
          </p>

          <div className="discussion-action-row">
            {/* Direct Email Submission Form */}
            <form onSubmit={handleSubmit} className="discussion-pill-bar">
              <div className="discussion-input-wrapper">
                <div className="mail-icon-badge" aria-hidden="true">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email to connect..."
                  className="discussion-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address for project or hiring inquiry"
                  required
                />
              </div>
              <button type="submit" className="btn-send-cta">
                {submitted ? <CheckCircle2 size={18} aria-hidden="true" /> : <span>Connect</span>}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </form>

            {/* Quick 1-Click Copy Email Button */}
            <button 
              type="button" 
              onClick={handleCopyEmail}
              className="btn-copy-direct"
              aria-label="Copy email address to clipboard"
            >
              {copied ? <Check size={16} color="#10B981" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              <span>{copied ? 'Email Copied!' : 'Copy Direct Email'}</span>
            </button>
          </div>

          {submitted && (
            <div className="discussion-alert-success" role="status">
              ✓ Launching your email client to reach {initialProfileData.email}!
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

      </div>
    </section>
  );
}
