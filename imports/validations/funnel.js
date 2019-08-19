import Validator from 'validator';

import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    let lang = localStorage.getItem('lang');

    if (Validator.isEmpty(data.phoneNumber)) {
        lang == 'fr'?
         errors.phoneNumber = 'Ce champ est requis'
        :
         errors.phoneNumber = 'This field is required';
    }
    if (Validator.isEmpty(data.projectName)) {
        lang == 'fr'?
         errors.projectName = 'Ce champ est requis'
        :
         errors.projectName = 'This field is required';
    }
    if (!data.category) {
        lang == 'fr'?
         errors.category = 'Ce champ est requis'
        :
         errors.category = 'This field is required';
    }
    if (Validator.isEmpty(data.description)) {
        lang == 'fr'?
         errors.description = 'Ce champ est requis'
        :
         errors.description = 'This field is required';
    }
   
    if (!data.documentFile) {
        lang == 'fr'?
         errors.documentFile = 'Ce champ est requis'
        :
         errors.documentFile = 'This field is required';
    }

    if (!data.projectImage) {
        lang == 'fr'?
         errors.projectImage = 'Ce champ est requis'
        :
         errors.projectImage = 'This field is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
}