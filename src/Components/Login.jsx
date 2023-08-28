import React, { useState } from 'react'
import './Login.css'
import {auth,provider} from '../firebase'
function Login() {
const login =() => {
  auth.signInWithEmailAndPassword(email, password);
  then((auth)=>{
    console.log(auth);
  }).catch((err) => {alert(err);});
}
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  return (
    /* The code you provided is a React component called "Login". It is a form that allows users to
    enter their username and password to log in. */
    /* The code you provided is a JSX code snippet that represents a React component called "Login". It
    is a form that allows users to enter their username and password to log in. */
    <div className='Login'>
      <div class="login-box">
      <h2>Login</h2>
      <form action="" onsubmit="return validation()">
        <div class="user-box">
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name="" placeholder="username" id="username" />
        </div>
        <div class="user-box">
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}name="" placeholder="password" id="password" />
        </div>
        <button type='submit' onClick={login}>Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login
