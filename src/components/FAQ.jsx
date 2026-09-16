import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, ArrowUpRight } from 'lucide-react';
import { faqData } from '../data/portfolioData';

/**
 * FAQ — Search-Engine Optimized Knowledge & Inquiries Accordion.
 * Captures high-intent search queries and aligns 1:1 with Schema.org FAQPage data.
 */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-centered">
          <div className="section-badge">
            <HelpCircle size={13} className="badge-icon" />
            <span>KNOWLEDGE BASE &amp; FAQ</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="highlight-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Essential facts about my software engineering specialization, dual degree academic background, and hiring availability.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list" role="region" aria-label="Frequently Asked Questions">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-heading-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div 
                key={item.id} 
                className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="faq-question-btn"
                    onClick={() => toggleItem(idx)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className={`faq-icon-wrap ${isOpen ? 'rotate-open' : ''}`} aria-hidden="true">
                      <ChevronDown size={18} />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`faq-answer-panel ${isOpen ? 'panel-open' : 'panel-closed'}`}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="faq-bottom-hint">
          <span>Have a question not covered here?</span>
          <a href="#contact" className="faq-contact-link">
            <span>Ask me directly</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
