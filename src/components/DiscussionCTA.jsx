import React, { useState } from 'react';
import { Mail, Star, Award, ShieldCheck } from 'lucide-react';

export default function DiscussionCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! I will get in touch with ${email} shortly.`);
      setEmail('');
    }
  };

  return (
    <section className="discussion-cta-section">
      <div className="discussion-container">
        <h2 className="discussion-title">
          Have an Awesome Project <br />
          Idea? <span className="highlight">Let’s Discuss</span>
        </h2>

        <form onSubmit={handleSubmit} className="discussion-pill-bar">
          <div className="discussion-input-wrapper">
            <div className="mail-icon-badge"><Mail size={18} /></div>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="discussion-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-send-cta">Send</button>
        </form>

        <div className="discussion-trust-badges">
          <div className="trust-badge-item"><Star size={16} color="#FF9E0D" fill="#FF9E0D" /> 4.9/5 Average Ratings</div>
          <div className="trust-badge-item"><Award size={16} color="#FF6B2C" /> NBE & DEPI Certified</div>
          <div className="trust-badge-item"><ShieldCheck size={16} color="#10B981" /> Production Ready Code</div>
        </div>
      </div>
    </section>
  );
}
