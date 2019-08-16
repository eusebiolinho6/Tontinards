import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {

      fr: {
        translation: {
          "loging1": "Se connecter à Tontinards",
          "loging2": "Se connecter",
          "loging3": "Vous n'avez pas de compte? Créer un compte",
          "loging4": "ici.",
          "loging5": "Se connecter",
          "loging6": "Se rappeller de moi.",
          "loging7": "Se connerter avec Google",
          "loging8": "Se connerter avec Facebook",
          "loging9": "Se connerter avec Twitter",
        }
      },
      
      en: {
        translation: {
          "loging1":"Log In to Tontinards",
          "loging2": "Log in",
          "loging3": "Don't have an account? Register",
          "loging4": "here.",
          "loging5": "Log in",
          "loging6": "Remember me.",
          "loging7": "Login with Google",
          "loging8": "Login with Facebook",
          "loging9": "Login with Twitter",
        }
      }
    
    },
    lng: localStorage.getItem('lang'),
    fallbackLng: localStorage.getItem('lang'),

    interpolation: {
      escapeValue: false
    }
  });


  export default i18n;