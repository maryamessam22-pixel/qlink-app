import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, FacebookIcon, Globe, Apple, ArrowLeft } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import './GuardianLogin.css'; // Reusing common auth styles

const GuardianSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Simulate registration
    navigate('/guardian/dashboard');
  };

  return (
    <div className="qlink-auth-gate-wrapper">
      <button className="auth-step-back" onClick={() => navigate(-1)} style={{ 
        position: 'absolute', top: '24px', left: '24px', background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' 
      }}>
        <ArrowLeft size={18} />
        <span style={{ fontSize: '14px', fontWeight: '500' }}>Back</span>
      </button>

      <header className="auth-header-identity" style={{ marginTop: '40px' }}>
        <QlinkLogo variant="light" size="large" />
        <h2 className="auth-hub-title">Create Account</h2>
        <p className="auth-hub-tagline">Starts your safety journey</p>
      </header>
      
      <form className="auth-form-nucleus" onSubmit={handleSignupSubmit}>
        <div className="auth-field-entry">
          <User className="auth-field-icon" size={20} />
          <input 
            className="auth-standard-input"
            type="text" 
            name="fullName"
            placeholder="Mariam Essam" 
            value={formData.fullName}
            onChange={handleInputChange}
            required 
          />
        </div>

        <div className="auth-field-entry">
          <Mail className="auth-field-icon" size={20} />
          <input 
            className="auth-standard-input"
            type="email" 
            name="email"
            placeholder="maryamessam22@gmail.com" 
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
        
        <button type="submit" className="auth-primary-action-btn" style={{ marginTop: '20px' }}>
          Create a guardian Hub
        </button>
      </form>

      <div className="auth-divider-stack">
        <div className="auth-divider-line"></div>
        <span className="auth-divider-text">OR</span>
        <div className="auth-divider-line"></div>
      </div>

      <div className="auth-social-nexus">
        <button className="auth-social-btn"><FacebookIcon size={20} /></button>
        <button className="auth-social-btn"><Globe size={20} /></button>
        <button className="auth-social-btn"><Apple size={20} /></button>
      </div>

      <footer className="auth-footer-nexus">
        Already have an account? 
        <span className="auth-footer-trigger" onClick={() => navigate('/login')}>
          Sign In
        </span>
      </footer>
    </div>
  );
};

export default GuardianSignup;
