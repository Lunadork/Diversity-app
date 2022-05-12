import { useRef, useState, useEffect, useContext } from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import AuthContext from '../../context/AuthProvider'
import axios from '../../api/axios';
import { Button } from '../Button/index';
// import './style.css'/
// import React from 'react';
// import { Register } from '../Register';

// import { ValidateLogin } from '../ValidateLogin'





// const emailState =  () => {
// const [email, setEmail] = useState('');
// const [validEmail, setValidEmail] = useState(false);
// const [userFocus, setUserFocus] = useState(false);
// }



const LOGIN_URL = '/users'

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/i;

// export const validateLoginEmail = (str = " ") => str.includes(EMAIL_REGEX);



export const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();

    // const validateLoginEmail = () => !(!email || EMAIL_REGEX.test(email) === false)

    // EMAIL_REGEX.test(email) = true ? console.log("email is valid") || console.log("email is invalid")




    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setpassword] = useState('');
    const [validpassword, setValidpassword] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    // Set focus on first input when component loads, dependency array kept empty so only occurs when component loads
    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    // useEffect(()=> {
    //     const result = EMAIL_REGEX.test(email);
    //     console.log(result);
    //     console.log(email);
    //     setValidEmail(result);
    // }, [email])



    useEffect(() => {
        setValidpassword(PWD_REGEX.test(password))
    }, [password])

    // useEffect (()=>{
    //     const result = PWD_REGEX.test(pwd);
    //     console.log(result);
    //     console.log(pwd);
    //     setValidPwd(result);
    // }, [pwd])





    // Empty out any error message if user changes username or password
    useEffect(() => {
        setErrMsg('');
    }, [email, password])



    const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(email, password);
            setSuccess(true);
            setEmail('');
            setpassword('');


            try {
                const response = await axios.post(LOGIN_URL,
                    JSON.stringify({ email, password }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                let responseJson = await response.json();
                console.log(JSON.stringify(response?.data));
                console.log(JSON.stringify(response));

                //CHECKWITH BACKEND
                const accessToken = response?.data?.accessToken;
                const roles = response?.data?.roles;

                setAuth({ email, password, roles, accessToken });

            } catch (err) {
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 400) {
                    setErrMsg('Missing Username or Password');
                } else if (err.response?.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg('Login Failed');
                }
                errRef.current.focus();
            }
        }

    // Semantic element used for clarity
    // aria-live used to announce message when focus is set immediately

    return (

        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Button path = '/dashboard' value ='Dashboard'/>
                    </p>
                </section>
            ) : (

        <section>
            <div className="bg-img">

            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>


            <form className = "form" onSubmit ={handleSubmit}>

            <h1>Log In</h1>

                <div className="form-inputs">
                        <label htmlFor="email" className="form-label" >
                                 Email:
                                 <span className= {validEmail ? "valid" : "error" } >
                                      { validEmail ? <FontAwesomeIcon icon={faCheck} style = {validEmail ? {color:'green'} :{color:'transparent'} } /> : null}
                                </span>
                                <span className={validEmail || !email ? "hide" : "invalid"}>
                                     {!validEmail  ?  <FontAwesomeIcon icon={faTimes} style = {validEmail || !email ? {color:'transparent'} : {color:'red'} }/> :null }
                                </span>
                                 {/* <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                 <FontAwesomeIcon icon={faTimes} className={validEmail|| !email ? "hide" : "invalid"} /> */}
                        </label>
                                <input
                                    className="form-input"
                                    name="email"
                                    type="email"
                                    id="email"
                                    data-testid="email-input"
                                    ref={emailRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    aria-invalid={validEmail ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur = {() => setUserFocus(false)}
                                    value={email}
                                    placeholder="Enter Email"
                                />
                                {userFocus && email && !validEmail ? <p id="uidnote" className = {userFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Please enter a valid email.<br />
                                </p> : null }



                </div>

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label" >
                         Password:
                        {/* <FontAwesomeIcon icon={faCheck} className={validpassword ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validpassword || !password ? "hide" : "invalid"} />
                            <span className= {validpassword ? "valid" : "hide"}>
                                {validpassword ? <FontAwesomeIcon icon={faCheck} style = {validpassword ? {color:'green'} :{color:'transparent'} } /> : null}
                            </span>
                            <span className={validpassword || !password ? "hide" : "invalid"}>
                                {!validpassword  ?  <FontAwesomeIcon icon={faTimes} style = {validpassword || !password ? {color:'transparent'} : {color:'red'} }/> :null }
                            </span>        */}


                    </label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            onChange={(e) => setpassword(e.target.value)}
                            value={password}
                            required
                            placeholder="Enter password"
                            aria-invalid={validpassword ? "false" : "true"}
                            aria-describedby="passwordnote"
                            onFocus={() => setpasswordFocus(true)}
                            onBlur={() => setpasswordFocus(false)}
                        />
                        {/* {userFocus && password && !validpassword ? <p id="pwdnote" className={passwordFocus && password && !validpassword ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> : null } */}


                    <div/>






               </div>
                {/* Temporarily redirecting to the dashboard - TBR Anchor */}
                <button className="form-input-btn " data-testid="btn-to-login" type='submit'><a href="/dashboard">Login</a></button>
                    <span className="form-input-login">Need an account? Signup <a href="/signup">here</a></span>
                </form>
                </div>
        </section>

            )}
         </>
    )
}
