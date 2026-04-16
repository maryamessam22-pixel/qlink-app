import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CirclePlay, ShieldCheck, ScanLine, Radio } from 'lucide-react';
import './GuardianSetupBracelet.css';

const GuardianSetupBracelet = () => {
  const navigate = useNavigate();

  return (
    <div className="guardian-setup-screen">
      <header className="guardian-setup-header">
        <button type="button" className="guardian-setup-back" onClick={() => navigate('/guardian-dashboard')}>
          <ArrowLeft size={18} />
        </button>
        <h1>Qlink Setup</h1>
      </header>

      <div className="guardian-setup-hero"></div>
      <div className="guardian-setup-step-indicator"></div>

      <h2>Let's Link Your First Bracelet</h2>
      <p className="guardian-setup-subtitle">Follow these simple steps to activate your life-saving device.</p>

      <ul className="guardian-setup-list">
        <li>
          <span><ScanLine size={16} /></span>
          <div>
            <h3>Enter the code inside the box to pair</h3>
            <p>QR Code connection</p>
          </div>
        </li>
        <li>
          <span><ShieldCheck size={16} /></span>
          <div>
            <h3>Build the safety profile</h3>
            <p>Medical info and emergency contacts</p>
          </div>
        </li>
        <li>
          <span><Radio size={16} /></span>
          <div>
            <h3>Ready for emergencies</h3>
            <p>One tap to alert responders</p>
          </div>
        </li>
      </ul>

      <button type="button" className="guardian-setup-primary" onClick={() => navigate('/guardian/setup-member')}>
        Start Linking
      </button>
      <button type="button" className="guardian-setup-secondary">
        <CirclePlay size={16} /> Watch Tutorial
      </button>
    </div>
  );
};

export default GuardianSetupBracelet;
