import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Globe, Apple, AlertCircle } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import './GuardianLogin.css';

const GuardianLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // simulated authentication delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/guardian/dashboard');
    }, 1500);
  };

  return (
    <div className="qlink-auth-gate-wrapper">
      <header className="auth-header-identity">
        <QlinkLogo variant="light" size="large" />
        <h2 className="auth-hub-title">Guardian Hub</h2>
        <p className="auth-hub-tagline">Secure Access Required</p>
      </header>
      
      <form className="auth-form-nucleus" onSubmit={handleLoginSubmit}>
        <div className="auth-field-entry">
          <Mail className="auth-field-icon" size={20} />
          <input 
            className="auth-standard-input"
            type="email" 
            name="email"
            placeholder="Maryamessam22@gmail.com" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="auth-field-entry">
          <Lock className="auth-field-icon" size={20} />
          <input 
            className="auth-standard-input"
            type={showPassword ? "text" : "password"} 
            name="password"
            placeholder="••••••••" 
            value={formData.password}
            onChange={handleInputChange}
            required 
          />
          <button 
            type="button"
            className="auth-field-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        
        <div className="auth-auxiliary-links">
          <span className="auth-aux-link">Forgot Password?</span>
        </div>
        
        <button type="submit" className="auth-primary-action-btn" disabled={isLoading}>
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div className="auth-divider-stack">
        <div className="auth-divider-line"></div>
        <span className="auth-divider-text">OR</span>
        <div className="auth-divider-line"></div>
      </div>

      <div className="auth-social-nexus">
        <button className="auth-social-btn"><Globe size={20} /></button>
        <button className="auth-social-btn"><Apple size={20} /></button>
      </div>

      <div className="auth-emergency-sector">
        <button className="auth-emergency-btn" onClick={() => navigate('/wearer')}>
          <AlertCircle size={20} />
          <span>PUBLIC EMERGENCY SCAN</span>
        </button>
      </div>

      <footer className="auth-footer-nexus">
        New to Qlink? 
        <span className="auth-footer-trigger" onClick={() => navigate('/signup')}>
          Create Account
        </span>
      </footer>
    </div>
  );
};

export default GuardianLogin;
