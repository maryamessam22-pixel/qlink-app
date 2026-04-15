import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GuardianLogin.css';

const GuardianLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for Supabase auth will go here later
    console.log('Logging in with:', formData);
    navigate('/guardian/dashboard');
  };

  return (
    <div className="auth-login-wrap">
      <button className="auth-back-btn" onClick={() => navigate('/')} aria-label="Go back">
        ←
      </button>
      
      <div className="auth-form-container">
        <h2 className="auth-title">Guardian Login</h2>
        <p className="auth-subtitle">Welcome back! Please enter your details.</p>
        
        <form className="auth-login-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <input 
              className="auth-input"
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="auth-input-group">
            <input 
              className="auth-input"
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>
          
          <button type="submit" className="auth-login-submit">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <span className="auth-link">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default GuardianLogin;
