import React from 'react';
import logoImg from '../assets/logos/qlink_logo.png';

const QlinkLogo = ({ variant = 'dark', size = 'medium' }) => {
  const width = size === 'large' ? '180px' : size === 'medium' ? '120px' : '80px';
  
  return (
    <div className="qlink-brand-identity" style={{ 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img 
        src={logoImg} 
        alt="Qlink Pro" 
        style={{ 
          width: width,
          height: 'auto',
          filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none'
        }} 
      />
    </div>
  );
};

export default QlinkLogo;
