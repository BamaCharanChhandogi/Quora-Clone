import React,{useState,useEffect} from 'react'
import './Feed.css'
import QuoraDefaultBox from './QuoraDefaultBox';
import QuoraFeedbox from './QuoraFeedbox';
import db from '../firebase';

function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('question').orderBy('timeStamp','desc').onSnapshot((snapshot) => {
      const feedData = snapshot.docs.map((doc) => ({ id: doc.id,question: doc.data()}));
      setFeed(feedData);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
    };
  }, []);
  // Function to format the date

  
  return (

    <div className='Feed'>
      <QuoraDefaultBox/>
      {
        feed.map(({ id, question }) =>(
          <QuoraFeedbox id={id} PostTime={question.timeStamp} postDisLike={question.postDisLike} postLike={question.postLike} question={question.question} userImg={question.userImg} PostImg={question.PostImg} displayname={question.displayName}/>
        ))
      }
    </div>
  )
}

export default Feed;
