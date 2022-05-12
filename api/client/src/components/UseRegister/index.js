import {useState, useEffect} from 'react'
import axios from 'axios';

const URL="https://fpmhapp.herokuapp.com/users/"

//we import validatingErrors from Register and pass it as a parameter to UseRegister

 export const UseRegister = (callback, validatingErrors)  => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({})
  const [formSubmitting, setFormSubmitting] = useState (false)



  //  allows us to submit Register form if there are no errors
useEffect(() => {
  if(Object.keys(errors).length === 0 && formSubmitting ){
     callback()
  }
}, [errors, formSubmitting, callback ])

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
    console.log(`this is for ${userInfo}`)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validatingErrors(userInfo))
    setFormSubmitting(true);
   try {
            const userData = {
                username: userInfo.name,
                email: userInfo.email,
                password: userInfo.password,
                password2: userInfo.password2
            }
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }
            const response = await axios(URL, options)
            const data = await response.json()
            if (data.err){ throw Error(data.err) }
           console.log(`This is my${data} for registration`)
           return data;
        } catch (err) {

          if (err.response){

          //do something r
          console.log('response was bad , so response  did not work')


          }else if(err.request){

          //do something else
          console.log('request was bad , so request did not work')

          }else if(err.message){

          //do something other than the other two
          console.log('This error will be fixed soon with my team')

          }
            console.warn( err);
            setUserInfo({
                username: "",
                email: "",
                password: "",
                passwordConfirmation: ""
            })
        }

  }


  // we pass this function to the register folder in components
  return {handleChange, userInfo, handleSubmit, errors}

}
