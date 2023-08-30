import React, { useEffect } from 'react';
import './App.css';
import Quora from './Components/Quora'; 
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Components/Login';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid:authUser.uid,
          displayName:authUser.displayName,
          photo:authUser.photoURL,
          email:authUser
        }));
      }
      else{
        dispatch(logout());
      }
    })
  },[dispatch]);
  return (
    <div className="App">
      {
        user ? <Quora/> : <Login/>
      }
    </div>
  );
}

export default App;
