import React, { useState } from 'react';
import './Login.css';
import { auth, provider } from '../firebase'; // Make sure to import "auth" from the correct path

function Login() {
  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const signIn = () => {
   auth.signInWithPopup(provider).catch((err) => {
      alert(err);
    });
    console.log(auth);
  };

  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='Login'>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="username"
            />
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              id="password"
            />
          </div>
          <button onClick={signUp}>Sign Up</button>
          <button type='submit' onClick={login}>Login</button>
          <button type='button' onClick={signIn}>Continue With Google</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
