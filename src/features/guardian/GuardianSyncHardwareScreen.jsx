import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QlinkLogo from '../../components/QlinkLogo';
import { setGuardianOnboardingState } from './guardianOnboardingState';
import './GuardianSyncHardwareScreen.css';

const GuardianSyncHardwareScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setGuardianOnboardingState({ hasProfile: true, hasDevice: true });
      navigate('/guardian-dashboard');
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="guardian-sync-screen">
      <QlinkLogo size="large" />
      <h1>Syncing to Hardware</h1>
      <p>Encrypting data into bracelet's hardware ID</p>
      <div className="guardian-sync-progress-track">
        <span></span>
      </div>
      <small>Loading..</small>
    </div>
  );
};

export default GuardianSyncHardwareScreen;
