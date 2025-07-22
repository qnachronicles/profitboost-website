import React, { useState } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewThingHustle from './pages/NewThingHustle';
import ProfitBoostConsulting from './pages/ProfitBoostConsulting';
import MediaBrandDivision from './pages/MediaBrandDivision'; // New import
import LegacyOutreach from './pages/LegacyOutreach';
import QAChronicles from './pages/QAChronicles'; // New import
import QAFaithCo from './pages/QAFaithCo'; // New import
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'new-thing-hustle':
        return <NewThingHustle />;
      case 'profitboost-consulting':
        return <ProfitBoostConsulting />;
      case 'media-brand-division': // New case
        return <MediaBrandDivision />;
      case 'legacy-outreach':
        return <LegacyOutreach />;
      case 'qa-chronicles': // New case
        return <QAChronicles />;
      case 'qa-faith-co': // New case
        return <QAFaithCo />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;


