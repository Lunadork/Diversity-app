import { useRef, useState, useEffect, useContext } from 'react' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import AuthContext from '../../context/AuthProvider'
import axios from '../../api/axios';
import { Button } from '../Button/index'; 
// import './style.css'/
// import React from 'react';
// import { Register } from '../Register';

// import { ValidateLogin } from '../ValidateLogin'








const LOGIN_URL = '/auth'

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/i;

export const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();
    


    
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

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
        setValidPwd(PWD_REGEX.test(pwd))
    }, [pwd])

    // useEffect (()=>{
    //     const result = PWD_REGEX.test(pwd);
    //     console.log(result);
    //     console.log(pwd);
    //     setValidPwd(result);
    // }, [pwd])





    // Empty out any error message if user changes username or password
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])



    const handleSubmit = async (e) => {
            e.preventDefault();
            setSuccess(true);
            try {
                const response = await axios.post(LOGIN_URL,
                    JSON.stringify({ email, pwd }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                console.log(JSON.stringify(response?.data));
                //console.log(JSON.stringify(response));
    
                //CHECKWITH BACKEND
                const accessToken = response?.data?.accessToken;
                const roles = response?.data?.roles;
    
                setAuth({ email, pwd, roles, accessToken });
                setEmail('');
                setPwd('');
                setSuccess(true);
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
                        <Button path = '/' value ='Go Home'/>
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
                                 <span className= {validEmail ? "valid" : "hide"}>
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
                                    type="text"
                                    id="email"
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
                                    Must be valid email<br />
                                </p> : null}
                                
                </div>

                <div className="form-inputs">     
                    <label htmlFor="password" className="form-label" >
                         Password: 
                         {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                         <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                         {/* <span className= {validPwd ? "valid" : "hide"}>
                                {validPwd ? <FontAwesomeIcon icon={faCheck} style = {validPwd ? {color:'green'} :{color:'transparent'} } /> : null} */}
                         {/* </span>
                         <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                {!validPwd  ?  <FontAwesomeIcon icon={faTimes} style = {validPwd || !pwd ? {color:'transparent'} : {color:'red'} }/> :null } */}
                        {/* </span> */}

                    </label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            placeholder="Enter Password"
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        {/* {userFocus && pwd && !validPwd ? <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> : null } */}
                         
                
                    <div/>

            
                    
                

                </div>
                <button className="form-input-btn " type='submit'>Login</button>
                    <span className="form-input-login">Need an account? Signup <a href="/signup">here</a></span>
                
            </form>
            

            </div>



        </section>
        
            )}
         </>  
    )
}
