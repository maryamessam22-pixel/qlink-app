import React from 'react';

const QlinkLogo = ({ variant = 'dark', size = 'medium' }) => {
  const color = variant === 'light' ? 'var(--color-white)' : 'var(--color-primary-dark)';
  const fontSize = size === 'large' ? '48px' : size === 'medium' ? '32px' : '24px';

  return (
    <div className="qlink-brand-identity" style={{ 
      fontFamily: 'var(--font-secondary)', 
      fontWeight: 'bold', 
      fontSize: fontSize, 
      color: color,
      display: 'flex',
      alignItems: 'baseline',
      gap: '2px'
    }}>
      Q<span style={{ color: variant === 'light' ? 'var(--color-white)' : 'var(--color-primary)' }}>link</span>
    </div>
  );
};

export default QlinkLogo;
