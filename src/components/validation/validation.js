export const validate = values => {
  const errors = {};
  const nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Fist Name Validation
  if(!values.firstname){
      errors.firstname = '*First name is required'
  }else if(nameReg.test(values.firstname) === false){
      errors.firstname = '*Invalid first name'
  }
  //Surname Validation
   if(!values.surname){
        errors.surname = '*Surname is required'
    }else if(nameReg.test(values.surname) === false){
        errors.surname = '*Invalid surname'
    }
    // Email validation
    if(!values.email){
        errors.email = '*Email is required'
    }else if(emailReg.test(values.email) === false){
        errors.email = '*Invalid email'
    }
    // Password Validation
    if(!values.password){
        errors.password = '*Password is required'
    }
    if(!values.repeatPassword){
        errors.repeatPassword = '*Password is required'
    }
    if(values.password !== values.repeatPassword){
        errors.repeatPassword = '*Passwords are not equal'
    }

  return errors;
};