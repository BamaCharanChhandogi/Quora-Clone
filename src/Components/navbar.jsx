import React from 'react'
import {Home,Notifications,Groups,QuestionAnswer, Search, Language, HomeOutlined, QuestionAnswerOutlined, Groups2Outlined, GroupsOutlined, NotificationsOutlined} from '@mui/icons-material';
import './Navbar.css'
import { Avatar, Button } from '@mui/material';

const styleForAvatar = {
    'width':'34px',
    'height':'34px'
  };
function navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='https://download.logo.wine/logo/Quora/Quora-Logo.wine.png' alt='logo'/>
        </div>
        <div className='menu'>
            <div className='nav-icon Home'>
            <HomeOutlined/>
            </div>
            <div className='nav-icon'>
            <QuestionAnswerOutlined/>
            </div>
            <div className='nav-icon'>
                <GroupsOutlined/>
            </div>
            <div className='nav-icon'>
                <NotificationsOutlined/>
            </div>
        </div>
        <div className='nav-search'>
            <Search/>
            <input type='text' placeholder='Search Question'/>
        </div>
        <div className='nav-remaining'>
            <div className='profile-avatar'>
                <Avatar style={styleForAvatar}/>
            </div>
            <div className='nav-language'>
            <Language sx={{fontSize:31}}/>
            </div>
            <div className='nav-button'>
            <Button>Add a question</Button>
            </div>
        </div>
    </div>
  )
}

export default navbar;
