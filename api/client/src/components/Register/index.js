import  { UseRegister } from '../UseRegister'
import validatingErrors from '../ValidateRegisterForm'
import './style.css'




// all error messages for validations are triggered from ValidateRegisterForm
//UseRegister coming from use UseRegister component
// submitForm is coming from sigup folder in pages folder

 export const Register= ({submitForm}) => {

  const {handleChange, userInfo, handleSubmit, errors} = UseRegister(submitForm, validatingErrors )

  return (
  <div className="bg-img">

    <div className="form-container">
      <div className="form-content ">
        <form  className="form" onSubmit={handleSubmit}>
          <h1>Register with mental health solutions</h1>

          <div className="form-inputs">
            <label htmlFor="username" className="form-label">User name</label>
            <input id="username" type="text" name="username" className="form-input" placeholder="enter  username" value={userInfo.username} onChange={handleChange}/>
            {errors.username && <p>{errors.username}</p>}
            {/* <p>{errors.username}</p> if it's true returns whatever we passed in ValidateRegisterForm   */}
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">email</label>
            <input id="email" type="email" name="email" autoComplete="off" className="form-input" placeholder="enter email"  value={userInfo.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">Password</label>
            <input id="password" type="password" name="password" className="form-input" placeholder="enter password"  value={userInfo.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">Confirm password</label>
            <input id="password2" type="password" name="password2" className="form-input" placeholder="confirm password"  value={userInfo.password2} onChange={handleChange}/>
            {errors.password2&& <p>{errors.password2}</p>}
          </div>

          <button className="form-input-btn " type='submit'>Register</button>
          <span className="form-input-login">Already have an account? Login <a href="/login">here</a></span>
        </form>
      </div>
    </div>
  </div>
  )
}



// ==========SECOND REGISTRATION CODE ===========================================

// import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './style.css'
// import axios from '../../api';


// // backend endpoint for registration or whatever path is provided
// const REGISTER_URL = "https://fpmhapp.herokuapp.com/users/";



// //user regex validates username
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// //email regex validates email
// const EMAIL_REGEX =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// //password regex validates password
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;




// export const   Register= () => {
//   // const userRef = userRef()
//   // const eerRef = errRef();

//   const [user, setUser] = useState('');
//   //makes sure name validates or not
//   const [validName, setValidName] = useState('false');
//   // this is weather we have focus on theinput or not
//   const [userFocus, setUserFocus] = useState('false');

//   const [email, setEmail] = useState('');
//   const [validEmail, setValidEmail] = useState('false');
//   const [emailFocus, setEmailFocus] = useState('false');

//   const [password, setPassword] = useState('');
//   const [validPassword, setValidPassword] = useState('false');
//   const [passwordFocus, setPasswordFocus] = useState('false');

//   const [password2, setPassword2] = useState('');
//   const [validPassword2, setValidPassword2] = useState('false');
//   const [password2Focus, setPassword2Focus] = useState('false');

//   const [errMsg, setErrMsg] = useState('');
//   const [success, setSuccess] = useState(false);

//   // set focus when component loads
//     // useEffect(() => {
//     //     userRef.current.focus();
//     // }, [])

//      useEffect(() => {
//        const result = USER_REGEX.test(user)
//        console.log(result)
//        console.log(user)
//         setValidName(result);
//     }, [user])

//      useEffect(() => {
//         const result = EMAIL_REGEX.test(email)
//         console.log(result)
//         console.log(email)
//         setValidEmail(result);
//     }, [email])

//     useEffect(() => {
//       const result = PWD_REGEX.test(password)
//         console.log(result)
//         console.log(password)
//       const match =  password === password2
//       setValidPassword2( match);
//     }, [password, password2])


//     useEffect(() => {
//         setErrMsg('');
//     }, [user, email, password, password2])

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       // this will stop anyone from enabling our button through the Dom because we do not want o save invalid info to our database
//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(password);
//         if (!v1 || !v2) {
//             setErrMsg("Invalid Entry");
//             return;
//     }
//     try {
//       /*properties must match with backend */
//       const response =  await axios.post(REGISTER_URL,
//         JSON.stringify({user, email, password})),
//         {
//           headers: {'Content-Type': 'application/json'},
//           withCreddentials: true
//         }
//         console.log(response.data)
//         setSuccess(true);
//     } catch (error) {
//       setErrMsg('Registration Failed')
//     }


//   }


//   return (
//     <div>


//       {/* message for screen readers */}
//       {/* <p ref={errRef} class={errMsg? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p> */}

//     <div className="bg-img">

//      <div className="form-container">
//        <div className="form-content ">
//          <form  className="form"  onSubmit={handleSubmit}>
//            <h1>Register with mental health solutions</h1>

//            <div className="form-inputs">
//                 <label htmlFor="username" className="form-label">User name
//                 {/*if fields are empty icons to validate input will not appear */}
//                   <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
//                   <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />

//                 </label>
//               <input
//                   id="username"
//                   type="text"
//                   // ref={userRef}
//                   autoComplete="off"
//                   required
//                   name="username"
//                   className="form-input"
//                   placeholder="enter  username"
//                   onChange={(e) => setUser(e.target.value)}
//                   value={user}
//                   aria-invalid={validName ? "false" : "true"} //helps screen readers
//                   aria-describedby="uidnote" //helps screen readers
//                   onFocus={() => setUserFocus(true)}
//                   onBlur={() => setUserFocus(false)}
//               />
//               <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                   <FontAwesomeIcon icon={faInfoCircle} />
//                   4 to 24 characters.<br />
//                   Must begin with a letter.<br />
//                   Letters, numbers, underscores, hyphens allowed.
//               </p>
//            </div>

//            <div className="form-inputs">
//             <label htmlFor="email" className="form-label">email</label>
//               <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   autoComplete="off"
//                   className="form-input"
//                   placeholder="enter email"
//                   // ref={userRef}
//                   required
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                   aria-invalid={validEmail? "false" : "true"} //helps screen readers
//                   aria-describedby="uidnote" //helps screen readers
//                   onFocus={() => setUserFocus(true)}
//                   onBlur={() => setUserFocus(false)}
//              />
//            </div>

//            <div className="form-inputs">
//                 <label htmlFor="password" className="form-label">Password
//                     <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
//                     <FontAwesomeIcon icon={faTimes} className={validPassword || !validPassword ? "hide" : "invalid"} />
//                 </label>
//                 <input
//                     id="password"
//                     type="password"
//                     name="password"
//                     className="form-input"
//                     placeholder="enter password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     aria-invalid={validPassword? "false" : "true"} //helps screen readers
//                     aria-describedby="pwdnote" //helps screen readers
//                     onFocus={() => setPasswordFocus(true)}
//                     onBlur={() => setPasswordFocus(false)}
//               />
//               {/* directions for screen readers to listen to input field requirments  */}
//                   <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     8 to 24 characters.<br />
//                     Must include uppercase and lowercase letters, a number and a special character.<br />
//                     Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                   </p>
//            </div>


//            <div className="form-inputs">
//                 <label htmlFor="password2" className="form-label">Confirm password
//                     <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
//                     <FontAwesomeIcon icon={faTimes} className={validPassword || !validPassword ? "hide" : "invalid"} />
//                 </label>
//                 <input
//                     id="password2"
//                     type="password"
//                     name="password2"
//                     className="form-input"
//                     placeholder="confirm password"
//                     value={password2}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     aria-invalid={validPassword2? "false" : "true"} //helps screen readers
//                     aria-describedby="confirmnote" //helps screen readers
//                     onFocus={() => setPassword2Focus(true)}
//                     onBlur={() => setPassword2Focus(false)}
//               />
//                   <p id="confirmnote" className={password && !password2 ? "instructions" : "offscreen"}>
//                     <FontAwesomeIcon icon={faInfoCircle} />
//                     Must match the first password input field.
//                   </p>
//            </div>

//                   {/* button stays disabled until requirments are meet */}
//            <button className="form-input-btn " type='submit'  disabled={!validName || !validPassword || !validPassword2 ? true : false}>Register</button>
//            <span className="form-input-login">Already have an account? Login <a href="/login">here</a></span>
//          </form>
//        </div>
//      </div>
//    </div>
// </div>
//   )
// }
