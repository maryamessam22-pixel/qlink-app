import { createContext } from 'react';

const AppLanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
});

export default AppLanguageContext;
