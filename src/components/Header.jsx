import React, { useState } from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'new-thing-hustle', label: 'New Thing Hustle' },
    { id: 'profitboost-consulting', label: 'ProfitBoost Consulting' },
    { id: 'qa-chronicles', label: 'Q&A Chronicles' },
    { id: 'legacy-outreach', label: 'Legacy + Outreach' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand" onClick={() => setCurrentPage('home')}>
            <h2 className="text-primary">ProfitBoost LLC</h2>
            <p className="tagline">Build better. Empower your legacy.</p>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${currentPage === item.id ? 'nav-link-active' : ''}`}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
      
      <style jsx>{`
        .header {
          background: white;
          box-shadow: var(--shadow-md);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }
        
        .nav-brand {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .nav-brand:hover {
          transform: scale(1.02);
        }
        
        .nav-brand h2 {
          margin-bottom: 0.25rem;
          font-size: 1.5rem;
        }
        
        .tagline {
          font-size: 0.875rem;
          color: var(--text-light);
          margin: 0;
          font-style: italic;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link {
          background: none;
          border: none;
          color: var(--text-dark);
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 0.95rem;
        }
        
        .nav-link:hover {
          background: var(--background-light);
          color: var(--primary-color);
        }
        
        .nav-link-active {
          background: var(--gradient-primary);
          color: white;
        }
        
        .nav-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .nav-toggle span {
          width: 25px;
          height: 3px;
          background: var(--text-dark);
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .nav-links-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav-toggle {
            display: flex;
          }
          
          .nav-link {
            width: 100%;
            text-align: center;
            padding: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

