import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    let lang = localStorage.getItem('lang');

    if (Validator.isEmpty(data.email)) {
        lang == 'fr'?
         errors.email = 'Ce champ est requis'
        :
         errors.email = 'This field is required';
    }

    if (Validator.isEmpty(data.password)) {
          lang == 'fr'?
            errors.password = 'Ce champ est requis'
        :
           errors.password = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}