import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
console.log('yeah');
    if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
     if (Validator.isEmpty(data.name)) {
         errors.name = 'This field is required';
     }
      if (Validator.isEmpty(data.email)) {
          errors.email = 'This field is required';
      }
       if (Validator.isEmpty(data.confirmPassword)) {
           errors.confirmPassword = 'This field is required';
       }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
     if (!Validator.isEmail(data.email)) {
         errors.email = 'Not a valid email';
     }
     if (!Validator.equals(data.password, data.confirmPassword)) {
         errors.confirmPassword = 'Passwords must match';
     }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}