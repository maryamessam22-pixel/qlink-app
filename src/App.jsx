import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseRole from './features/auth/ChooseRole';
import GuardianLogin from './features/auth/GuardianLogin';
import CreateAccount from './features/auth/CreateAccount';
import AddFirstProfileIdentity from './features/guardian/AddFirstProfileIdentity';
import GuardianDashboard from './features/guardian/GuardianDashboard';
import WearerInterface from './features/wearer/WearerInterface';
import AppLanguageContext from './components/AppLanguageContext';
import './index.css';

import SplashScreen from './features/welcome/SplashScreen';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [showSplash, setShowSplash] = useState(true);

  // handle app language and direction
  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('qlink_language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'ar' ? 'en' : 'ar'));
  };

  return (
    <AppLanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="mobile-app-wrapper">
        {showSplash ? (
          <SplashScreen onLoadingComplete={() => setShowSplash(false)} />
        ) : (
          <div className="app-main-shell">
            <div className="app-route-host">
              <Router>
                <Routes>
                  <Route path="/" element={<ChooseRole />} />
                  <Route path="/login" element={<GuardianLogin />} />
                  <Route path="/signup" element={<CreateAccount />} />
                  <Route path="/guardian-dashboard" element={<GuardianDashboard />} />
                  <Route path="/guardian-profile-identity" element={<AddFirstProfileIdentity />} />
                  <Route path="/wearer" element={<WearerInterface />} />
                </Routes>
              </Router>
            </div>
          </div>
        )}
      </div>
    </AppLanguageContext.Provider>
  );
};

export default App;
