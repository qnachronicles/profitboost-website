import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="hero-section">
          <h1>About ProfitBoost LLC</h1>
          <p className="hero-subtitle">Build Better. Empower Your Legacy.</p>
        </div>

        <div className="about-content">
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>
              ProfitBoost LLC exists to empower entrepreneurs, investors, and faith-driven families 
              to build sustainable businesses and generational wealth while honoring God in all we do.
            </p>
          </section>

          <section className="core-values">
            <h2>Core Values (Biblical Foundation)</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>🧭 Stewardship Over Ownership</h3>
                <p>We manage what God owns, with excellence and humility.</p>
              </div>
              <div className="value-card">
                <h3>❤️ Serve People, Not Just Profit</h3>
                <p>Our work is about people, purpose, and long-term impact.</p>
              </div>
              <div className="value-card">
                <h3>🙏 Honor God with the Work</h3>
                <p>We do business as a form of worship, built with integrity and faith.</p>
              </div>
            </div>
          </section>

          <section className="dual-approach">
            <h2>Our Dual Approach</h2>
            <div className="approach-grid">
              <div className="approach-card">
                <h3>ProfitBoost LLC</h3>
                <p>Direct consulting, real estate planning, and investment strategy for entrepreneurs and investors.</p>
              </div>
              <div className="approach-card">
                <h3>Q&A Chronicles</h3>
                <p>Relatable, faith-centered content to educate and inspire through media, books, music, and lifestyle branding.</p>
              </div>
            </div>
          </section>

          <section className="brand-commitments">
            <h2>Brand Commitments</h2>
            <div className="commitments-list">
              <div className="commitment">
                <h4>✅ Authenticity & Practicality</h4>
                <p>We keep it real—helping families build businesses around life, not the other way around.</p>
              </div>
              <div className="commitment">
                <h4>✅ Faith & Family-Based Resources</h4>
                <p>We offer biblically grounded tools for those who want to align business, purpose, and calling.</p>
              </div>
              <div className="commitment">
                <h4>✅ Community & Disability Awareness</h4>
                <p>We use strategic storytelling to highlight the realities of parenting children with disabilities—while equipping families to build sustainable income and legacy.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

