import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen-wrap">
      <div className="welcome-content-group">
        <h1 className="welcome-title">Qlink Pro</h1>
        <p className="welcome-subtitle">
          Your safety, linked. Choose your portal to begin.
        </p>
      </div>
      
      <div className="welcome-action-stack">
        <button 
          className="welcome-role-btn welcome-guardian-trigger" 
          onClick={() => navigate('/login')}
        >
          Guardian Portal
        </button>
        
        <button 
          className="welcome-role-btn welcome-wearer-trigger"
          onClick={() => navigate('/wearer')}
        >
          Wearer Interface
        </button>
      </div>
    </div>
  );
};

export default Welcome;
