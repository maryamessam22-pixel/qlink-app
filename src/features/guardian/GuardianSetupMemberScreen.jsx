import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CircleCheck, UserPlus, ArrowRight } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import './GuardianSetupMemberScreen.css';

const GuardianSetupMemberScreen = () => {
  const navigate = useNavigate();

  const handleTabChange = (tabId) => {
    if (tabId === 'home') navigate('/guardian-dashboard');
    if (tabId === 'map') navigate('/guardian/map');
    if (tabId === 'add') navigate('/guardian/setup-member');
    if (tabId === 'vault') navigate('/wearer');
    if (tabId === 'settings') navigate('/login');
  };

  return (
    <div className="guardian-member-setup-screen">
      <header className="guardian-member-setup-header">
        <button type="button" onClick={() => navigate('/guardian/map')}><ArrowLeft size={18} /></button>
        <h1>Geofence Setup</h1>
      </header>

      <section className="guardian-member-setup-progress">
        <div className="guardian-member-setup-progress-top">
          <h2>Member Selection</h2>
          <span>Step 1 of 3</span>
        </div>
        <div className="guardian-member-setup-progress-track">
          <div></div>
        </div>
      </section>

      <section className="guardian-member-setup-intro">
        <h3>Select a family member</h3>
        <p>Choose the profile you want to monitor with a safe zone perimeter.</p>
      </section>

      <button type="button" className="guardian-member-row guardian-member-row-active">
        <div className="guardian-member-avatar"></div>
        <div className="guardian-member-info">
          <strong>Mohamed</strong>
          <span>Primary Device: Qlink Bracelet</span>
        </div>
        <CircleCheck size={20} />
      </button>

      <button type="button" className="guardian-member-row">
        <div className="guardian-member-avatar guardian-member-avatar-alt"></div>
        <div className="guardian-member-info">
          <strong>Karma</strong>
          <span>Primary Device: Qlink Bracelet</span>
        </div>
      </button>

      <button type="button" className="guardian-member-add-card">
        <div><UserPlus size={20} /></div>
        <article>
          <h4>Add New Member</h4>
          <p>Register a new device</p>
        </article>
      </button>

      <button type="button" className="guardian-member-continue" onClick={() => navigate('/guardian/define-zone')}>
        Continue to Map <ArrowRight size={18} />
      </button>

      <BottomNav activeTab="add" onTabChange={handleTabChange} />
    </div>
  );
};

export default GuardianSetupMemberScreen;
