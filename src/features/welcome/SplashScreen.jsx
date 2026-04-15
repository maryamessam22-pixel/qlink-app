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
    <div className="qlink-splash-overlay">
      <div className="qlink-splash-content">
        <QlinkLogo size="large" />
        <p className="qlink-splash-tagline">Smart Safety <br /> Ecosystem</p>
        
        <div className="qlink-splash-loader-wrap">
          <div className="qlink-splash-spinner"></div>
        </div>
      </div>
      
      {/* Decorative blurred blobs for the mesh gradient effect */}
      <div className="qlink-blob qlink-blob-1"></div>
      <div className="qlink-blob qlink-blob-2"></div>
      <div className="qlink-blob qlink-blob-3"></div>
    </div>
  );
};

export default SplashScreen;
