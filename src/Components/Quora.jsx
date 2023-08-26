import React from 'react'
import './Quora.css'
import Navbar from './navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
function Quora() {
  return (
    <div>
      <Navbar/>
      <div className="quora-content">
      <Sidebar/>
      <Feed/>
      </div>
    </div>
  )
}

export default Quora;
