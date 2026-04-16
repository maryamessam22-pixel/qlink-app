import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Smartphone, Users, CheckCircle, Eye } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import MobileTopHeader from '../../components/MobileTopHeader';
import { getGuardianOnboardingState } from './guardianOnboardingState';
import './GuardianDashboard.css';
import mohamedSaberImg from '../../assets/images/Mohamed Saber.png';

const GuardianDashboard = () => {
  const navigate = useNavigate();
  const onboardingState = getGuardianOnboardingState();

  const handleTabChange = (tabId) => {
    if (tabId === 'home') {
      navigate('/guardian-dashboard');
      return;
    }

    if (tabId === 'map') {
      navigate('/guardian/map');
      return;
    }

    if (tabId === 'add') {
      navigate('/guardian/profile/identity');
      return;
    }

    if (tabId === 'vault') {
      navigate('/wearer');
      return;
    }

    if (tabId === 'settings') {
      navigate('/login');
    }
  };

  return (
    <div className="guardian-dashboard-screen">
      <MobileTopHeader useRotatingLogo />

      <section className="guardian-dashboard-hero">
        <h1 className="guardian-dashboard-title">Welcome to Guardian Hub</h1>
        <p className="guardian-dashboard-subtitle">Your Safety Circle Command Center</p>
      </section>

      <div className="guardian-dashboard-stat-grid">
        <div className="guardian-dashboard-stat-card">
          <div className="guardian-dashboard-stat-icon">
            <Smartphone size={22} />
          </div>
          <span className="guardian-dashboard-stat-badge">{onboardingState.hasDevice ? 'ONLINE' : 'OFFLINE'}</span>
          <div className="guardian-dashboard-stat-value">{onboardingState.hasDevice ? 1 : 0}</div>
          <div className="guardian-dashboard-stat-label">Active Devices</div>
        </div>
        <div className="guardian-dashboard-stat-card guardian-dashboard-stat-card-success">
          <div className="guardian-dashboard-stat-icon guardian-dashboard-stat-icon-success">
            <Users size={22} />
          </div>
          <div className="guardian-dashboard-stat-value">{onboardingState.hasProfile ? 1 : 0}</div>
          <div className="guardian-dashboard-stat-label">Protected Members</div>
        </div>
      </div>

      <section className="guardian-dashboard-status-card">
        <div className="guardian-dashboard-status-title-row">
          <CheckCircle size={18} />
          <h2>System Status</h2>
        </div>
        <p>{onboardingState.hasDevice ? 'System is active. Members protected' : 'No devices connected till now. No alerts detected.'}</p>
      </section>

      {onboardingState.hasProfile ? (
        <>
          <div className="guardian-dashboard-member-header">
            <h3>Protected Member</h3>
            <button type="button" onClick={() => navigate('/guardian/profile/identity')} className="guardian-dashboard-member-link">
              + Add Member
            </button>
          </div>

          <section className="guardian-dashboard-member-card">
            <div className="guardian-dashboard-member-row">
              <div className="guardian-dashboard-member-avatar">
                <img className="guardian-dashboard-member-photo" src={mohamedSaberImg} alt="Mohamed Saber" />
              </div>
              <div className="guardian-dashboard-member-info">
                <h4>{onboardingState.fullName}</h4>
                <p>{onboardingState.relationship}</p>
              </div>
              <span className="guardian-dashboard-member-pulse">Pulse</span>
            </div>

            <div className="guardian-dashboard-member-actions">
              <button type="button" className="guardian-dashboard-member-action-view">
                <Eye size={16} />
                View Profile
              </button>
              <button
                type="button"
                onClick={() => navigate('/guardian/profile/connect')}
                className="guardian-dashboard-member-action-add"
              >
                <PlusCircle size={16} />
                {onboardingState.hasDevice ? 'Added Device' : 'Add Device'}
              </button>
            </div>

            <span className="guardian-dashboard-member-time">Home - Just now</span>
          </section>
        </>
      ) : (
        <section className="guardian-dashboard-empty-card">
          <h3>Create a Profile</h3>
          <p>Create a medical ID for a loved one to activate their emergency QR protection immediately.</p>
          <button type="button" onClick={() => navigate('/guardian/profile/identity')}>Add First Profile</button>
        </section>
      )}

      {!onboardingState.hasDevice && onboardingState.hasProfile && (
        <section className="guardian-dashboard-connect-card">
          <h3>Connect a Bracelet</h3>
          <p>Pair a Qlink bracelet to start protecting your loved ones in real time and expand your safety circle.</p>
          <button type="button" onClick={() => navigate('/guardian/profile/connect')}>Add First Bracelet</button>
        </section>
      )}

      <BottomNav activeTab="home" onTabChange={handleTabChange} />
    </div>
  );
};

export default GuardianDashboard;
