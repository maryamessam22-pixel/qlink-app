import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CircleAlert, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import appleIcon from '../../assets/icons/apple.png';
import facebookIcon from '../../assets/icons/fb.png';
import googleIcon from '../../assets/icons/google.png';
import './GuardianLogin.css';

const GuardianLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/guardian-dashboard');
  };

  return (
    <div className="guardian-login-page">
      <button type="button" className="guardian-login-back" onClick={() => navigate('/')}>
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      <header className="guardian-login-hero">
        <QlinkLogo variant="light" size="large" />
        <h1 className="guardian-login-heading">Guardian Hub</h1>
        <p className="guardian-login-text">Secure Access Required</p>
      </header>

      <form className="guardian-login-form" onSubmit={handleSubmit}>
        <div className="guardian-login-input-wrap">
          <Mail size={18} className="guardian-login-input-icon" />
          <input
            className="guardian-login-input guardian-login-input-with-icon"
            type="email"
            name="email"
            placeholder="Maryamessam22@gmail.com"
            value={loginValues.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="guardian-login-input-wrap guardian-login-password-field">
          <Lock size={18} className="guardian-login-input-icon" />
          <input
            className="guardian-login-input guardian-login-input-with-icon guardian-login-password-input"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="••••••••"
            value={loginValues.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="guardian-login-eye"
            onClick={() => setShowPassword((previous) => !previous)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          type="button"
          className="guardian-login-forgot"
          onClick={() => window.alert('Forgot password flow can be added next.')}
        >
          Forgot Password?
        </button>

        <button type="submit" className="guardian-login-submit">
          Sign In
        </button>
      </form>

      <div className="guardian-login-divider">
        <span className="guardian-login-divider-line"></span>
        <span className="guardian-login-divider-word">OR</span>
        <span className="guardian-login-divider-line"></span>
      </div>

      <div className="guardian-login-socials">
        <button type="button" className="guardian-login-social guardian-login-social-facebook" aria-label="Continue with Facebook">
          <img className="guardian-login-social-icon" src={facebookIcon} alt="" />
        </button>
        <button type="button" className="guardian-login-social guardian-login-social-google" aria-label="Continue with Google">
          <img className="guardian-login-social-icon" src={googleIcon} alt="" />
        </button>
        <button type="button" className="guardian-login-social guardian-login-social-apple" aria-label="Continue with Apple">
          <img className="guardian-login-social-icon" src={appleIcon} alt="" />
        </button>
      </div>

      <div className="guardian-login-divider guardian-login-divider-emergency">
        <span className="guardian-login-divider-line"></span>
        <span className="guardian-login-divider-word">EMERGENCY</span>
        <span className="guardian-login-divider-line"></span>
      </div>

      <button type="button" className="guardian-login-emergency">
        <CircleAlert size={20} />
        <span>PUBLIC EMERGENCY SCAN</span>
      </button>

      <footer className="guardian-login-footer">
        New to Qlink?
        <button type="button" className="guardian-login-link" onClick={() => navigate('/signup')}>
          Create Account
        </button>
      </footer>
    </div>
  );
};

export default GuardianLogin;
