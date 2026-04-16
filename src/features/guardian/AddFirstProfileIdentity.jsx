import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Bell,
  BatteryMedium,
  Globe,
  Plus,
  Signal,
  X,
} from 'lucide-react';
import BottomNav from '../../components/BottomNav';
import bgImage from '../../assets/images/bg.png';
import userPhoto from '../../assets/images/mypic.png';
import rotatingIconVideo from '../../assets/logos/vid-icon.mp4';
import './AddFirstProfileIdentity.css';

const AddFirstProfileIdentity = () => {
  const navigate = useNavigate();
  const [extraContacts, setExtraContacts] = useState(['']);
  const [formValues, setFormValues] = useState({
    fullName: '',
    relationship: '',
    birthYear: '',
    emergencyContact: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleExtraContactChange = (index, value) => {
    setExtraContacts((previous) =>
      previous.map((contact, contactIndex) => (contactIndex === index ? value : contact))
    );
  };

  const handleAddContact = () => {
    setExtraContacts((previous) => [...previous, '']);
  };

  const handleRemoveContact = (index) => {
    setExtraContacts((previous) => previous.filter((_, contactIndex) => contactIndex !== index));
  };

  const handleTabChange = (tab) => {
    if (tab === 'home') {
      navigate('/guardian-dashboard');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="guardian-identity-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <header className="guardian-identity-header">
        <div className="guardian-identity-status-bar">
          <span className="guardian-identity-time">9:41</span>
          <div className="guardian-identity-status-icons">
            <Signal size={15} />
            <BatteryMedium size={15} />
          </div>
        </div>

        <div className="guardian-identity-top-row">
          <div className="guardian-identity-brand">
            <video className="guardian-identity-brand-video" autoPlay loop muted playsInline>
              <source src={rotatingIconVideo} type="video/mp4" />
            </video>
            <img className="guardian-identity-avatar" src={userPhoto} alt="Guardian profile" />
          </div>

          <div className="guardian-identity-actions">
            <button type="button" className="guardian-identity-icon-btn" aria-label="Language">
              <Globe size={20} />
            </button>
            <button type="button" className="guardian-identity-icon-btn guardian-identity-bell" aria-label="Notifications">
              <Bell size={20} />
              <span className="guardian-identity-dot"></span>
            </button>
          </div>
        </div>

        <button type="button" className="guardian-identity-cancel" onClick={() => navigate('/guardian-dashboard')}>
          <ArrowLeft size={18} />
          <span>Cancel</span>
        </button>

        <h1 className="guardian-identity-title">Generate Patient Profile</h1>

        <div className="guardian-identity-progress">
          <span className="guardian-identity-progress-bar is-active"></span>
          <span className="guardian-identity-progress-bar"></span>
          <span className="guardian-identity-progress-bar"></span>
        </div>

        <p className="guardian-identity-step-label">Step 1 of 3: Identity</p>
      </header>

      <main className="guardian-identity-content">
        <form className="guardian-identity-form" onSubmit={handleSubmit}>
          <div className="guardian-identity-field">
            <label className="guardian-identity-label" htmlFor="fullName">
              Patient&apos;s Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              className="guardian-identity-input"
              type="text"
              placeholder="e.g. Mohamed Saber"
              value={formValues.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="guardian-identity-field">
            <label className="guardian-identity-label" htmlFor="relationship">
              Relationship to You
            </label>
            <input
              id="relationship"
              name="relationship"
              className="guardian-identity-input"
              type="text"
              placeholder="e.g. Grandfather"
              value={formValues.relationship}
              onChange={handleChange}
            />
          </div>

          <div className="guardian-identity-field">
            <label className="guardian-identity-label" htmlFor="birthYear">
              Birth Year
            </label>
            <input
              id="birthYear"
              name="birthYear"
              className="guardian-identity-input"
              type="text"
              inputMode="numeric"
              placeholder="e.g. 1945"
              value={formValues.birthYear}
              onChange={handleChange}
            />
          </div>

          <div className="guardian-identity-field">
            <label className="guardian-identity-label guardian-identity-label-wrap" htmlFor="emergencyContact">
              <span>EMERGENCY CONTACT *</span>
              <span className="guardian-identity-label-note">(Primary Guardian Phone)</span>
            </label>
            <input
              id="emergencyContact"
              name="emergencyContact"
              className="guardian-identity-input"
              type="tel"
              inputMode="tel"
              placeholder="e.g. 01119988299"
              value={formValues.emergencyContact}
              onChange={handleChange}
            />
          </div>

          {extraContacts.map((contact, index) => (
            <div className="guardian-identity-field" key={`extra-contact-${index}`}>
              <label className="guardian-identity-label" htmlFor={`extraContact-${index}`}>
                Additional Contact {index + 1}
              </label>
              <div className="guardian-identity-extra-row">
                <input
                  id={`extraContact-${index}`}
                  className="guardian-identity-input guardian-identity-extra-input"
                  type="tel"
                  inputMode="tel"
                  placeholder="e.g. 01779998265"
                  value={contact}
                  onChange={(event) => handleExtraContactChange(index, event.target.value)}
                />
                <button
                  type="button"
                  className="guardian-identity-remove-btn"
                  onClick={() => handleRemoveContact(index)}
                  aria-label={`Remove additional contact ${index + 1}`}
                  disabled={extraContacts.length === 1}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          ))}

          <button type="button" className="guardian-identity-add-contact" onClick={handleAddContact}>
            <span className="guardian-identity-add-icon">
              <Plus size={16} />
            </span>
            <span>Add More Contact Number</span>
          </button>

          <button type="submit" className="guardian-identity-submit">
            <span>Continue to Medical Info</span>
            <ArrowLeft size={20} className="guardian-identity-submit-arrow" />
          </button>
        </form>
      </main>

      <BottomNav activeTab="add" onTabChange={handleTabChange} />
    </div>
  );
};

export default AddFirstProfileIdentity;
