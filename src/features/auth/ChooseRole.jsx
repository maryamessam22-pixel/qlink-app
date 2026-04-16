import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, User } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import './ChooseRole.css';

const ChooseRole = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Brief loading phase, then fade-in content
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Small delay to allow CSS transition to kick in
      const visTimer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(visTimer);
    }
  }, [isLoading]);

  const handleRoleSelection = (role) => {
    navigate('/signup', { state: { role } });
  };

  // ── Loading screen ──────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="choose-role-loading-overlay">
        <div className="choose-role-loader-logo">
          <QlinkLogo variant="light" size="large" />
        </div>
        <div className="choose-role-spinner-ring">
          <div className="choose-role-spinner-arc" />
        </div>
        <p className="choose-role-loader-hint">Getting things ready…</p>
      </div>
    );
  }

  // ── Main screen (animated in) ───────────────────────────────────
  return (
    <div className={`choose-role-screen ${isVisible ? 'content-visible' : 'content-hidden'}`}>
      <header className="role-header">
        <QlinkLogo variant="light" size="large" />
        <h1 className="role-title">Welcome to Qlink</h1>
        <p className="role-subtitle">Choose how you want to use the app.</p>
      </header>

      <div className="role-list">
        {/* Guardian card */}
        <div className="role-card card-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="role-icon-box">
            <Shield size={32} color="var(--color-primary)" />
          </div>
          <h2 className="role-name">Guardian</h2>
          <p className="role-description">
            Monitor and protect your loved ones, receive alerts, and track real-time locations.
          </p>
          <button
            className="role-action-button"
            onClick={() => handleRoleSelection('guardian')}
          >
            Continue as Guardian
          </button>
        </div>

        {/* Wearer card */}
        <div className="role-card card-slide-up" style={{ animationDelay: '0.25s' }}>
          <div className="role-icon-box wearer-icon-box">
            <User size={32} color="#7f39fb" />
          </div>
          <h2 className="role-name">Wearer</h2>
          <p className="role-description">
            Use the app with your Qlink safety bracelet to stay connected and send emergency alerts.
          </p>
          <button
            className="role-action-button"
            onClick={() => handleRoleSelection('wearer')}
          >
            Continue as Wearer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
