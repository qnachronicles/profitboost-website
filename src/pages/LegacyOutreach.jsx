import React from 'react';

const LegacyOutreach = () => {
  const services = [
    {
      title: 'Disability Advocacy',
      description: 'Strategic storytelling to highlight the realities of parenting children with disabilities',
      icon: '🤝'
    },
    {
      title: 'Family Resources',
      description: 'Biblically grounded tools for families aligning business, purpose, and calling',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Educational Tools',
      description: 'Resources and guidance for families managing disabilities while building legacy',
      icon: '📚'
    },
    {
      title: 'Entrepreneurship Support',
      description: 'Business guidance for parents and caregivers building sustainable income',
      icon: '💼'
    }
  ];

  const impactAreas = [
    {
      area: 'Community Empowerment',
      description: 'Building stronger communities through advocacy and support',
      icon: '🌟'
    },
    {
      area: 'Family Strengthening',
      description: 'Equipping families with tools and resources for success',
      icon: '💪'
    },
    {
      area: 'Legacy Building',
      description: 'Helping families create lasting impact for future generations',
      icon: '🏗️'
    },
    {
      area: 'Faith Integration',
      description: 'Weaving biblical principles into every aspect of family and business life',
      icon: '✝️'
    }
  ];

  const socialLinks = [
    { platform: 'Instagram', url: '#', icon: 'IG' },
    { platform: 'Facebook', url: '#', icon: 'FB' },
    { platform: 'LinkedIn', url: '#', icon: 'LI' }
  ];

  return (
    <div className="department-page legacy-outreach">
      <section className="dept-hero legacy-outreach">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <img src="/logos/legacy-outreach-logo.png" alt="Legacy + Outreach Logo" className="hero-logo" />
              <h1>Legacy + Outreach</h1>
              <p className="hero-tagline">Community Empowerment & Disability Advocacy</p>
              <p className="hero-description">
                Offering advocacy, storytelling, and resources for families managing disabilities, 
                alongside business guidance for parents and caregivers. We use strategic storytelling 
                to highlight realities while equipping families to build sustainable income and legacy.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Support</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div className="floating-icon">❤️</div>
                <div className="floating-icon">🌈</div>
                <div className="floating-icon">🤗</div>
                <div className="floating-icon">🌟</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To empower families managing disabilities by providing advocacy, resources, and 
            business guidance that helps them build sustainable income streams while creating 
            lasting legacies rooted in faith and purpose.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p>Comprehensive support for families navigating disabilities while building their legacy.</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn btn-outline">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <h2>Our Impact Areas</h2>
          <p>Creating meaningful change in communities and families across multiple dimensions.</p>
          
          <div className="impact-grid">
            {impactAreas.map((area, index) => (
              <div key={index} className="impact-card">
                <div className="impact-icon">{area.icon}</div>
                <h3>{area.area}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-content">
            <div className="value-item">
              <h3>🙏 Faith-Centered</h3>
              <p>Every service and resource is grounded in biblical principles and God's love.</p>
            </div>
            <div className="value-item">
              <h3>💝 Compassionate Care</h3>
              <p>We approach every family with empathy, understanding, and genuine care.</p>
            </div>
            <div className="value-item">
              <h3>🎯 Purpose-Driven</h3>
              <p>Helping families discover and walk in their God-given purpose and calling.</p>
            </div>
            <div className="value-item">
              <h3>🌱 Legacy Focused</h3>
              <p>Building sustainable foundations that impact generations to come.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="connect-section">
        <div className="container">
          <h2>Connect With Legacy + Outreach</h2>
          <p>Join our community of families building legacies while navigating life's challenges with faith and purpose.</p>
          
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon">{link.icon}</div>
                <h3>{link.platform}</h3>
                <p>Follow for updates</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .legacy-outreach {
          --dept-primary: #14B8A6;
          --dept-secondary: #5EEAD4;
          --dept-accent: #99F6E4;
        }
        
        .dept-hero.legacy-outreach {
          background: linear-gradient(135deg, var(--dept-primary) 0%, var(--dept-secondary) 100%);
          color: white;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        
        .hero-logo {
          width: 80px;
          height: 80px;
          margin-bottom: 1rem;
          border-radius: 12px;
          background: white;
          padding: 0.5rem;
        }
        
        .hero-tagline {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          font-style: italic;
          opacity: 0.9;
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
        
        .floating-elements {
          position: relative;
          height: 300px;
        }
        
        .floating-icon {
          position: absolute;
          font-size: 2rem;
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-icon:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
        .floating-icon:nth-child(2) { top: 60%; right: 30%; animation-delay: 1s; }
        .floating-icon:nth-child(3) { bottom: 30%; left: 40%; animation-delay: 2s; }
        .floating-icon:nth-child(4) { top: 40%; right: 10%; animation-delay: 1.5s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .mission-section, .services-section, .impact-section, .values-section, .connect-section {
          padding: 4rem 0;
        }
        
        .mission-section {
          background: var(--background-light);
          text-align: center;
        }
        
        .mission-section p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }
        
        .services-grid, .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .service-card, .impact-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover, .impact-card:hover {
          transform: translateY(-5px);
        }
        
        .service-icon, .impact-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .values-section {
          background: var(--background-light);
        }
        
        .values-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .value-item {
          text-align: center;
          padding: 1.5rem;
        }
        
        .value-item h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--dept-primary);
        }
        
        .social-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .social-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          text-decoration: none;
          color: inherit;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .social-card:hover {
          transform: translateY(-5px);
          border-color: var(--dept-primary);
        }
        
        .social-icon {
          font-size: 2rem;
          font-weight: bold;
          color: var(--dept-primary);
          margin-bottom: 1rem;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default LegacyOutreach;
