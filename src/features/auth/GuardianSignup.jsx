import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Globe, Apple, AlertCircle } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import './GuardianLogin.css';

const GuardianSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Match your UX: small simulated delay before routing
    setTimeout(() => {
      setIsLoading(false);
      navigate('/guardian-dashboard');
    }, 1500);
  };

  return (
    <div className="login-screen">
      <header className="login-header">
        <QlinkLogo variant="light" size="large" />
        <h2 className="login-title">Guardian Hub</h2>
        <p className="login-tagline">Secure Access Required</p>
      </header>

      <form className="login-form" onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <Mail className="input-icon" size={20} />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Maryamessam22@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-wrapper">
          <Lock className="field-icon" size={20} />
          <input
            className="login-input"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="forgot-password-wrap">
          <span className="forgot-link">Forgot Password?</span>
        </div>

        <button type="submit" className="login-submit-btn" disabled={isLoading}>
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <div className="login-divider">
        <div className="login-divider-line"></div>
        <span className="login-divider-text">OR</span>
        <div className="login-divider-line"></div>
      </div>

      <div className="social-logins">
        <button className="social-btn" type="button" aria-label="Facebook">
          f
        </button>
        <button className="social-btn" type="button" aria-label="Google">
          G
        </button>
        <button className="social-btn" type="button" aria-label="Apple">
          <Apple size={20} />
        </button>
      </div>

      <div className="emergency-section">
        <button className="emergency-scan-btn" type="button" onClick={() => navigate('/wearer')}>
          <AlertCircle size={20} />
          <span>PUBLIC EMERGENCY SCAN</span>
        </button>
      </div>

      <div className="login-footer">
        New to Qlink?
        <span className="signup-link" onClick={() => navigate('/signup')}>
          {' '}
          Create Account
        </span>
      </div>
    </div>
  );
};

export default GuardianSignup;
