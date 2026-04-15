import React from 'react';
import { useNavigate } from 'react-router-dom';

const GuardianLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-login-wrap" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--gradient-auth-bg)', color: 'var(--color-white)', padding: '20px' }}>
      <button onClick={() => navigate('/')} style={{ background: 'transparent', width: 'fit-content', padding: '10px 0', textAlign: 'left' }}>← Back</button>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>Guardian Guardian</h2>
        <p>Login to your account to monitor your wearer.</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }} onSubmit={(e) => { e.preventDefault(); navigate('/guardian/dashboard'); }}>
          <input type="email" placeholder="Email Address" style={{ padding: '12px', borderRadius: '8px', border: 'none' }} required />
          <input type="password" placeholder="Password" style={{ padding: '12px', borderRadius: '8px', border: 'none' }} required />
          
          <button type="submit" className="auth-login-submit" style={{ padding: '15px', borderRadius: '8px', marginTop: '10px' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default GuardianLogin;
