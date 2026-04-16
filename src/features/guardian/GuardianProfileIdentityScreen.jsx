import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, PlusSquare } from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import MobileTopHeader from '../../components/MobileTopHeader';
import { setGuardianOnboardingState } from './guardianOnboardingState';
import './GuardianProfileIdentityScreen.css';

const GuardianProfileIdentityScreen = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [primaryPhone, setPrimaryPhone] = useState('');
  const [extraPhone, setExtraPhone] = useState('');

  const handleTabChange = (tabId) => {
    if (tabId === 'home') navigate('/guardian-dashboard');
    if (tabId === 'map') navigate('/guardian/map');
    if (tabId === 'add') navigate('/guardian/profile/identity');
    if (tabId === 'vault') navigate('/wearer');
    if (tabId === 'settings') navigate('/login');
  };

  const handleContinue = () => {
    setGuardianOnboardingState({
      hasProfile: true,
      fullName,
      relationship,
      birthYear,
      primaryPhone,
      extraPhone,
    });
    navigate('/guardian/profile/medical');
  };

  return (
    <div className="guardian-profile-screen">
      <MobileTopHeader
        showBack
        backLabel="Cancel"
        onBack={() => navigate('/guardian-dashboard')}
        title="Generate Patient Profile"
      />

      <div className="guardian-profile-progress-line">
        <span className="guardian-profile-progress-line-active"></span>
      </div>
      <p className="guardian-profile-step-label">Step 1 of 3: Identity</p>

      <section className="guardian-profile-form">
        <label>Patient's Full Name</label>
        <input value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="e.g. Mohamed Saber" />
        <label>Relationship to You</label>
        <input value={relationship} onChange={(event) => setRelationship(event.target.value)} placeholder="e.g. Grandfather" />
        <label>Birth Year</label>
        <input value={birthYear} onChange={(event) => setBirthYear(event.target.value)} placeholder="e.g. 1945" />
        <label>EMERGENCY CONTACT * (Primary Guardian Phone)</label>
        <input value={primaryPhone} onChange={(event) => setPrimaryPhone(event.target.value)} placeholder="e.g. 01119988299" />
        <label>Additional Contact 1</label>
        <div className="guardian-profile-inline-input">
          <input value={extraPhone} onChange={(event) => setExtraPhone(event.target.value)} placeholder="e.g. 01779998265" />
          <button type="button"><X size={16} /></button>
        </div>
        <button type="button" className="guardian-profile-add-contact"><PlusSquare size={16} /> Add More Contact Number</button>
      </section>

      <button type="button" className="guardian-profile-primary-button" onClick={handleContinue}>
        Continue to Medical Info <ArrowRight size={18} />
      </button>
      <BottomNav activeTab="add" onTabChange={handleTabChange} />
    </div>
  );
};

export default GuardianProfileIdentityScreen;
