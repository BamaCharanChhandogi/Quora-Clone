import React from 'react'
import { Avatar, Button } from '@mui/material';
function SidebarContent(props) {
  return (
    <div className='side-content'>
      <div className='profile-icon'>
        <img src="https://www.pngitem.com/pimgs/m/71-719180_bengali-navigation-icon-1536587412-document-circle-icon-png.png" alt="" />
      </div>
      <div className='content'>
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default SidebarContent;
