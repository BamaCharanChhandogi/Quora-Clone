import React from 'react'
import './Feed.css'
import QuoraDefaultBox from './QuoraDefaultBox';
import QuoraFeedbox from './QuoraFeedbox';
function Feed() {
  return (
    <div className='Feed'>
      <QuoraDefaultBox/>
      <QuoraFeedbox/>
      <QuoraFeedbox />
      <QuoraFeedbox/>
      <QuoraFeedbox/>
    </div>
  )
}

export default Feed;
