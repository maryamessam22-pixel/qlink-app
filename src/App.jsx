import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './features/welcome/Welcome';
import GuardianLogin from './features/auth/GuardianLogin';
import WearerInterface from './features/wearer/WearerInterface';
import './index.css';

const App = () => {
  const [language, setLanguage] = useState('en');

  // i18n & Dual Language Logic (English / Arabic)
  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div className="mobile-app-wrapper">
      {/* Global Header or Language Switcher for demonstration */}
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
        <button 
          onClick={toggleLanguage} 
          style={{ padding: '5px 10px', borderRadius: '5px', fontSize: '12px', background: 'var(--color-slate)' }}
        >
          {language === 'en' ? 'عربي' : 'EN'}
        </button>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<GuardianLogin />} />
          <Route path="/wearer" element={<WearerInterface />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
