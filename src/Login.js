import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import './Login.css'
import { register } from './serviceWorker';
import { auth } from './Firebase';

function Login() {
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const login=event=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(e=> alert(e.message))

    }
    const register=event=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //create user redirect
            history.push('/');
        })
        .catch(e=>alert(e.message))

    }

    return (
        <div className='login'>
        <Link to='/'>
         <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png'/>
            
        </Link>
        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='email' value={email} onChange={event=>setEmail(event.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={event=>setPassword(event.target.value)}/>
                <button  type='submit' onClick={login} className='login__signin'>Sign In</button>
            </form>
            <p> 
                By signing-in you agree to Amazon's Conditions of Use & Sale.Please see our Privacy Notice,our cookies Notice and our Intrest-Based Ads Notice.
            </p>
            <button className='login__register' onClick={register}>Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login
