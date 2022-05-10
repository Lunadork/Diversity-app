// error messages for register form

export default function ValidateRegister (values) {

  let errors = {}

  if(!values.username.trim()){
    errors.username = "Username field required "
  }

  if(!values.email.trim){
    errors.email= "Email required "
    // regex is to make sure we use a validate email format
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email = "Email address is invalid"
  }


  if(!values.password){
    errors.password = "Password is required "
  }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/i.test(values.password)){
    errors.password = 'Must be 8 to 24 characters and include uppercase and lowercase letters, a number and a special character(e.g.!,@,#,$,%)'
    
  }

  if(!values.password2){
    errors.password2 = "Password is required "
  }else if (values.password2 !== values.password ){
    errors.password2 = 'Passwords do not match '
  }


return errors;
}
