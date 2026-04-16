import React, { useEffect } from 'react';
import QlinkLogo from '../../components/QlinkLogo';
import './SplashScreen.css';

const SplashScreen = ({ onLoadingComplete, durationMs = 2500, className = '' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, durationMs);
    return () => clearTimeout(timer);
  }, [onLoadingComplete, durationMs]);

  return (
    <div className={['splash-screen', className].filter(Boolean).join(' ')}>
      <div className="splash-content">
        <QlinkLogo size="large" />
        <p className="splash-tagline">Smart Safety <br /> Ecosystem</p>

        <div className="splash-loader-wrap">
          <div className="splash-spinner"></div>
        </div>
      </div>

      <div className="splash-blob splash-blob-red"></div>
      <div className="splash-blob splash-blob-blue"></div>
    </div>
  );
};

export default SplashScreen;
