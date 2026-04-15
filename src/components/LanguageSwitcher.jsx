import React from 'react';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ currentLang, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className="language-switcher-btn"
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '20px',
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: 'var(--color-primary-dark)',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '12px'
      }}
    >
      <Globe size={16} />
      <span>{currentLang === 'en' ? 'عربي' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
