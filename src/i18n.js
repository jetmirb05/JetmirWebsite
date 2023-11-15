import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'

i18n
  // detecting user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  //getting the backend
  .use(Backend)
  
  .init({
    debug: false,
    fallbackLng: 'en',
  });

export default i18n;