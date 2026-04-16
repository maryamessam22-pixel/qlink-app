import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseRole from './features/auth/ChooseRole';
import GuardianLogin from './features/auth/GuardianLogin';
import CreateAccount from './features/auth/CreateAccount';
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

  return (
    <div className="mobile-app-wrapper">
      {showSplash ? (
        <SplashScreen onLoadingComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <LanguageSwitcher currentLang={language} onToggle={toggleLanguage} />
          <Router>
            <Routes>
              <Route path="/" element={<ChooseRole />} />
              <Route path="/login" element={<GuardianLogin />} />
              <Route path="/signup" element={<CreateAccount />} />
              <Route path="/guardian/dashboard" element={<GuardianDashboard />} />
              <Route path="/wearer" element={<WearerInterface />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
};

export default App;
