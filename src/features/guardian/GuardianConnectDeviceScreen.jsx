import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import MobileTopHeader from '../../components/MobileTopHeader';
import { setGuardianOnboardingState } from './guardianOnboardingState';
import './GuardianConnectDeviceScreen.css';

const GuardianConnectDeviceScreen = () => {
  const navigate = useNavigate();
  const [braceletCode, setBraceletCode] = useState('');

  const handleTabChange = (tabId) => {
    if (tabId === 'home') navigate('/guardian-dashboard');
    if (tabId === 'map') navigate('/guardian/map');
    if (tabId === 'add') navigate('/guardian/profile/identity');
    if (tabId === 'vault') navigate('/wearer');
    if (tabId === 'settings') navigate('/login');
  };

  const handleSkip = () => {
    setGuardianOnboardingState({ hasProfile: true, hasDevice: false });
    navigate('/guardian-dashboard');
  };

  const handleConnect = () => {
    setGuardianOnboardingState({ hasProfile: true, braceletCode });
    navigate('/guardian/profile/sync');
  };

  return (
    <div className="guardian-connect-screen">
      <MobileTopHeader
        showBack
        backLabel="Back"
        onBack={() => navigate('/guardian/profile/medical')}
        title="Connect Device"
      />
      <div className="guardian-connect-progress-line">
        <span></span>
      </div>
      <p className="guardian-connect-step-label">Step 3 of 3: Hardware Link</p>

      <article className="guardian-connect-tip">
        Find the activation card inside your Qlink bracelet box. Enter the credentials to link this hardware to the patient profile.
      </article>

      <label className="guardian-connect-label">Device Type</label>
      <button type="button" className="guardian-connect-select">
        Choose Device Type <ChevronDown size={20} />
      </button>

      <label className="guardian-connect-label">Enter Code (Inside the bracelet box)</label>
      <input
        className="guardian-connect-input"
        value={braceletCode}
        onChange={(event) => setBraceletCode(event.target.value)}
      />

      <button type="button" className="guardian-connect-primary-button" onClick={handleConnect}>
        Connect the Bracelet
      </button>
      <button type="button" className="guardian-connect-secondary-button" onClick={handleSkip}>
        Skip this step for now
      </button>

      <BottomNav activeTab="add" onTabChange={handleTabChange} />
    </div>
  );
};

export default GuardianConnectDeviceScreen;
