import React from 'react';
import './App.css';
import Quora from './Components/Quora'; 
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Components/Login';
function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {
        user ? <Quora/> : <Login/>
      }
      {/* <Quora /> */}
    </div>
  );
}

export default App;
