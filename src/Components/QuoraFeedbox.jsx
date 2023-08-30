import { Avatar } from '@mui/material';
import React,{useState} from 'react'
import './QuoraFeedBox.css'
import Feed from './Feed';

import { Chat, ChatOutlined, Message, ShareOutlined, ThumbDown, ThumbDownOutlined, ThumbUp, ThumbUpOutlined } from '@mui/icons-material';
import ReactModal from 'react-modal';
function QuoraFeedbox(props) {
  const [open, setOpen] = useState(false);
  
  const answerBtn=()=>{
    document.getElementById('quora').style.filter='blur(8px)';
    setOpen(true);
  }
  // cancel
  const modalCancel=()=>{
    document.getElementById('quora').style.filter='blur(0px)';
    setOpen(false);
  }
  const modalSave=()=>{
    const ans=
    document.getElementById('quora').style.filter='blur(0px)';
    setOpen(false);

  }
  return (
    <div className='Profile-FeedBox'>
      <div className='profile-info'>
        <img src={props.userImg} alt="" />
        <div className='profile-info-text'>
          <h5>{props.displayname}</h5>
        </div>
      </div>
      <div className='Question-feedbox'>
        <h3>{props.question}</h3>
        <button onClick={answerBtn}>Answer</button>
      </div>
      <div className='Answer-feedbox'>
        <div className="image">
        <img src={props.PostImg} alt="" />
        </div>
        <div className='ans'>
        <p>{props.ans}</p>
        </div>
      </div>
      <div className='Feed-footer'>
        <div className='vote'>
        <div className='Upvote'>
          <ThumbUpOutlined/>
          <h5>Upvote</h5>
        </div>
        <div className='break'>|</div>
        <div className='Downvote'>
          <ThumbDownOutlined/>
        </div>
        </div>
        <div className='Message'>
          <ChatOutlined/>
        </div>
        <div className='Share'>
          <ShareOutlined/>
        </div>
        <ReactModal
        isOpen={open}
        onRequestClose={()=>{setOpen(false)}}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            width: '60%',
            height: '60%',
            backgroundColor: "#c92c92",
            zIndex: "1000",
            top: "20%",
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
          <div className='modal-ans'>
            <h3>Write your answer</h3>
            <input type="text" placeholder='start your writing'/>
            <input type="link" placeholder='Enter image link' />
          </div>
          <div className='modal-btn'>
            <button onClick={modalCancel}>Cancel</button>
            <button onClick={modalSave}>Save</button>
          </div>
        </ReactModal>
      </div>
    </div>
  )
}

export default QuoraFeedbox;
