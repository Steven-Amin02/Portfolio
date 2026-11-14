import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Mail, Star, Award, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Copy, Check } from 'lucide-react';
import { initialProfileData } from '../data/portfolioData';

/**
 * DiscussionCTA — High-Conversion Project Inquiries Callout.
 * Features quick email input, 1-click email copy with safe fallback, and enterprise trust badges.
 */

const TRUST_BADGES = [
  { icon: Star, color: '#FF9E0D', fill: '#FF9E0D', text: '5.0 Star Academic & Internship Endorsements' },
  { icon: Award, color: '#FF6B2C', fill: 'none', text: 'NBE & DEPI Certified Engineering' },
  { icon: ShieldCheck, color: '#10B981', fill: 'none', text: 'Production-Ready Clean Architecture' }
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

    const subject = encodeURIComponent('Project inquiry / Full-Stack opportunity');
    const body = encodeURIComponent(
      `Hi Steven,\n\nI would like to discuss a software project or opportunity. Please reach back to me at ${trimmed}.\n\nBest regards,`
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
            Have an Ambitious Project <br />
            or Role in Mind? <span className="highlight-text">Let’s Build It.</span>
          </h2>
          <p className="discussion-subtitle">
            Whether you need an enterprise .NET backend, full-stack web application, or automated RPA pipeline, I&apos;m ready to bring your requirements into reality.
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
                  aria-label="Email address for project inquiry"
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
