import { MapPin, Clock, Plus, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './GuardianDashboard.css';

const GuardianDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="guardian-dashboard-wrap">
      <header className="guardian-dash-header">
        <div className="guardian-header-top">
          <h1 className="guardian-dash-title">My Wearers</h1>
          <button className="guardian-logout-btn" onClick={() => navigate('/')}>
            <LogOut size={18} />
          </button>
        </div>
      </header>
      
      <div className="guardian-dash-content">
        <div className="guardian-wearer-card">
          <div className="wearer-card-info">
            <h3 className="wearer-name">Ahmed Essam</h3>
            <span className="wearer-status">Active</span>
          </div>
          <div className="wearer-card-meta">
            <div className="meta-item">
              <Clock size={14} /> <span>Last seen 5m ago</span>
            </div>
            <div className="meta-item">
              <MapPin size={14} /> <span>Heliopolis, Cairo</span>
            </div>
          </div>
        </div>
        
        <button className="guardian-add-btn">
          <Plus size={20} />
          <span>Add New Wearer</span>
        </button>
      </div>
    </div>
  );
};

export default GuardianDashboard;
