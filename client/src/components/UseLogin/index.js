import { useRef, useState, useEffect, useContext } from 'react' ;
import AuthContext from '../../context/AuthProvider' 
import './style.css'
import React from 'react';


import axios from '../../api/axios';
import Button from '../Button';
const LOGIN_URL = '/auth'


export const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    // Set focus on first input when component loads, dependency array kept empty so only occurs when component loads
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // Empty out any error message if user changes username or password
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd)
        setUser('');
        setPwd('');
        setSuccess(true);
        
        // try {
        //     const response = await axios.post(LOGIN_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     //console.log(JSON.stringify(response));

        //     //CHECKWITH BACKEND
        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;

        //     setAuth({ user, pwd, roles, accessToken });
        //     setUser('');
        //     setPwd('');
        //     setSuccess(true);
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        // }


        
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
            <div class="bg-img">

            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            
            <form className = "form" onSubmit ={handleSubmit}>
            <h1>Log In</h1>
                    <div className="form-inputs">
                         <label htmlFor="username" className="form-label" >Username:</label>
                             <input 
                                className="form-input"
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                placeholder="Enter Username"
                             />
                    </div>
                       <div className="form-inputs">     
                            <label htmlFor="password" className="form-label" >Password:</label>
                                <input
                                    className="form-input"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    placeholder="Enter Password"
                                />
                        
                    <div/>
            </div>
            <button className="form-input-btn">Login</button>
            
            Don't have an Account?<br />
            
            <span className="form-input-login"> Sign up  <a href="/">here!</a></span>

            <div/>
            </form>

            </div>
            
            

        </section>
            )}
            </>
           
           
    )
}


