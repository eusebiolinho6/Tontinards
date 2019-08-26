import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    let lang = localStorage.getItem('lang');

    if (Validator.isEmpty(data.name)) {
       lang == 'fr'?
        errors.name = 'Ce champ est requis'
        :
        errors.name = 'This field is required';
    }
    if(data.name.indexOf('-')!=-1){
        lang == 'fr'?
            errors.name = 'Ce champ ne doit pas contenir  "-"'
          :
            errors.name = 'This field should not contain "-"';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
}