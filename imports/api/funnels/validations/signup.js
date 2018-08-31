import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.identifier = 'This field is required';
    }
     if (Validator.isEmpty(data.name)) {
         errors.identifier = 'This field is required';
     }
      if (Validator.isEmpty(data.email)) {
          errors.identifier = 'This field is required';
      }
       if (Validator.isEmpty(data.confirmPassword)) {
           errors.identifier = 'This field is required';
       }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
     if (Validator.isEmail(data.email)) {
         errors.identifier = 'Not a valid email';
     }
     if (!Validator.equals(data.password, data.passwordConfirmation)) {
         errors.passwordConfirmation = 'Passwords must match';
     }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}