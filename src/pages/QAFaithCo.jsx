import React from 'react';

const QAFaithCo = () => {
  return (
    <div className="qa-faith-co-page">
      {/* Hero Section */}
      <section className="dept-hero qa-faith-co">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <img src="/images/2.png" alt="Q&A Faith Co. Logo" className="hero-logo" />
              <h1>Q&A Faith Co.</h1>
              <p className="hero-tagline">Apparel & Accessories with a Prophetic Message</p>
              <p className="hero-description">
                Faith-inspired apparel and accessories designed to share God's love and 
                prophetic messages through fashion. Each piece is created to encourage, 
                inspire, and spread the Gospel in everyday life.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Shop Now</button>
                <button className="btn btn-outline">View Collection</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="faith-elements">
                <div className="element cross">✝️</div>
                <div className="element heart">❤️</div>
                <div className="element dove">🕊️</div>
                <div className="element crown">👑</div>
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
              To create beautiful, meaningful apparel and accessories that serve as conversation 
              starters for faith, hope, and love. Every design carries a prophetic message 
              intended to encourage the wearer and inspire those around them.
            </p>
            <div className="mission-features">
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <h4>Prophetic Design</h4>
                <p>Each piece carries a God-inspired message</p>
              </div>
              <div className="feature">
                <span className="feature-icon">💝</span>
                <h4>Quality Craftsmanship</h4>
                <p>Premium materials and attention to detail</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🌟</span>
                <h4>Kingdom Impact</h4>
                <p>Fashion that makes a difference for eternity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manus Connection Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="manus-connection">
            <h2 className="text-center">Powered by Manus</h2>
            <p className="text-center text-light mb-4">
              Q&A Faith Co. is proudly powered by Manus, providing seamless e-commerce 
              solutions and global reach for our faith-based products.
            </p>
            <div className="manus-features">
              <div className="manus-feature">
                <div className="feature-icon">🛒</div>
                <h4>Seamless Shopping</h4>
                <p>Easy browsing and secure checkout experience</p>
              </div>
              <div className="manus-feature">
                <div className="feature-icon">🌍</div>
                <h4>Global Reach</h4>
                <p>Worldwide shipping to spread the message</p>
              </div>
              <div className="manus-feature">
                <div className="feature-icon">🔒</div>
                <h4>Secure Platform</h4>
                <p>Safe and reliable transaction processing</p>
              </div>
              <div className="manus-feature">
                <div className="feature-icon">📱</div>
                <h4>Mobile Optimized</h4>
                <p>Perfect shopping experience on any device</p>
              </div>
            </div>
            <div className="manus-cta text-center">
              <a 
                href="https://manus.com/qafaithco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit Q&A Faith Co. on Manus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Product Categories</h2>
            <p className="text-light">
              Discover our range of faith-inspired products designed to encourage and inspire.
            </p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">👕</div>
              <h3>Apparel</h3>
              <p>T-shirts, hoodies, and clothing with prophetic messages</p>
            </div>
            <div className="category-card">
              <div className="category-icon">💍</div>
              <h3>Accessories</h3>
              <p>Jewelry, bags, and accessories that share faith</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🏠</div>
              <h3>Home Decor</h3>
              <p>Wall art, pillows, and items to bless your home</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎁</div>
              <h3>Gifts</h3>
              <p>Perfect presents for believers and seekers alike</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="social-section">
            <h2 className="text-center">Connect With Q&A Faith Co.</h2>
            <p className="text-center text-light mb-4">
              Follow us for new product launches, inspirational content, and faith-based community.
            </p>
            <div className="social-grid">
              <a 
                href="https://www.instagram.com/qafaithco"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon">IG</div>
                <h4>Instagram</h4>
                <p>Daily inspiration & products</p>
              </a>
              <a 
                href="https://www.facebook.com/qafaithco"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon">FB</div>
                <h4>Facebook</h4>
                <p>Community & updates</p>
              </a>
              <a 
                href="https://www.tiktok.com/@qafaithco"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon">TT</div>
                <h4>TikTok</h4>
                <p>Creative faith content</p>
              </a>
              <a 
                href="https://manus.com/qafaithco"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-icon">🛒</div>
                <h4>Shop</h4>
                <p>Browse our collection</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Wear Your Faith</h2>
            <p className="text-light mb-4">
              Join the movement of believers who aren't afraid to wear their faith boldly. 
              Every purchase supports our mission to spread God's love through fashion.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://manus.com/qafaithco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Shop Q&A Faith Co.
              </a>
              <button className="btn btn-secondary">Join Our Newsletter</button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .dept-hero {
          background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #C084FC 100%);
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
          width: 120px;
          height: auto;
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
        
        .faith-elements {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .element {
          position: absolute;
          font-size: 4rem;
          animation: float 3s ease-in-out infinite;
        }
        
        .cross { top: 10%; left: 20%; animation-delay: 0s; }
        .heart { top: 20%; right: 10%; animation-delay: 0.5s; }
        .dove { bottom: 30%; left: 10%; animation-delay: 1s; }
        .crown { bottom: 10%; right: 20%; animation-delay: 1.5s; }
        
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
        
        .manus-connection {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .manus-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }
        
        .manus-feature {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        
        .manus-feature:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        
        .manus-feature .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .manus-feature h4 {
          color: #8B5CF6;
          margin-bottom: 1rem;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .category-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        
        .category-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .category-card h3 {
          color: #8B5CF6;
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
          color: #8B5CF6;
        }
        
        .social-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #8B5CF6, #A855F7);
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
        
        .btn {
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          cursor: pointer;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #8B5CF6, #A855F7);
          color: white;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
        }
        
        .btn-secondary {
          background: transparent;
          color: #8B5CF6;
          border-color: #8B5CF6;
        }
        
        .btn-secondary:hover {
          background: #8B5CF6;
          color: white;
        }
        
        .btn-outline {
          background: transparent;
          color: white;
          border-color: white;
        }
        
        .btn-outline:hover {
          background: white;
          color: #8B5CF6;
        }
        
        .section {
          padding: 4rem 0;
        }
        
        .section-alt {
          background: #f8fafc;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .text-center {
          text-align: center;
        }
        
        .text-light {
          color: #64748b;
        }
        
        .mb-4 {
          margin-bottom: 2rem;
        }
        
        .mb-5 {
          margin-bottom: 3rem;
        }
        
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .categories-grid {
            grid-template-columns: 1fr;
          }
          
          .manus-features {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default QAFaithCo;

