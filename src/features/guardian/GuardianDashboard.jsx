import React from 'react';
import { User, Activity, MapPin, Plus, Bell, ChevronRight } from 'lucide-react';
import './GuardianDashboard.css';

const GuardianDashboard = () => {
  const wearers = [
    { id: 1, name: 'Ahmed Essam', location: 'Heliopolis, Cairo', status: 'Active' },
    { id: 2, name: 'Sami Mansour', location: 'Maadi, Cairo', status: 'Active' }
  ];

  return (
    <div className="qlink-dashboard-container">
      <header className="qlink-dash-header-block">
        <div className="qlink-dash-welcome">
          <span className="qlink-dash-date">Wednesday, April 15</span>
          <h1 className="qlink-dash-greeting">Hi, Mariam</h1>
        </div>
        <div className="qlink-dash-avatar">
          <User size={24} />
        </div>
      </header>

      <div className="qlink-stat-grid">
        <div className="qlink-stat-card">
          <div className="qlink-stat-val">2</div>
          <div className="qlink-stat-label">Active Wearers</div>
        </div>
        <div className="qlink-stat-card">
          <div className="qlink-stat-val">0</div>
          <div className="qlink-stat-label">Alerts Found</div>
        </div>
      </div>

      <section>
        <h2 className="qlink-section-title">
          <Activity size={18} /> My Protected Circle
        </h2>
        <div className="qlink-wearer-feed">
          {wearers.map(wearer => (
            <div key={wearer.id} className="qlink-wearer-entry">
              <div className="qlink-entry-img">
                <User size={24} />
              </div>
              <div className="qlink-entry-info">
                <div className="qlink-entry-name">{wearer.name}</div>
                <div className="qlink-entry-loc">
                  <MapPin size={10} style={{ marginRight: 4 }} />
                  {wearer.location}
                </div>
              </div>
              <div className="qlink-status-dot"></div>
              <ChevronRight size={18} color="#CBD5E1" />
            </div>
          ))}
        </div>
      </section>

      <button className="qlink-fab-add">
        <Plus size={28} />
      </button>

      {/* Background Tab Bar Simulation for Mobile Feel */}
      <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #f1f5f9', padding: '15px 0' }}>
          <Activity size={20} color="var(--color-primary)" />
          <MapPin size={20} color="#94A3B8" />
          <Bell size={20} color="#94A3B8" />
          <Settings size={20} color="#94A3B8" />
        </div>
      </div>
    </div>
  );
};

export default GuardianDashboard;
