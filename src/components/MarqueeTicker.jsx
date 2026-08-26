import React from 'react';

/**
 * MarqueeTicker — Endless scrolling ticker banner displaying key technical competencies.
 * Static item array is declared outside render cycle for zero allocation cost.
 */

const MARQUEE_ITEMS = [
  'Full-Stack Development',
  'ASP.NET Core & C#',
  'SQL Server & Entity Framework',
  'UiPath RPA Workflows',
  'Machine Learning & Python',
  'Clean Architecture & SOLID',
  'React & TypeScript'
];

export default function MarqueeTicker() {
  return (
    <div className="marquee-ticker-section" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-item">
          {MARQUEE_ITEMS.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span> <span className="marquee-spark">✦</span>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-item">
          {MARQUEE_ITEMS.map((item, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span>{item}</span> <span className="marquee-spark">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
