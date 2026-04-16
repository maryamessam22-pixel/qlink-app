import { createContext } from 'react';

const AppLanguageContext = createContext({
  language: 'ar',
  toggleLanguage: () => {},
});

export default AppLanguageContext;
