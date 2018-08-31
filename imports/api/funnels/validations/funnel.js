import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    if (Validator.isEmpty(data.price)) {
        errors.identifier = 'This field is required';
    }
    if (Validator.isEmpty(data.title)) {
        errors.identifier = 'This field is required';
    }
    if (Validator.isEmpty(data.industry)) {
        errors.identifier = 'This field is required';
    }
    if (Validator.isEmpty(data.description)) {
        errors.identifier = 'This field is required';
    }
    if (Validator.isFloat(data.price)) {
        errors.identifier = 'Not a valid price';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}