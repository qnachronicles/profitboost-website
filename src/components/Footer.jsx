import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="text-primary">ProfitBoost LLC</h3>
            <p className="footer-tagline">Build better. Empower your legacy.</p>
            <p className="footer-description">
              Empowering faith-driven entrepreneurs and families to build profitable, 
              sustainable businesses that align with their values and purpose.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Our Departments</h4>
            <ul className="footer-links">
              <li><a href="#new-thing-hustle">New Thing Hustle</a></li>
              <li><a href="#profitboost-consulting">ProfitBoost Consulting</a></li>
              <li><a href="#qa-chronicles">Q&A Chronicles</a></li>
              <li><a href="#legacy-outreach">Legacy + Outreach</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://www.youtube.com/@qnachronicles" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>YT</span>
              </a>
              <a href="https://www.instagram.com/qnachronicles" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>IG</span>
              </a>
              <a href="https://www.tiktok.com/@qnachronicles" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>TT</span>
              </a>
              <a href="https://www.facebook.com/QnAchronicles" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>FB</span>
              </a>
            </div>
            <div className="contact-info">
              <p>📧 info@profitboostllc.com</p>
              <p>📱 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ProfitBoost LLC. All rights reserved.</p>
          <p>Built with faith, purpose, and excellence.</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--text-dark);
          color: white;
          padding: 3rem 0 1rem;
          margin-top: auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        
        .footer-section h4 {
          margin-bottom: 1rem;
          color: var(--secondary-color);
        }
        
        .footer-tagline {
          font-style: italic;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }
        
        .footer-description {
          color: #d1d5db;
          line-height: 1.6;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: var(--secondary-color);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          text-decoration: none;
          font-weight: bold;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: var(--secondary-color);
          transform: translateY(-2px);
        }
        
        .contact-info p {
          margin-bottom: 0.5rem;
          color: #d1d5db;
          font-size: 0.9rem;
        }
        
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 1rem;
          text-align: center;
          color: #9ca3af;
        }
        
        .footer-bottom p {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

