import React, { useState } from 'react';
import { auth, provider } from '../firebase';

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
      console.log(auth);
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
    <div className='flex items-center justify-center'>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-blue-500 p-8 border-2 border-red-500 rounded-lg mt-20 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">Login</h2>
        <form>
          <div className="user-box mb-6">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="username"
              className="border-none border-b-2 outline-none bg-transparent text-white text-lg py-2"
            />
          </div>
          <div className="user-box mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              id="password"
              className="border-none border-b-2 outline-none bg-transparent text-white text-lg py-2"
            />
          </div>
          <div>
          <button onClick={signUp} className="w-32 py-2 bg-red-500 text-white rounded cursor-pointer mr-2">Sign Up</button>
          <button type='submit' onClick={login} className="w-32 py-2 bg-red-500 text-white rounded cursor-pointer mr-2">Login</button>
          </div>
          <button type='button' onClick={signIn} className="p-2 mt-2 bg-red-500 text-white rounded cursor-pointer">Continue With Google</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
