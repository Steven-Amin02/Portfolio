import React from 'react';

export default function MarqueeTicker() {
  const items = [
    "Full-Stack Development",
    "ASP.NET Core & C#",
    "SQL Server & Entity Framework",
    "UiPath RPA Workflows",
    "Machine Learning & Python",
    "Clean Architecture & SOLID",
    "React & TypeScript"
  ];

  return (
    <div className="marquee-ticker-section">
      <div className="marquee-track">
        <div className="marquee-item">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span> <span className="marquee-spark">✦</span>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-item">
          {items.map((item, i) => (
            <React.Fragment key={`dup-${i}`}>
              <span>{item}</span> <span className="marquee-spark">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
