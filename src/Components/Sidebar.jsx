import React from 'react';
import SidebarContent from './SidebarContent';
import './Sidebar.css';
import { Add } from '@mui/icons-material';
function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='btn'>
        <Add/>
      <button>create space</button>
      </div>
        <SidebarContent title="History"/>
        <SidebarContent title="Bengali"/>
        <SidebarContent title="politics"/>
        <SidebarContent title="Computer Science"/>
        <SidebarContent title="Coding"/>
        <SidebarContent title="math"/>
        <SidebarContent title="History"/>
        <SidebarContent title="Psychology"/>
    </div>
  )
}

export default Sidebar;
