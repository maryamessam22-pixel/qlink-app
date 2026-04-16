import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseRole from './features/auth/ChooseRole';
import GuardianLogin from './features/auth/GuardianLogin';
import CreateAccount from './features/auth/CreateAccount';
import GuardianDashboard from './features/guardian/GuardianDashboard';
import GuardianProfileIdentityScreen from './features/guardian/GuardianProfileIdentityScreen';
import GuardianProfileMedicalScreen from './features/guardian/GuardianProfileMedicalScreen';
import GuardianConnectDeviceScreen from './features/guardian/GuardianConnectDeviceScreen';
import GuardianSyncHardwareScreen from './features/guardian/GuardianSyncHardwareScreen';
import GuardianSetupBracelet from './features/guardian/GuardianSetupBracelet';
import GuardianMapScreen from './features/guardian/GuardianMapScreen';
import GuardianSetupMemberScreen from './features/guardian/GuardianSetupMemberScreen';
import GuardianDefineZoneScreen from './features/guardian/GuardianDefineZoneScreen';
import GuardianSetupCompleteScreen from './features/guardian/GuardianSetupCompleteScreen';
import WearerInterface from './features/wearer/WearerInterface';
import AppLanguageContext from './components/AppLanguageContext';
import './index.css';

import SplashScreen from './features/welcome/SplashScreen';

const App = () => {
  const [language, setLanguage] = useState(() => localStorage.getItem('qlink_language') || 'ar');
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
                  <Route path="/guardian/dashboard" element={<GuardianDashboard />} />
                  <Route path="/guardian/profile/identity" element={<GuardianProfileIdentityScreen />} />
                  <Route path="/guardian/profile/medical" element={<GuardianProfileMedicalScreen />} />
                  <Route path="/guardian/profile/connect" element={<GuardianConnectDeviceScreen />} />
                  <Route path="/guardian/profile/sync" element={<GuardianSyncHardwareScreen />} />
                  <Route path="/guardian/setup" element={<GuardianSetupBracelet />} />
                  <Route path="/guardian/map" element={<GuardianMapScreen />} />
                  <Route path="/guardian/setup-member" element={<GuardianSetupMemberScreen />} />
                  <Route path="/guardian/define-zone" element={<GuardianDefineZoneScreen />} />
                  <Route path="/guardian/setup-complete" element={<GuardianSetupCompleteScreen />} />
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
