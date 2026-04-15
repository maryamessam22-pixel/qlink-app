import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, Globe, Apple, ArrowLeft } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('guardian'); // Default
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });

  useEffect(() => {
    if (location.state && location.state.role) {
      setRole(location.state.role);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Navigate based on role for demo purposes
    if (role === 'guardian') {
      navigate('/guardian/dashboard');
    } else {
      navigate('/wearer');
    }
  };

  return (
    <div className="qlink-create-account-screen">
      <button className="back-navigation-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      <header className="auth-identity-stack">
        <QlinkLogo variant="light" size="large" />
        <h2 className="auth-title-large">Create Account</h2>
        <p className="auth-subtitle-soft">Starts your safety journey</p>
      </header>

      <form className="auth-form-nucleus" onSubmit={handleSignupSubmit}>
        <div className="auth-entry-field">
          <User className="field-icon-lead" size={20} />
          <input 
            className="auth-premium-input"
            type="text" 
            name="fullName"
            placeholder="Full Name" 
            value={formData.fullName}
            onChange={handleInputChange}
            required 
          />
        </div>

        <div className="auth-entry-field">
          <Mail className="field-icon-lead" size={20} />
          <input 
            className="auth-premium-input"
            type="email" 
            name="email"
            placeholder="Email Address" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="auth-entry-field">
          <Lock className="field-icon-lead" size={20} />
          <input 
            className="auth-premium-input"
            type={showPassword ? "text" : "password"} 
            name="password"
            placeholder="Password" 
            value={formData.password}
            onChange={handleInputChange}
            required 
          />
          <button 
            type="button"
            className="eye-visibility-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Role Toggle Switch */}
        <div className="role-segmented-controller">
          <button 
            type="button"
            className={`segment-btn ${role === 'guardian' ? 'active' : ''}`}
            onClick={() => setRole('guardian')}
          >
            Guardian
          </button>
          <button 
            type="button"
            className={`segment-btn ${role === 'wearer' ? 'active' : ''}`}
            onClick={() => setRole('wearer')}
          >
            Wearer
          </button>
        </div>
        
        <button type="submit" className="auth-submit-action-btn">
          {role === 'guardian' ? 'Create a Guardian Hub' : 'Create Wearer Profile'}
        </button>
      </form>

      <div className="auth-divider-stack">
        <div className="auth-divider-line"></div>
        <span className="auth-divider-text">OR</span>
        <div className="auth-divider-line"></div>
      </div>

      <div className="auth-social-nexus">
        <button className="social-action-btn"><Globe size={20} /></button>
        <button className="social-action-btn"><Globe size={20} /></button>
        <button className="social-action-btn"><Apple size={20} /></button>
      </div>

      <footer className="auth-footer-gate">
        Already have an account? 
        <span className="auth-footer-trigger" onClick={() => navigate('/login')}>
          <strong> Sign In</strong>
        </span>
      </footer>
    </div>
  );
};

export default CreateAccount;
