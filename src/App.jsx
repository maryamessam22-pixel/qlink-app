import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './features/welcome/Welcome';
import GuardianLogin from './features/auth/GuardianLogin';
import GuardianSignup from './features/auth/GuardianSignup';
import GuardianDashboard from './features/guardian/GuardianDashboard';
import WearerInterface from './features/wearer/WearerInterface';
import './index.css';

import SplashScreen from './features/welcome/SplashScreen';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [showSplash, setShowSplash] = useState(true);

  // i18n & Dual Language Logic (English / Arabic)
  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  if (showSplash) {
    return <SplashScreen onLoadingComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="mobile-app-wrapper">
      <LanguageSwitcher currentLang={language} onToggle={toggleLanguage} />

      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<GuardianLogin />} />
          <Route path="/signup" element={<GuardianSignup />} />
          <Route path="/guardian/dashboard" element={<GuardianDashboard />} />
          <Route path="/wearer" element={<WearerInterface />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
