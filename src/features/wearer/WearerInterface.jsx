import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, AlertCircle, Home, Settings } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import './WearerInterface.css';

const WearerInterface = () => {
  const navigate = useNavigate();

  const handleTabChange = (tabId) => {
    if (tabId === 'home') {
      navigate('/guardian-dashboard');
      return;
    }

    if (tabId === 'vault') {
      navigate('/wearer');
      return;
    }

    if (tabId === 'settings') {
      alert('Settings screen coming soon.');
      return;
    }

    if (tabId === 'map') {
      alert('Map screen coming soon.');
      return;
    }

    if (tabId === 'add') {
      alert('Quick action coming soon.');
    }
  };

  return (
    <div className="wearer-container">
      <div className="qlink-wearer-top-bar">
        <button className="qlink-nav-circular-btn" onClick={() => navigate('/')}>
          <Home size={20} />
        </button>
        <button className="qlink-nav-circular-btn">
          <Settings size={20} />
        </button>
      </div>
      
      <div className="qlink-qr-vault-section">
        <header className="qlink-qr-info">
          <h2 className="qlink-qr-header">Emergency Identity</h2>
          <p className="qlink-qr-tagline">
            Guardians and medical staff can scan this to see your vitals.
          </p>
        </header>

        <div className="qlink-qr-frame">
          <QrCode size={180} strokeWidth={1} color="var(--color-primary-dark)" />
        </div>
      </div>

      <div className="sos-action-area">
        <div className="qlink-sos-trigger-ring">
          <div className="qlink-sos-ripple"></div>
          <div className="qlink-sos-ripple"></div>
          <button className="qlink-sos-primary-btn" onClick={() => alert('SOS Alert Transmitted!')}>
            <AlertCircle size={32} />
            <span>SOS</span>
          </button>
        </div>
        <p className="qlink-wearer-footer">Tap and hold for 3 seconds to cancel alert</p>
      </div>

      <BottomNav activeTab="vault" onTabChange={handleTabChange} />
    </div>
  );
};

export default WearerInterface;
