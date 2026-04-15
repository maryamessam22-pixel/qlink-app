import React from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ currentLang, onToggle }) => {
  return (
    <button 
      className="global-language-toggle" 
      onClick={onToggle}
      aria-label="Toggle Language"
    >
      <span className="lang-text">
        {currentLang === 'en' ? 'Arabic' : 'English'}
      </span>
      <span className="lang-icon">
        {currentLang === 'en' ? 'AR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
