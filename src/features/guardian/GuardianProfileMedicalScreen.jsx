import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import MobileTopHeader from '../../components/MobileTopHeader';
import './GuardianProfileMedicalScreen.css';

const GuardianProfileMedicalScreen = () => {
  const navigate = useNavigate();
  const [bloodType, setBloodType] = useState('AB-');
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleTabChange = (tabId) => {
    if (tabId === 'home') navigate('/guardian-dashboard');
    if (tabId === 'map') navigate('/guardian/map');
    if (tabId === 'add') navigate('/guardian/profile/identity');
    if (tabId === 'vault') navigate('/wearer');
    if (tabId === 'settings') navigate('/login');
  };

  return (
    <div className="guardian-medical-screen">
      <MobileTopHeader
        showBack
        backLabel="Back"
        onBack={() => navigate('/guardian/profile/identity')}
        title="Generate Patient Profile"
      />
      <div className="guardian-medical-progress-line">
        <span></span>
      </div>
      <p className="guardian-medical-step-label">Step 2 of 3: Medical</p>

      <section className="guardian-medical-form">
        <label>Safety Notes</label>
        <textarea placeholder="e.g. Additional safety information"></textarea>
        <label>Allergies</label>
        <textarea placeholder="e.g. Penicillin, Peanuts, Shellfish"></textarea>
        <label>Blood Type</label>
        <div className="guardian-medical-blood-grid">
          {bloodTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={bloodType === type ? 'guardian-medical-blood-active' : ''}
              onClick={() => setBloodType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <label>Medical Notes</label>
        <textarea placeholder="e.g. Diabetic"></textarea>
      </section>

      <button type="button" className="guardian-medical-primary-button" onClick={() => navigate('/guardian/profile/connect')}>
        Continue <ArrowRight size={18} />
      </button>
      <BottomNav activeTab="add" onTabChange={handleTabChange} />
    </div>
  );
};

export default GuardianProfileMedicalScreen;
