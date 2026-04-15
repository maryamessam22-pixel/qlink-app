import React from 'react';
import './GuardianDashboard.css';

const GuardianDashboard = () => {
  return (
    <div className="guardian-dashboard-wrap">
      <header className="guardian-dash-header">
        <h1 className="guardian-dash-title">My Wearers</h1>
      </header>
      
      <div className="guardian-dash-content">
        <div className="guardian-wearer-card">
          <div className="wearer-card-info">
            <h3 className="wearer-name">Ahmed Essam</h3>
            <span className="wearer-status">Active</span>
          </div>
          <div className="wearer-card-meta">
            Last seen 5m ago near Heliopolis
          </div>
        </div>
        
        <button className="guardian-add-btn">
          + Add New Wearer
        </button>
      </div>
    </div>
  );
};

export default GuardianDashboard;
