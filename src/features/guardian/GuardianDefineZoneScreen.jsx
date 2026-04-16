import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Siren, Save } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import './GuardianDefineZoneScreen.css';

const GuardianDefineZoneScreen = () => {
  const navigate = useNavigate();

  const handleTabChange = (tabId) => {
    if (tabId === 'home') navigate('/guardian-dashboard');
    if (tabId === 'map') navigate('/guardian/map');
    if (tabId === 'add') navigate('/guardian/setup-member');
    if (tabId === 'vault') navigate('/wearer');
    if (tabId === 'settings') navigate('/login');
  };

  return (
    <div className="guardian-define-zone-screen">
      <header className="guardian-define-zone-header">
        <button type="button" onClick={() => navigate('/guardian/setup-member')}><ArrowLeft size={18} /></button>
        <h1>Define Zone</h1>
      </header>

      <div className="guardian-define-zone-step"></div>
      <div className="guardian-define-zone-map"></div>
      <p className="guardian-define-zone-help">Drag the circle to reposition or use the slider below</p>

      <div className="guardian-define-zone-card">
        <label>Zone Name</label>
        <div className="guardian-define-zone-input"><Home size={16} /> Home</div>
      </div>

      <div className="guardian-define-zone-card">
        <div className="guardian-define-zone-row">
          <label><Siren size={16} /> Radius (meters)</label>
          <strong>500m</strong>
        </div>
        <input type="range" min="100" max="2000" value="500" readOnly />
      </div>

      <div className="guardian-define-zone-card guardian-define-zone-toggle-row">
        <div>
          <label><Siren size={16} /> Entry & Exit Alerts</label>
          <p>Notify when crossing boundary</p>
        </div>
        <span></span>
      </div>

      <button type="button" className="guardian-define-zone-save" onClick={() => navigate('/guardian/setup-complete')}>
        <Save size={16} /> Save Zone
      </button>
      <button type="button" className="guardian-define-zone-cancel" onClick={() => navigate('/guardian/setup-member')}>
        Cancel and back
      </button>

      <BottomNav activeTab="add" onTabChange={handleTabChange} />
    </div>
  );
};

export default GuardianDefineZoneScreen;
