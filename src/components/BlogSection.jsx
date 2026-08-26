import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPostsData } from '../data/portfolioData';

export default function BlogSection() {
  return (
    <section className="blog-posts-section">
      <div className="blog-header">
        <h2>From my <span style={{ color: '#FF6B2C' }}>blog posts</span></h2>
        <a href="#contact" className="btn-portfolio" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>See All</a>
      </div>

      <div className="blog-grid">
        {blogPostsData.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-img-box">
              <img src={post.image} alt={post.title} />
              <div className="floating-circle-arrow"><ArrowRight size={20} /></div>
            </div>
            <span className="blog-tag-pill">{post.tag}</span>
            <div className="blog-meta">• Steven Amin • {post.date}</div>
            <h3 className="blog-title">{post.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
