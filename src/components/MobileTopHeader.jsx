import React, { useContext } from 'react';
import { ArrowLeft, Bell, Globe, Signal, BatteryMedium } from 'lucide-react';
import appIcon from '../assets/icons/app_icon.png';
import userPhoto from '../assets/images/mypic.png';
import rotatingIconVideo from '../assets/logos/vid-icon.mp4';
import AppLanguageContext from './AppLanguageContext';
import './MobileTopHeader.css';

const MobileTopHeader = ({
  title,
  subtitle,
  showBack = false,
  backLabel = 'Back',
  onBack,
  showNotificationDot = true,
  useRotatingLogo = false,
}) => {
  const { language, toggleLanguage } = useContext(AppLanguageContext);

  return (
    <header className="mobile-top-header">
      <div className="mobile-top-status-bar">
        <span className="mobile-top-time">9:41</span>
        <div className="mobile-top-status-icons">
          <Signal size={16} />
          <BatteryMedium size={16} />
        </div>
      </div>

      <div className="mobile-top-main-row">
        <div className="mobile-top-brand-row">
          {useRotatingLogo ? (
            <video className="mobile-top-app-icon mobile-top-app-icon-video" autoPlay loop muted playsInline>
              <source src={rotatingIconVideo} type="video/mp4" />
            </video>
          ) : (
            <img className="mobile-top-app-icon" src={appIcon} alt="Qlink app icon" />
          )}
          <img className="mobile-top-avatar" src={userPhoto} alt="User profile" />
        </div>

        <div className="mobile-top-action-row">
          <button type="button" className="mobile-top-lang-switch" onClick={toggleLanguage}>
            <Globe size={22} />
            <span className={language === 'ar' ? 'mobile-top-lang-on' : 'mobile-top-lang-off'}>AR</span>
            <span className="mobile-top-lang-separator">/</span>
            <span className={language === 'en' ? 'mobile-top-lang-on' : 'mobile-top-lang-off'}>EN</span>
          </button>
          <button type="button" className="mobile-top-icon-btn">
            <Bell size={22} />
            {showNotificationDot && <span className="mobile-top-dot"></span>}
          </button>
        </div>
      </div>

      {showBack && (
        <button type="button" className="mobile-top-back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          {backLabel}
        </button>
      )}

      {title && <h1 className="mobile-top-title">{title}</h1>}
      {subtitle && <p className="mobile-top-subtitle">{subtitle}</p>}
    </header>
  );
};

export default MobileTopHeader;
