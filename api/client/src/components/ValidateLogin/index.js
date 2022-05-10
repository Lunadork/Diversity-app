export default function ValidateLogin (values) {

    let errors = {}
  
    
  
    if(!values.email.trim){
      errors.email= "Email Required "
      // regex is to make sure we use a validate email format
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
      errors.email = "Email address is invalid"
    }
  
  
    if(!values.password()){
      errors.password = "Password is required "
    }else if (values.password.length < 6){
      errors.password = 'Wrong username or password'
    }
  
    if(!values.password2()){
      errors.password2 = "Password is required "
    }else if (values.password2 !== values.password ){
      errors.password2 = 'Passwords do not match '
    }
  
  
  return errors
  }
