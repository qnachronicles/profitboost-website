import React from 'react';

const QAChronicles = () => {
  const services = [
    {
      title: 'Faith + Family Media',
      description: 'Real stories, practical tips, and inspiration for entrepreneurial families',
      icon: '📺'
    },
    {
      title: 'Q&A Faith Co. Apparel',
      description: 'Apparel & accessories with a prophetic message',
      icon: '👕'
    },
    {
      title: 'Books & Digital Products',
      description: 'Devotionals, e-books, journals, workbooks, marriage studies',
      icon: '📚'
    },
    {
      title: 'Qwhitemusic & Que the Word',
      description: 'Inspirational music and Bible studies for spiritual growth',
      icon: '🎵'
    }
  ];

  const socialLinks = [
    { platform: 'YouTube', url: 'https://www.youtube.com/@qnachronicles', icon: 'YT' },
    { platform: 'Instagram', url: 'https://www.instagram.com/qnachronicles', icon: 'IG' },
    { platform: 'TikTok', url: 'https://www.tiktok.com/@qnachronicles', icon: 'TT' }
  ];

  return (
    <div className="department-page qa-chronicles">
      <section className="dept-hero qa-chronicles">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <img src="/logos/qa-chronicles-logo.png" alt="Q&A Chronicles Logo" className="hero-logo" />
              <h1>Q&A Chronicles</h1>
              <p className="hero-tagline">Faith, Family, Business, Music & Community</p>
              <p className="hero-description">
                Your hub for real stories, practical tips, and inspiration for entrepreneurial 
                families striving to thrive without a 9-to-5. Managing our internal brands 
                including faith + family media, apparel, books, music, and spiritual growth content.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Explore Content</button>
                <button className="btn btn-secondary">Visit Q&A Faith Co.</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div className="floating-icon">📖</div>
                <div className="floating-icon">🎯</div>
                <div className="floating-icon">✨</div>
                <div className="floating-icon">💡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To help entrepreneurial families build God-centered businesses and legacies 
            through authentic storytelling, practical resources, and faith-driven content 
            that inspires and equips families to thrive in their purpose.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Our Brands & Services</h2>
          <p>Comprehensive content and products to support your faith and family journey.</p>
          
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

      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <img src="/images/TheHustlethatHonorsGod(coverpage).jpg" alt="The Hustle that Honors God" className="product-image" />
              <h3>The Hustle that Honors God</h3>
              <p>A guide to building a God-centered business</p>
            </div>
            <div className="product-card">
              <img src="/images/TheCrown&CoverCouplesworkbook.jpg" alt="The Crown & Cover Couples Workbook" className="product-image" />
              <h3>The Crown & Cover</h3>
              <p>Couples workbook for strengthening relationships</p>
            </div>
            <div className="product-card">
              <img src="/images/2.png" alt="Q&A Faith Co. Apparel" className="product-image" />
              <h3>Q&A Faith Co.</h3>
              <p>Prophetic apparel and accessories</p>
            </div>
          </div>
        </div>
      </section>

      <section className="connect-section">
        <div className="container">
          <h2>Connect With Q&A Chronicles</h2>
          <p>Follow us across all platforms for daily inspiration, family tips, and faith-based business guidance.</p>
          
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
        .qa-chronicles {
          --dept-primary: #8B5CF6;
          --dept-secondary: #A78BFA;
          --dept-accent: #C4B5FD;
        }
        
        .dept-hero.qa-chronicles {
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
        
        .mission-section, .services-section, .featured-products, .connect-section {
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
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
        }
        
        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: transform 0.3s ease;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
        }
        
        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .product-card h3, .product-card p {
          padding: 0 1rem;
        }
        
        .product-card p {
          padding-bottom: 1rem;
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

export default QAChronicles;

