import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    let lang = localStorage.getItem('lang');
   /** if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }*/
     if (Validator.isEmpty(data.name)) {
        lang == 'fr'?
            errors.name = 'Ce champ est requis'
          :
            errors.name = 'This field is required';
     }
      if (Validator.isEmpty(data.email)) {
        lang == 'fr'?
            errors.email = 'Ce champ est requis'
          :
            errors.email = 'This field is required';
      }

      if (Validator.isEmpty(data.username)) {
        lang == 'fr'?
            errors.username = 'Ce champ est requis'
          :
            errors.username = 'This field is required';
        }
       if (Validator.isEmpty(data.confirmPassword)) {
         lang == 'fr'?
            errors.confirmPassword = 'Ce champ est requis'
            :
            errors.confirmPassword = 'This field is required';
        }
    if (Validator.isEmpty(data.password)) {
        lang == 'fr'?
            errors.password = 'Ce champ est requis'
            :
            errors.password = 'This field is required';
    }
     if (!Validator.isEmail(data.email)) {
         lang == 'fr'?
            errors.email = 'Email non valide'
          :
            errors.email = 'Not a valid email';
     }
     if (!Validator.equals(data.password, data.confirmPassword)) {
         lang == 'fr'?
            errors.confirmPassword = 'Ce Mot de passe ne correspond pas'
          :
            errors.confirmPassword = 'Passwords must match';
     }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}