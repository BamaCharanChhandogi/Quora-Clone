import React from 'react'
import './QuoraDefaultBox.css';
import { Avatar } from '@mui/material';
import { auth } from '../firebase';
function QuoraDefaultBox() {
  return (
    <div className='Quora-Box'>
         <img src={auth.currentUser.photoURL} alt="" />
      <div className='QuoraBox-Info'>
        <input type="text" placeholder='What do you want share or ask?' />
        <div className='QuoraBox-function'>
        <div className='fun-btn'>
            <button>Ask</button>
        </div>
        <div className='fun-btn'>
            <button>Answer</button>
        </div>
        <div className='fun-btn'>
            <button>Post</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default QuoraDefaultBox;
