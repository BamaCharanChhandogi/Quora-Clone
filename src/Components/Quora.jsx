import React from 'react'
import './Quora.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Navigtationbar from './Navigtationbar';
function Quora() {
  return (
    <div className='Quora' id='quora'>
      <Navigtationbar/>
      <div className="quora-content">
      <Sidebar/>
      <Feed/>
      </div>
    </div>
  )
}

export default Quora;
