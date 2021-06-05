import React, { useState } from 'react';
import './Register.css'
import { Link, useHistory } from "react-router-dom";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonIcon from '@material-ui/icons/Person';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { auth, db } from "./firebase";
import { getAuth, signInWithCustomToken } from "firebase/auth";


function Re() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [Mobile, setMobile] = useState('');
    

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((cred) => {
                // it successfully created a new user with email and password
                return db.collection('info').doc(cred.user.uid).set({
                    name:name,
                    email:email,
                    password:password,
                    mobile:Mobile
                })
                
            })
            .then((auth) => {
                history.push('/')           //logged in and redirect garam ka garne ho
            })
            .catch(error => alert(error.message) )
            console.log("error")
             
    }
    return(
           <div className="page">
           <img
                    className="login__logo"
                    src='https://cryptologos.cc/logos/aave-aave-logo.png' 
            />
            
           
            <div className='login__container'>
                <center><h2>Create Account</h2></center>

                <form>
                    
                    <h5>Your Name</h5>
                    
                    <input type='name' value={name} onChange={e => setName(e.target.value)} />
                    
                    
                    <h5>
                       <h5> Mobile Number </h5>
                       <input type='text' value={Mobile} onChange={e => setMobile(e.target.value)} />
                       
                      
                    
                    </h5>
                    
                    <h5>E-mail</h5>
                    
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <p>password must be atleast 6 character</p>

                    <center>
                    <button type='submit' onClick={register} className='login__signInButton'>Register</button>
                    </center>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

           </div>
           </div>
    )
}

    


export default Re;