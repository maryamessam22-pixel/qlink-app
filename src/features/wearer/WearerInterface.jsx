import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, AlertCircle, Home } from 'lucide-react';
import './WearerInterface.css';

const WearerInterface = () => {
  const navigate = useNavigate();

  return (
    <div className="wearer-dashboard-wrap">
      <button className="wearer-nav-home" onClick={() => navigate('/')}>
        <Home size={18} />
      </button>
      
      <div className="qr-section">
        <h2 className="qr-title">Emergency QR</h2>
        <p className="qr-description">
          Scan this code to access medical profile and emergency contacts.
        </p>
        
        <div className="qr-box">
          <QrCode size={160} color="var(--color-slate)" strokeWidth={1} />
        </div>
      </div>

      <button className="sos-trigger" onClick={() => alert('SOS Alert Sent to Guardians!')}>
        <AlertCircle size={32} />
        <span>SOS</span>
      </button>
    </div>
  );
};

export default WearerInterface;
