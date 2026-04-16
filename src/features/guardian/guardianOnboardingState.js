const STORAGE_KEY = 'qlink_guardian_onboarding_state';

const defaultState = {
  hasProfile: false,
  hasDevice: false,
  fullName: 'Mohamed Saber',
  relationship: 'Grandfather',
  birthYear: '1945',
  braceletCode: '',
};

export const getGuardianOnboardingState = () => {
  try {
    const rawState = localStorage.getItem(STORAGE_KEY);
    if (!rawState) return defaultState;
    return { ...defaultState, ...JSON.parse(rawState) };
  } catch (error) {
    return defaultState;
  }
};

export const setGuardianOnboardingState = (partialState) => {
  const nextState = { ...getGuardianOnboardingState(), ...partialState };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  return nextState;
};
