import React, { useEffect } from 'react';
import QlinkLogo from '../../components/QlinkLogo';
import './SplashScreen.css';

const SplashScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="splash-screen">
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
