import { Avatar } from '@mui/material';
import React from 'react'
import './QuoraFeedBox.css'
import Feed from './Feed';

import { Chat, ChatOutlined, Message, ShareOutlined, ThumbDown, ThumbDownOutlined, ThumbUp, ThumbUpOutlined } from '@mui/icons-material';
function QuoraFeedbox(props) {
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
        <button>Answer</button>
      </div>
      <div className='Answer-feedbox'>
        <div className="image">
        <img src={props.PostImg} alt="" />
        </div>
        {/* <div className='ans'>
        <p> Is the 94.1 LPA salary in Bangalore too low for a 32-year-old software engineer?With a 94.1 LPA you can just breathe in Bangalore. You need minimum of 94.1 Cr per annum to live an average life in Bangalore. May be over 100 Cr. I am sorry but for buying an underwear in Bangalore costs around 50 lacs and you can merely buy just 2 annually within your package that too if you compromise in everything and take loan from your friends. How are you still managing? 🥺Some small questions for you. Which company is paying you a monthly salary of over 7 Lacs per month and it would be great if you can share your point of views .</p>
        </div> */}
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

      </div>
    </div>
  )
}

export default QuoraFeedbox;
