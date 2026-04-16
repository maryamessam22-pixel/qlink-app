import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CircleCheck, UserRound, House, Bell, Map } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import './GuardianSetupCompleteScreen.css';

const GuardianSetupCompleteScreen = () => {
  const navigate = useNavigate();

  const handleTabChange = (tabId) => {
    if (tabId === 'home') navigate('/guardian-dashboard');
    if (tabId === 'map') navigate('/guardian/map');
    if (tabId === 'add') navigate('/guardian/setup-member');
    if (tabId === 'vault') navigate('/wearer');
    if (tabId === 'settings') navigate('/login');
  };

  return (
    <div className="guardian-setup-complete-screen">
      <header className="guardian-setup-complete-header">
        <button type="button" onClick={() => navigate('/guardian/define-zone')}><ArrowLeft size={18} /></button>
        <h1>Setup Complete</h1>
      </header>

      <div className="guardian-setup-complete-step"></div>
      <div className="guardian-setup-complete-icon"><CircleCheck size={44} /></div>

      <h2>Safe Zone Created Successfully!</h2>
      <p>The tracker will now notify you when the device enters or leaves this area.</p>

      <div className="guardian-setup-complete-map"></div>

      <section className="guardian-setup-complete-details">
        <h3>Zone Details</h3>
        <div><UserRound size={16} /> <span>Assigned To</span> Mohamed Saber</div>
        <div><House size={16} /> <span>Zone Name</span> Home Zone</div>
        <div><Bell size={16} /> <span>Notifications</span> Entry & Exit Alerts Enabled</div>
      </section>

      <button type="button" className="guardian-setup-complete-button" onClick={() => navigate('/guardian/map')}>
        <Map size={16} /> Back to Map
      </button>

      <BottomNav activeTab="map" onTabChange={handleTabChange} />
    </div>
  );
};

export default GuardianSetupCompleteScreen;
