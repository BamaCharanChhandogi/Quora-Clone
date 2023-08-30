import React,{useState,useEffect} from 'react'
import './Feed.css'
import QuoraDefaultBox from './QuoraDefaultBox';
import QuoraFeedbox from './QuoraFeedbox';
import db, { auth } from '../firebase';
function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('question').onSnapshot((snapshot) => {
      const feedData = snapshot.docs.map((doc) => ({ id: doc.id,question: doc.data()}));
      setFeed(feedData);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
    };
  }, []);
  return (
    <div className='Feed'>
      <QuoraDefaultBox/>
      {
        feed.map(({ id, question }) =>(
          <QuoraFeedbox key={id} question={question.question} userImg={auth.currentUser.photoURL} PostImg={question.url} displayname={auth.currentUser.displayName}/>
        ))
      }
    </div>
  )
}

export default Feed;
