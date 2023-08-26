import React from 'react'
import './QuoraDefaultBox.css';
import { Avatar } from '@mui/material';
function QuoraDefaultBox() {
  return (
    <div className='Quora-Box'>
         <img src="https://pbs.twimg.com/profile_images/1677776392359141386/EmXpF_gl_400x400.jpg" alt="" />
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
