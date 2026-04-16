import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import QlinkLogo from '../../components/QlinkLogo';
import appleIcon from '../../assets/icons/apple.png';
import facebookIcon from '../../assets/icons/fb.png';
import googleIcon from '../../assets/icons/google.png';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('guardian');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (location.state?.role) {
      setSelectedRole(location.state.role);
    }
  }, [location.state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedRole !== 'guardian') {
      navigate('/wearer');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      navigate('/guardian-dashboard');
    }, 1500);
  };

  return (
    <div className="create-account-page">
      <button type="button" className="create-account-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      <header className="create-account-hero">
        <QlinkLogo variant="light" size="large" />
        <h1 className="create-account-heading">Create Account</h1>
        <p className="create-account-text">Starts your safety journey</p>
      </header>

      <form className="create-account-form" onSubmit={handleSubmit}>
        <input
          className="create-account-input"
          type="text"
          name="fullName"
          placeholder="Mariam Essam"
          value={formValues.fullName}
          onChange={handleChange}
          required
        />

        <input
          className="create-account-input"
          type="email"
          name="email"
          placeholder="maryamessam@gmail.com"
          value={formValues.email}
          onChange={handleChange}
          required
        />

        <div className="create-account-password-wrap">
          <input
            className="create-account-input create-account-password-input"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="**********"
            value={formValues.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="create-account-eye"
            onClick={() => setShowPassword((previous) => !previous)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="create-account-role-toggle">
          <button
            type="button"
            className={`create-account-role-button ${selectedRole === 'guardian' ? 'is-active' : ''}`}
            onClick={() => setSelectedRole('guardian')}
          >
            Guardian
          </button>
          <button
            type="button"
            className={`create-account-role-button ${selectedRole === 'wearer' ? 'is-active' : ''}`}
            onClick={() => setSelectedRole('wearer')}
          >
            Wearer
          </button>
        </div>

        <button type="submit" className="create-account-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Hub...' : 'Create a guardian Hub'}
        </button>
      </form>

      <div className="create-account-divider">
        <span className="create-account-divider-line"></span>
        <span className="create-account-divider-word">OR</span>
        <span className="create-account-divider-line"></span>
      </div>

      <div className="create-account-socials">
        <button type="button" className="create-account-social create-account-social-facebook" aria-label="Continue with Facebook">
          <img className="create-account-social-icon" src={facebookIcon} alt="" />
        </button>
        <button type="button" className="create-account-social create-account-social-google" aria-label="Continue with Google">
          <img className="create-account-social-icon" src={googleIcon} alt="" />
        </button>
        <button type="button" className="create-account-social create-account-social-apple" aria-label="Continue with Apple">
          <img className="create-account-social-icon" src={appleIcon} alt="" />
        </button>
      </div>

      <footer className="create-account-footer">
        Already have an account ?
        <button type="button" className="create-account-link" onClick={() => navigate('/login')}>
          Sign In
        </button>
      </footer>
    </div>
  );
};

export default CreateAccount;
