import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Watch } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="qlink-welcome-portal">
      <div className="qlink-welcome-header">
        <QlinkLogo size="large" />
        <h1 className="qlink-welcome-title">Welcome to Qlink</h1>
        <p className="qlink-welcome-subtitle">Choose how you want to use the app.</p>
      </div>

      <div className="qlink-role-cards-container">
        {/* Guardian Option */}
        <div className="qlink-role-option-card">
          <div className="qlink-role-icon-box guardian">
            <Shield size={24} />
          </div>
          <h2 className="qlink-role-label">Guardian</h2>
          <p className="qlink-role-desc">
            Monitor and protect your loved ones, receive alerts, and track real-time locations.
          </p>
          <button 
            className="qlink-role-action-btn btn-guardian"
            onClick={() => navigate('/login')}
          >
            Continue as Guardian
          </button>
        </div>

        {/* Wearer Option */}
        <div className="qlink-role-option-card">
          <div className="qlink-role-icon-box wearer">
            <Watch size={24} />
          </div>
          <h2 className="qlink-role-label">Wearer</h2>
          <p className="qlink-role-desc">
            Use the app with your Qlink safety bracelet to stay connected and send emergency alerts.
          </p>
          <button 
            className="qlink-role-action-btn btn-wearer"
            onClick={() => navigate('/wearer')}
          >
            Continue as Wearer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
