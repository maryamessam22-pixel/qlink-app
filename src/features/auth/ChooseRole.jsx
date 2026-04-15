import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, User } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import './ChooseRole.css';

const ChooseRole = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate('/signup', { state: { role } });
  };

  return (
    <div className="qlink-choose-role-screen">
      <header className="choose-role-header">
        <QlinkLogo size="large" />
        <h1 className="choose-role-title">Welcome to Qlink</h1>
      </header>

      <div className="role-cards-wrapper">
        <div className="role-card elevated">
          <div className="role-icon-container">
            <Shield size={32} color="var(--color-primary)" />
          </div>
          <h2 className="role-card-name">Guardian</h2>
          <p className="role-card-description">
            Monitor and protect your loved ones, receive alerts, and track real-time locations.
          </p>
          <button 
            className="role-selection-btn"
            onClick={() => handleRoleSelection('guardian')}
          >
            Continue as Guardian
          </button>
        </div>

        <div className="role-card elevated">
          <div className="role-icon-container">
            <User size={32} color="var(--color-primary)" />
          </div>
          <h2 className="role-card-name">Wearer</h2>
          <p className="role-card-description">
            Use the app with your Qlink safety bracelet to stay connected and send emergency alerts.
          </p>
          <button 
            className="role-selection-btn"
            onClick={() => handleRoleSelection('wearer')}
          >
            Continue as Wearer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
