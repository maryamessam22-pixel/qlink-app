import React, { useState } from 'react';
import { User, Activity, MapPin, Plus, Bell, ChevronRight, X, Smartphone } from 'lucide-react';
import './GuardianDashboard.css';

const GuardianDashboard = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [wearers, setWearers] = useState([
    { id: 1, name: 'Ahmed Essam', location: 'Heliopolis, Cairo', status: 'Active' },
    { id: 2, name: 'Sami Mansour', location: 'Maadi, Cairo', status: 'Active' }
  ]);

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
          <div className="qlink-stat-val">{wearers.length}</div>
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

      <button className="qlink-fab-add" onClick={() => setShowAddModal(true)}>
        <Plus size={28} />
      </button>

      {/* Add Wearer Modal */}
      {showAddModal && (
        <div className="qlink-modal-overlay">
          <div className="qlink-modal-content slide-up">
            <header className="qlink-modal-header">
              <h3 className="qlink-modal-title">Link New Bracelet</h3>
              <button className="qlink-modal-close" onClick={() => setShowAddModal(false)}>
                <X size={24} />
              </button>
            </header>
            
            <div className="qlink-modal-body">
              <div className="qlink-link-instruction">
                <div className="qlink-instr-icon"><Smartphone size={24} /></div>
                <p>Scan the QR code on the back of the Qlink bracelet to pair it with your hub.</p>
              </div>
              
              <button className="qlink-primary-action-btn" style={{ background: 'var(--color-primary-dark)', padding: '16px', borderRadius: '14px', width: '100%', color: 'white', fontWeight: 'bold' }}>
                Open Camera Scanner
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuardianDashboard;
