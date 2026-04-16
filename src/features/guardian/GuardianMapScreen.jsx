import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Plus, Minus, LocateFixed } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import MobileTopHeader from '../../components/MobileTopHeader';
import './GuardianMapScreen.css';

const GuardianMapScreen = () => {
  const navigate = useNavigate();

  const handleTabChange = (tabId) => {
    if (tabId === 'home') navigate('/guardian-dashboard');
    if (tabId === 'map') navigate('/guardian/map');
    if (tabId === 'add') navigate('/guardian/setup-member');
    if (tabId === 'vault') navigate('/wearer');
    if (tabId === 'settings') navigate('/login');
  };

  return (
    <div className="guardian-map-screen">
      <MobileTopHeader useRotatingLogo />

      <section className="guardian-map-header">
        <h1>Map</h1>
        <p>2 Bracelets Active</p>
      </section>

      <div className="guardian-map-canvas">
        <div className="guardian-map-search">
          <input type="text" value="Search saved places..." readOnly />
          <button type="button"><LocateFixed size={18} /></button>
        </div>

        <button type="button" className="guardian-map-geofence" onClick={() => navigate('/guardian/setup-member')}>
          Geofencing
        </button>

        <div className="guardian-map-tools">
          <button type="button"><Plus size={18} /></button>
          <button type="button"><Minus size={18} /></button>
          <button type="button" className="guardian-map-tools-primary"><Navigation size={18} /></button>
        </div>
      </div>

      <BottomNav activeTab="map" onTabChange={handleTabChange} />
    </div>
  );
};

export default GuardianMapScreen;
