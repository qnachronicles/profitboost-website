import React, { useState, useEffect } from 'react';
import { loadDepartmentContent, defaultContent } from '../utils/contentLoader';

const NewThingHustle = () => {
  const [content, setContent] = useState(defaultContent.departments['new-thing-hustle']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await loadDepartmentContent('new-thing-hustle');
        if (data) {
          setContent(data);
        }
      } catch (error) {
        console.error('Error loading New Thing Hustle content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  const services = content.services || [];

  const socialLinks = [
    { platform: 'Instagram', url: content.social?.instagram || '#', icon: 'IG' },
    { platform: 'TikTok', url: content.social?.tiktok || '#', icon: 'TT' },
    { platform: 'YouTube', url: content.social?.youtube || '#', icon: 'YT' }
  ];

  return (
    <div className="new-thing-hustle-page">
      {/* Hero Section */}
      <section className="dept-hero new-thing-hustle">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <img src={content.logo || "/logos/new-thing-hustle-logo.png"} alt={`${content.name} Logo`} className="hero-logo" />
              <h1>{content.name}</h1>
              <p className="hero-tagline">{content.tagline}</p>
              <p className="hero-description">
                {content.description}
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div className="element rocket">🚀</div>
                <div className="element star">⭐</div>
                <div className="element chart">📈</div>
                <div className="element light">💡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-text">
              To help content creators and entrepreneurs build God-centered businesses without compromise, 
              emphasizing ethical practices and spiritual alignment in their ventures. We believe that 
              your faith and business can work together to create lasting impact.
            </p>
            <div className="mission-features">
              <div className="feature">
                <span className="feature-icon">🎯</span>
                <h4>Strategic Focus</h4>
                <p>Clear, actionable strategies for digital growth</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🙏</span>
                <h4>Faith Integration</h4>
                <p>Biblical principles woven into business practices</p>
              </div>
              <div className="feature">
                <span className="feature-icon">💪</span>
                <h4>Authentic Motivation</h4>
                <p>Real stories and genuine encouragement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-alt">
        <div className="container">
          <h2>Our Services</h2>
          <p>Empowering digital entrepreneurs with faith-driven strategies and resources.</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.features && (
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
                <button className="btn btn-outline">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glint Section */}
      <section className="section glint-section">
        <div className="container">
          <div className="glint-content">
            <div className="glint-text">
              <h2>Meet Glint</h2>
              <p>
                Glint serves as our guiding inspiration for creating engaging short-form video content 
                across YouTube Shorts, Instagram Reels, and TikTok. Through Glint's wisdom and guidance, 
                we deliver motivational and strategic insights that help entrepreneurs grow their businesses 
                without requiring on-camera presence.
              </p>
              <p>
                Our faceless content strategy, guided by Glint's principles, allows you to build a 
                powerful online presence while maintaining your privacy and focusing on delivering 
                value to your audience.
              </p>
            </div>
            <div className="glint-visual">
              <div className="glint-icon">✨</div>
              <p className="glint-quote">"Let your light shine through your work, not your face."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section">
        <div className="container">
          <div className="social-section">
            <h2 className="text-center">Connect With New Thing Hustle</h2>
            <p className="text-center text-light mb-4">
              Follow us across all platforms for daily motivation, strategies, and faith-based business inspiration.
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
            <h2>Ready to Start Your New Thing?</h2>
            <p className="text-light mb-4">
              Join thousands of entrepreneurs who are building successful, faith-driven businesses 
              with our proven strategies and unwavering support.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Get Started Today</button>
              <button className="btn btn-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 50vh;
        }
        
        .loading-spinner {
          font-size: 1.2rem;
          color: var(--primary-color);
        }
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
        
        .hero-visual {
          position: relative;
          height: 400px;
        }
        
        .floating-elements {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .element {
          position: absolute;
          font-size: 3rem;
          animation: float 3s ease-in-out infinite;
        }
        
        .rocket { top: 10%; left: 20%; animation-delay: 0s; }
        .star { top: 20%; right: 10%; animation-delay: 0.5s; }
        .chart { bottom: 30%; left: 10%; animation-delay: 1s; }
        .light { bottom: 10%; right: 20%; animation-delay: 1.5s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .mission-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .mission-text {
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 3rem;
          color: var(--text-light);
        }
        
        .mission-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .feature {
          text-align: center;
        }
        
        .feature-icon {
          font-size: 3rem;
          display: block;
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
        
        .glint-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        .glint-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .glint-text {
          font-size: 1.1rem;
          line-height: 1.7;
        }
        
        .glint-visual {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
        }
        
        .glint-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        
        .glint-quote {
          font-style: italic;
          color: var(--dept-color);
          font-weight: 600;
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
          
          .glint-content {
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

export default NewThingHustle;

