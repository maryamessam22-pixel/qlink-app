import React from 'react';
import { Home, Map, Plus, Lock, Settings } from 'lucide-react';
import './BottomNav.css';

const BottomNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'map', icon: Map, label: 'Map' },
    { id: 'add', icon: Plus, label: '', isAction: true },
    { id: 'vault', icon: Lock, label: 'Vault' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <nav className="qlink-bottom-nav-container">
      <div className="bottom-nav-glass-shell">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`nav-tab-item ${activeTab === tab.id ? 'active' : ''} ${tab.isAction ? 'action-center' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <div className="nav-icon-wrapper">
              <tab.icon size={tab.isAction ? 28 : 22} />
            </div>
            {!tab.isAction && <span className="nav-tab-label">{tab.label}</span>}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
