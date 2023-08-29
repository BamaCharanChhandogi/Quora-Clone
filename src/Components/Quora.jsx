import React from 'react'
import './Quora.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Navbar from './Navbar';
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
