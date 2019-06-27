import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.name)) {
        errors.name = 'This field is required';
    }
    if(data.name.indexOf('-')!=-1){
        errors.name = 'This field should not contain "-"';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
}