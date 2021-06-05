import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import Re from './Re';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();                       //stops refreshing

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')           //logged in and redirect garam ka garne ho
            })
            .catch(error => alert(error.message))
    }

   

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://cryptologos.cc/logos/aave-aave-logo.png' 
                />
            </Link>

            <div className='login__container'>
                <h2>Sign-in</h2>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                </p>
                <hr/>
                <center> <h3> If New !</h3></center> 
                <Link to='/register'>
                <button onClick={<Link to='/Re'></Link>} className='login__registerButton'>Register</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;