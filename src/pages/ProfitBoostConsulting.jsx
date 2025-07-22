import React from 'react';

const ProfitBoostConsulting = () => {
  const services = [
    {
      title: 'Custom Business Plans',
      description: 'Comprehensive business planning tailored to your unique goals and market opportunities.',
      features: ['Market Analysis', 'Financial Projections', 'Growth Strategies', 'Risk Assessment']
    },
    {
      title: 'CMA Reports for Real Estate Deals',
      description: 'Detailed Comparative Market Analysis to help you make informed real estate investment decisions.',
      features: ['Property Valuation', 'Market Trends', 'Investment Potential', 'ROI Analysis']
    },
    {
      title: 'Investment Strategy Consulting',
      description: 'Strategic guidance for building and managing your investment portfolio for long-term wealth.',
      features: ['Portfolio Planning', 'Risk Management', 'Diversification', 'Performance Tracking']
    },
    {
      title: 'Property Planning and Referrals',
      description: 'End-to-end property planning services with trusted referrals to qualified professionals.',
      features: ['Property Search', 'Due Diligence', 'Professional Network', 'Transaction Support']
    }
  ];

  const expertise = [
    {
      area: 'Real Estate Acquisitions',
      description: 'Commercial real estate wholesaling & acquisitions through Q&A Real Estate Holdings LLC',
      icon: '🏢'
    },
    {
      area: 'Referral Services',
      description: 'Licensed Maryland real estate professional with extensive network',
      icon: '🤝'
    },
    {
      area: 'Investment Strategy',
      description: 'Deal structuring and investment strategy for generational wealth building',
      icon: '📊'
    },
    {
      area: 'Wealth Building',
      description: 'Long-term strategies for creating and preserving generational wealth',
      icon: '💰'
    }
  ];

  const socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/profitboost-consulting', icon: 'LI' },
    { platform: 'Instagram', url: 'https://www.instagram.com/profitboostconsulting', icon: 'IG' },
    { platform: 'Facebook', url: 'https://www.facebook.com/profitboostconsulting', icon: 'FB' },
    { platform: 'Website', url: 'https://profitboostconsulting.com', icon: 'WEB' }
  ];

  return (
    <div className="profitboost-consulting-page">
      {/* Hero Section */}
      <section className="dept-hero profitboost-consulting">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <img src="/logos/profitboost-consulting-logo.png" alt="ProfitBoost Consulting Logo" className="hero-logo" />
              <h1>ProfitBoost Consulting</h1>
              <p className="hero-tagline">Real Estate & Investment Advisory</p>
              <p className="hero-description">
                Tailored for entrepreneurs and investors building generational wealth through 
                strategic real estate investments, comprehensive business planning, and 
                expert financial guidance. Your trusted partner in wealth creation.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Schedule Consultation</button>
                <button className="btn btn-outline">View Services</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="stats-display">
                <div className="stat-item">
                  <h3>$10M+</h3>
                  <p>Assets Managed</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Clients Served</p>
                </div>
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Expertise</h2>
            <p className="text-light">
              Comprehensive real estate and investment services designed to build lasting wealth.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-card">
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.area}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Services</h2>
            <p className="text-light">
              Professional consulting services to accelerate your wealth-building journey.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="btn btn-outline service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="process-content">
            <h2 className="text-center">Our Proven Process</h2>
            <p className="text-center text-light mb-5">
              A systematic approach to building your wealth and achieving your financial goals.
            </p>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Discovery & Assessment</h4>
                <p>We analyze your current financial position, goals, and risk tolerance to create a personalized strategy.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Strategy Development</h4>
                <p>Custom investment and business strategies designed specifically for your unique situation and objectives.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Implementation</h4>
                <p>Guided execution of your strategy with ongoing support and professional referrals as needed.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h4>Monitoring & Optimization</h4>
                <p>Regular review and adjustment of your strategy to ensure continued progress toward your goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="credentials-content">
            <h2 className="text-center">Professional Credentials</h2>
            <div className="credentials-grid">
              <div className="credential-card">
                <div className="credential-icon">🏠</div>
                <h4>Maryland Real Estate License</h4>
                <p>Licensed real estate professional with extensive market knowledge and network.</p>
              </div>
              <div className="credential-card">
                <div className="credential-icon">🏢</div>
                <h4>Q&A Real Estate Holdings LLC</h4>
                <p>Commercial real estate wholesaling and acquisitions company.</p>
              </div>
              <div className="credential-card">
                <div className="credential-icon">📈</div>
                <h4>Investment Consulting</h4>
                <p>Specialized expertise in deal structuring and investment strategy.</p>
              </div>
              <div className="credential-card">
                <div className="credential-icon">🎯</div>
                <h4>Generational Wealth Focus</h4>
                <p>Dedicated to helping families build lasting, multi-generational wealth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section">
        <div className="container">
          <div className="social-section">
            <h2 className="text-center">Connect With ProfitBoost Consulting</h2>
            <p className="text-center text-light mb-4">
              Stay updated with market insights, investment opportunities, and wealth-building strategies.
            </p>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-icon">{social.icon}</div>
                  <h4>{social.platform}</h4>
                  <p>Follow for updates</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Build Generational Wealth?</h2>
            <p className="text-light mb-4">
              Take the first step toward financial freedom with our expert guidance and proven strategies. 
              Your legacy starts with the decisions you make today.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Schedule Free Consultation</button>
              <button className="btn btn-secondary">Download Investment Guide</button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .dept-hero {
          background: var(--dept-gradient);
          color: white;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-logo {
          width: 80px;
          height: 80px;
          margin-bottom: 1rem;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        
        .hero-tagline {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 1.5rem;
          font-style: italic;
        }
        
        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.95;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .stats-display {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 1rem;
          backdrop-filter: blur(10px);
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-item h3 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        
        .stat-item p {
          opacity: 0.9;
          margin: 0;
        }
        
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .expertise-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        
        .expertise-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        
        .expertise-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .expertise-card h3 {
          color: var(--dept-color);
          margin-bottom: 1rem;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        
        .service-card h3 {
          color: var(--dept-color);
          margin-bottom: 1rem;
        }
        
        .service-features {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }
        
        .service-features li {
          padding: 0.5rem 0;
          color: var(--text-dark);
        }
        
        .service-btn {
          width: 100%;
          border-color: var(--dept-color);
          color: var(--dept-color);
        }
        
        .service-btn:hover {
          background: var(--dept-color);
          color: white;
        }
        
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .step {
          text-align: center;
          position: relative;
        }
        
        .step-number {
          width: 60px;
          height: 60px;
          background: var(--dept-gradient);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 1rem;
        }
        
        .step h4 {
          color: var(--dept-color);
          margin-bottom: 1rem;
        }
        
        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .credential-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        
        .credential-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        
        .credential-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .credential-card h4 {
          color: var(--dept-color);
          margin-bottom: 1rem;
        }
        
        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .social-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          text-decoration: none;
          color: var(--text-dark);
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        
        .social-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
          color: var(--dept-color);
        }
        
        .social-icon {
          width: 60px;
          height: 60px;
          background: var(--dept-gradient);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin: 0 auto 1rem;
          font-size: 1.2rem;
        }
        
        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .process-steps {
            grid-template-columns: 1fr;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfitBoostConsulting;

