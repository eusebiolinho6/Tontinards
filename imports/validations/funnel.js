import Validator from 'validator';

import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    if (Validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = 'This field is required';
    }
    if (Validator.isEmpty(data.projectName)) {
        errors.projectName = 'This field is required';
    }
    if (!data.category) {
        errors.category = 'This field is required';
    }
    if (Validator.isEmpty(data.description)) {
        errors.description = 'This field is required';
    }
   
    if (!data.documentFile) {
        errors.documentFile = 'This field is required';
    }

    if (!data.projectImage) {
        errors.projectImage = 'This field is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
}