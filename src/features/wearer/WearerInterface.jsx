import React from 'react';
import { useNavigate } from 'react-router-dom';

const WearerInterface = () => {
  const navigate = useNavigate();

  return (
    <div className="wearer-dashboard-wrap" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={() => navigate('/')} style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--color-slate)', padding: '10px 15px', borderRadius: '8px' }}>Home</button>
      
      <h2 style={{ color: 'var(--color-red-dark)' }}>Emergency QR</h2>
      <p style={{ textAlign: 'center', color: 'var(--color-slate)' }}>Scan to view vital medical information and emergency contacts.</p>
      
      <div style={{ width: '250px', height: '250px', background: 'var(--color-gray)', marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px' }}>
        <span>[QR Code Placeholder]</span>
      </div>

      <button className="wearer-alert-btn" style={{ background: 'var(--color-red-light)', padding: '15px 30px', borderRadius: '30px', marginTop: '40px', fontSize: '18px', fontWeight: 'bold' }}>
        EMERGENCY SOS
      </button>
    </div>
  );
};

export default WearerInterface;
