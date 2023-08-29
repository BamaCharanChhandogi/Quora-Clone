import React,{useState} from 'react'
import {Home,Notifications,Groups,QuestionAnswer, Search, Language, HomeOutlined, QuestionAnswerOutlined, Groups2Outlined, GroupsOutlined, NotificationsOutlined} from '@mui/icons-material';
import './Navbar.css'
import { Avatar, Button } from '@mui/material';
import { logout, selectUser } from '../features/counter/userSlice';
import db, { auth } from '../firebase';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
const styleForAvatar = {
    'width':'32px',
    'height':'32px'
  };
function Navbar() {
    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const [InputValue, setInputValue] = useState('');
    const [inputUrl, setInputUrl] = useState('');

    const handleQuestion = (e) => {
        e.preventDefault();
        setOpenModal(false);
        db.collection('question').add({
            question: InputValue,
            url: inputUrl
        })
        setInputValue('');
        setInputUrl('');

    };
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
                <Avatar style={styleForAvatar} src=""/>
            </div>
            <div className='nav-language'>
            <Language sx={{fontSize:32}}/>
            </div>
            <div className='nav-button'>
            <Button onClick={()=>{setOpenModal(true)}}>Add a question</Button>
            </div>
            <div onClick={()=>{auth.signOut()}} className='logout-btn'>
            <Button>Log Out</Button>
            </div>
        </div>
        {/* Modal */}
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: '60%',
              height: 'auto',
              backgroundColor: "#c92c92",
              zIndex: "1000",
              top: "10%",
              left: "24%",
            },
            content: {
                WebkitOverflowScrolling: 'touch',
                overflow: 'auto',
                outline: "none",
                margin: "-20px"
            }
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
            //   src={
            //     user.photo
            //       ? user.photo
            //       : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            //   }
            />
            {/* <p>{user.disPlayName ? user.disPlayName : user.email} asked</p> */}
            <div className="modal__scope">
              <p>username</p>
            </div>
          </div>
          <div className="modal__Field">
            <input
            required
              value={InputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            {/* <div className="modal__fieldLink">
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div> */}
          </div>
          <div className="modal__buttons">
            <button className="cancel" onClick={() => setOpenModal(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>
    </div>
  )
}

export default Navbar;
