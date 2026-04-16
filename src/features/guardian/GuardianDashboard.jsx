import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  BatteryMedium,
  CirclePlus,
  Globe,
  HeartPulse,
  MapPinned,
  MonitorSmartphone,
  ShieldCheck,
  Signal,
} from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import bgImage from '../../assets/images/bg.png';
import userPhoto from '../../assets/images/mypic.png';
import rotatingIconVideo from '../../assets/logos/vid-icon.mp4';
import './GuardianDashboard.css';

const GuardianDashboard = () => {
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    if (tab === 'home') {
      navigate('/guardian-dashboard');
    }
  };

  return (
    <div className="guardian-dashboard-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="guardian-dashboard-header">
        <div className="guardian-dashboard-status-bar">
          <span className="guardian-dashboard-time">9:41</span>
          <div className="guardian-dashboard-status-icons">
            <Signal size={15} />
            <BatteryMedium size={15} />
          </div>
        </div>

        <div className="guardian-dashboard-top-row">
          <div className="guardian-dashboard-brand">
            <video
              className="guardian-dashboard-brand-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={rotatingIconVideo} type="video/mp4" />
            </video>
            <img className="guardian-dashboard-avatar" src={userPhoto} alt="Guardian profile" />
          </div>

          <div className="guardian-dashboard-actions">
            <button type="button" className="guardian-dashboard-icon-btn" aria-label="Language">
              <Globe size={20} />
            </button>
            <button type="button" className="guardian-dashboard-icon-btn guardian-dashboard-bell" aria-label="Notifications">
              <Bell size={20} />
              <span className="guardian-dashboard-dot"></span>
            </button>
          </div>
        </div>

        <div className="guardian-dashboard-copy">
          <h1 className="guardian-dashboard-title">Hello, Mariam Essam</h1>
          <p className="guardian-dashboard-subtitle">Your Safety Circle Command Center</p>
        </div>
      </div>

      <main className="guardian-dashboard-content">
        <section className="guardian-dashboard-metrics">
          <article className="guardian-dashboard-metric guardian-dashboard-metric-blue">
            <div className="guardian-dashboard-metric-head">
              <MonitorSmartphone size={18} />
              <span className="guardian-dashboard-pill">OFFLINE</span>
            </div>
            <strong className="guardian-dashboard-metric-value">0</strong>
            <span className="guardian-dashboard-metric-label">Active Devices</span>
          </article>

          <article className="guardian-dashboard-metric guardian-dashboard-metric-green">
            <div className="guardian-dashboard-metric-head">
              <HeartPulse size={18} />
            </div>
            <strong className="guardian-dashboard-metric-value">0</strong>
            <span className="guardian-dashboard-metric-label">Protected Members</span>
          </article>
        </section>

        <section className="guardian-dashboard-status-card">
          <div className="guardian-dashboard-status-icon">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h2 className="guardian-dashboard-status-title">System Status</h2>
            <p className="guardian-dashboard-status-text">
              No devices connected till now. No alerts detected.
            </p>
          </div>
        </section>

        <section className="guardian-dashboard-feature guardian-dashboard-feature-green">
          <h2 className="guardian-dashboard-feature-title">Create a Profile</h2>
          <p className="guardian-dashboard-feature-text">
            Create a medical ID for a loved one to activate their emergency QR protection immediately.
          </p>
          <button
            type="button"
            className="guardian-dashboard-feature-btn"
            onClick={() => navigate('/guardian-profile-identity')}
          >
            <CirclePlus size={18} />
            <span>Add First Profile</span>
          </button>
          <div className="guardian-dashboard-watermark">Q</div>
        </section>

        <section className="guardian-dashboard-feature guardian-dashboard-feature-blue">
          <h2 className="guardian-dashboard-feature-title">Connect a Bracelet</h2>
          <p className="guardian-dashboard-feature-text">
            Pair a Qlink bracelet to start protecting your loved ones in real time and expand your safety circle.
          </p>
          <button type="button" className="guardian-dashboard-feature-btn">
            <CirclePlus size={18} />
            <span>Add First Bracelet</span>
          </button>
          <div className="guardian-dashboard-watermark">Q</div>
        </section>

        <section className="guardian-dashboard-activity">
          <div className="guardian-dashboard-activity-head">
            <h2 className="guardian-dashboard-section-title">Recent Activity</h2>
            <button type="button" className="guardian-dashboard-see-all">
              See all
            </button>
          </div>

          <div className="guardian-dashboard-empty">
            <MapPinned size={28} />
            <span>No activity yet</span>
          </div>
        </section>
      </main>

      <BottomNav activeTab="home" onTabChange={handleTabChange} />
    </div>
  );
};

export default GuardianDashboard;
