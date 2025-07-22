import React from 'react';

const Home = ({ setCurrentPage }) => {
  const departments = [
    {
      id: 'new-thing-hustle',
      name: 'New Thing Hustle',
      tagline: 'Motivation, Strategy & Faith-Based Business Inspiration',
      description: 'Supports digital entrepreneurs with faceless YouTube strategies, digital product creation, consulting, and faith-driven AI tools.',
      logo: '/logos/new-thing-hustle-logo.png',
      color: 'new-thing-hustle',
      features: ['Faceless YouTube Strategy', 'Digital Product Creation', 'Consulting Packages', 'Faith-Driven Templates & AI Tools']
    },
    {
      id: 'profitboost-consulting',
      name: 'ProfitBoost Consulting',
      tagline: 'Real Estate & Investment Advisory',
      description: 'Provides tailored plans, CMA reports, investment strategy, and property referrals for generational wealth building.',
      logo: '/logos/profitboost-consulting-logo.png',
      color: 'profitboost-consulting',
      features: ['Custom Business Plans', 'CMA Reports', 'Investment Strategy', 'Property Planning & Referrals']
    },
    {
      id: 'qa-chronicles',
      name: 'Q&A Chronicles',
      tagline: 'Faith, Family, Business, Music & Community',
      description: 'Manages our internal brands including faith + family media, apparel, books, music, and spiritual growth content.',
      logo: '/logos/qa-chronicles-logo.png',
      color: 'qa-chronicles',
      features: ['Faith + Family Media', 'Q&A Faith Co. Apparel', 'Books & Digital Products', 'Qwhitemusic & Que the Word']
    },
    {
      id: 'legacy-outreach',
      name: 'Legacy + Outreach',
      tagline: 'Community Empowerment & Disability Advocacy',
      description: 'Offers advocacy, storytelling, and resources for families managing disabilities, alongside business guidance for parents and caregivers.',
      logo: '/logos/legacy-outreach-logo.png',
      color: 'legacy-outreach',
      features: ['Disability Advocacy', 'Family Resources', 'Educational Tools', 'Entrepreneurship Support']
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in-up">
              Build better. <span className="text-primary">Empower your legacy.</span>
            </h1>
            <p className="hero-subtitle fade-in-up">
              Empowering faith-driven entrepreneurs and families to build profitable, 
              sustainable businesses that align with their values and purpose.
            </p>
            <div className="hero-buttons fade-in-up">
              <button 
                className="btn btn-primary"
                onClick={() => setCurrentPage('about')}
              >
                Learn About Us
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => setCurrentPage('contact')}
              >
                Get Started Today
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3 className="text-primary">4</h3>
              <p>Specialized Departments</p>
            </div>
            <div className="stat">
              <h3 className="text-secondary">100+</h3>
              <p>Families Empowered</p>
            </div>
            <div className="stat">
              <h3 className="text-accent">24/7</h3>
              <p>Faith-Driven Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Biblical Foundation</h2>
            <p className="text-light">
              At our core, we operate with strong Biblical principles that guide every aspect of our business.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="value-icon">🏛️</div>
              <h4>Stewardship Over Ownership</h4>
              <p>Managing God's resources with excellence and humility.</p>
            </div>
            <div className="card text-center">
              <div className="value-icon">❤️</div>
              <h4>Serve People, Not Just Profit</h4>
              <p>Focusing on people, purpose, and long-term impact.</p>
            </div>
            <div className="card text-center">
              <div className="value-icon">✨</div>
              <h4>Honor God with the Work</h4>
              <p>Doing business as a form of worship, built with integrity and faith.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Departments</h2>
            <p className="text-light">
              Each department specializes in empowering different aspects of your entrepreneurial journey.
            </p>
          </div>
          <div className="departments-grid">
            {departments.map((dept) => (
              <div 
                key={dept.id} 
                className={`department-card ${dept.color}`}
                onClick={() => setCurrentPage(dept.id)}
              >
                <div className="dept-header">
                  <img src={dept.logo} alt={`${dept.name} Logo`} className="dept-logo" />
                  <div>
                    <h3>{dept.name}</h3>
                    <p className="dept-tagline">{dept.tagline}</p>
                  </div>
                </div>
                <p className="dept-description">{dept.description}</p>
                <ul className="dept-features">
                  {dept.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="btn btn-outline dept-btn">
                  Explore {dept.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Build Your Legacy?</h2>
            <p className="text-light mb-4">
              Join hundreds of faith-driven entrepreneurs who are building profitable, 
              purpose-driven businesses with our guidance and support.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => setCurrentPage('contact')}
              >
                Start Your Journey
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setCurrentPage('about')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          pointer-events: none;
        }
        
        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 4rem;
          position: relative;
          z-index: 1;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          flex-wrap: wrap;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat h3 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        
        .stat p {
          color: var(--text-light);
          font-weight: 500;
          margin: 0;
        }
        
        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .departments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .department-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }
        
        .department-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--dept-gradient);
        }
        
        .department-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--dept-color);
        }
        
        .dept-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .dept-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }
        
        .dept-header h3 {
          margin: 0;
          color: var(--dept-color);
        }
        
        .dept-tagline {
          font-size: 0.9rem;
          color: var(--text-light);
          margin: 0;
          font-style: italic;
        }
        
        .dept-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .dept-features {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }
        
        .dept-features li {
          padding: 0.5rem 0;
          color: var(--text-dark);
          font-weight: 500;
        }
        
        .dept-btn {
          width: 100%;
          border-color: var(--dept-color);
          color: var(--dept-color);
        }
        
        .dept-btn:hover {
          background: var(--dept-color);
          color: white;
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
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            gap: 2rem;
          }
          
          .departments-grid {
            grid-template-columns: 1fr;
          }
          
          .dept-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

