import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('guardian'); // Default
  const [isCreatingHub, setIsCreatingHub] = useState(false);
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

    if (role !== 'guardian') {
      navigate('/wearer');
      return;
    }

    setIsCreatingHub(true);
    // Simulated network request (UX requirement)
    setTimeout(() => {
      navigate('/guardian-dashboard');
    }, 1500);
  };

  return (
    <div className="create-account-screen">
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      <header className="create-account-header">
        <QlinkLogo variant="light" size="large" />
        <h2 className="create-account-title">Create Account</h2>
        <p className="create-account-subtitle">Starts your safety journey</p>
      </header>

      <form className="create-account-form" onSubmit={handleSignupSubmit}>
        <div className="form-field">
          <User className="field-icon" size={20} />
          <input 
            className="text-input"
            type="text" 
            name="fullName"
            placeholder="Mariam Essam" 
            value={formData.fullName}
            onChange={handleInputChange}
            required 
          />
        </div>

        <div className="form-field">
          <Mail className="field-icon" size={20} />
          <input 
            className="text-input"
            type="email" 
            name="email"
            placeholder="maryamessam@gmail.com" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-field">
          <Lock className="field-icon" size={20} />
          <input 
            className="text-input"
            type={showPassword ? "text" : "password"} 
            name="password"
            placeholder="**********" 
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

        <div className="interface-select">
          <p className="interface-select-label">Choose interface</p>
          <div className="role-toggle">
          <button 
            type="button"
            className={`role-toggle-button ${role === 'guardian' ? 'active' : ''}`}
            onClick={() => setRole('guardian')}
          >
            Guardian
          </button>
          <button 
            type="button"
            className={`role-toggle-button ${role === 'wearer' ? 'active' : ''}`}
            onClick={() => setRole('wearer')}
          >
            Wearer
          </button>
          </div>
        </div>
        
        <button
          type="submit"
          className="create-account-submit"
          disabled={isCreatingHub}
        >
          {isCreatingHub ? (
            <>
              <span className="create-account-loading-spinner" />
              Creating Hub...
            </>
          ) : role === 'guardian' ? (
            'Create a Guardian Hub'
          ) : (
            'Create Wearer Profile'
          )}
        </button>
      </form>

      <div className="signup-divider">
        <div className="signup-divider-line"></div>
        <span className="signup-divider-text">OR</span>
        <div className="signup-divider-line"></div>
      </div>

      <div className="social-login-buttons">
        <button className="social-button social-facebook" type="button">f</button>
        <button className="social-button social-google" type="button">G</button>
        <button className="social-button social-apple" type="button"></button>
      </div>

      <footer className="signup-footer">
        Already have an account? 
        <span className="login-link" onClick={() => navigate('/login')}>
          <strong> Sign In</strong>
        </span>
      </footer>
    </div>
  );
};

export default CreateAccount;
