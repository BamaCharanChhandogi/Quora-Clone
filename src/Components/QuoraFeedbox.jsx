import { Avatar, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./QuoraFeedBox.css";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import {
  Chat,
  ChatOutlined,
  Message,
  Padding,
  ShareOutlined,
  ThumbDown,
  ThumbDownOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import ReactModal from "react-modal";
import {
  selectQuestionId,
  selectQuestionName,
  setQuestionInfo,
} from "../features/counter/questionSlice";
import db from "../firebase";
import { selectUser } from "../features/counter/userSlice";
import firebase from "firebase/compat/app";

function QuoraFeedbox(props) {
  const [open, setOpen] = useState(false);
  const [AnswerVal, setAnswerVal] = useState("");
  const [InputUrl, setInputUrl] = useState("");
  const [GetAnswer, setGetAnswer] = useState([]);
  const dispatch = useDispatch();
  const questionId = useSelector(selectQuestionId);
  const questionName = useSelector(selectQuestionName);
  const user = useSelector(selectUser);
  //Like // Dislike
  const [Like, setLike] = useState(false);
  const [LikeCount, setLikeCount] = useState(0);
  // const [Dislike, setDislike] = useState(false);
  // const [DislikeCount, setDislikeCount] = useState(0);

  const handelLike = () => {
    if(questionId){
      if (!Like) {
        setLike(true);
        setLikeCount(props.postLike + 1);
        db.collection("question")
          .doc(questionId)
          .update({
            postLike: LikeCount,
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
        // if(DislikeCount!=0){
        //   setDislikeCount(DislikeCount-1);
        // }
      } else {
        setLike(false);
      }
    }
  };

  // const handelDislike=(e)=>{
  //   if(!Dislike && DislikeCount==0){
  //     setDislike(true);
  //     setDislikeCount(DislikeCount+1);
  //     if(LikeCount!=0){
  //       setLikeCount(LikeCount-1);
  //     }
  //   }
  //   else{
  //     setDislike(false);
  //   }
  //   // sending like count to server
  //   db.collection("question")
  //   .doc(questionId)
  //   .update({
  //     postDisLike: DislikeCount,
  //     })
  //   .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // }

  //fetching answer
  useEffect(() => {
    if (questionId) {
      db.collection("question")
        .doc(questionId)
        .collection("answer")
        .onSnapshot((querySnapshot) => {
          const AnswerData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            answer: doc.data(),
          }));
          setGetAnswer(AnswerData);
        });
    }
  }, [questionId]);
  //
  const modalSave = (e) => {
    if (AnswerVal != "") {
      e.preventDefault();
      // console.log(questionId,questionName);
      if (questionId) {
        db.collection("question").doc(questionId).collection("answer").add({
          answer: AnswerVal,
          timeStamp: firebase.firestore.Timestamp.now(),
          questionId: props.id,
          userId: user.uid,
          displayName: user.displayName,
          userImg: user.photo,
        });
        setAnswerVal("");
        document.getElementById("quora").style.filter = "blur(0px)";
        setOpen(false);
      }
    } else {
      alert("Please enter your answer");
    }
  };
  const answerBtn = () => {
    document.getElementById("quora").style.filter = "blur(8px)";
    setOpen(true);
  };
  // cancel
  const modalCancel = () => {
    document.getElementById("quora").style.filter = "blur(0px)";
    setOpen(false);
  };
  return (
    <div
      className="Profile-FeedBox"
      onClick={() => {
        dispatch(
          setQuestionInfo({
            questionId: props.id,
            questionName: props.question,
          })
        );
      }}
    >
      <div className="profile-info">
        <Avatar src={props.userImg} />
        <div className="profile-info-text">
          <h5>{props.displayname}</h5>
        </div>
        <div className="time">
          <p>{new Date(props.PostTime?.toDate()).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="Question-feedbox">
        <h3>{props.question}</h3>
        <button onClick={answerBtn}>Answer</button>
      </div>
      <div className="post__answer">
        {GetAnswer.map(({ id, answer }) => (
          <div key={id} className="answer">
            {props.id === answer.questionId ? (
              <div>
                <div className="PostUser-Profile">
                  <img src={answer.userImg} alt="" />
                  <h5>{answer.displayName}</h5>
                  <p>
                    {answer.timeStamp
                      ? new Date(answer.timeStamp?.toDate()).toLocaleString()
                      : ""}
                  </p>
                </div>
                <p>
                  {answer.answer}
                  <br />
                  <span>
                    {/* <span style={{ color: "#b92b27" }}>
                      {answer.displayName
                        ? answer.displayName
                        : answer.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span> */}
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      <div className="Feed-footer">
        <div className="vote">
          <div className="Upvote" onClick={handelLike}>
            <ThumbUpOutlined />
            <h4>{props.postLike}</h4>
          </div>
          <div className="break">|</div>
          <div className="Downvote">
            <ThumbDownOutlined />
            {/* <h4>{props.postDisLike}</h4> */}
          </div>
        </div>
        {/* <div className="Message">
          <ChatOutlined />
        </div> */}
        <div className="Share">
          <ShareOutlined />
        </div>
        <ReactModal
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
          }}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: "60%",
              height: "60%",
              backgroundColor: "#c92c92",
              zIndex: "1000",
              top: "20%",
              left: "24%",
            },
            content: {
              WebkitOverflowScrolling: "touch",
              overflow: "auto",
              outline: "none",
              margin: "-20px",
            },
          }}
        >
          <div className="modal-ans">
            <h3>Write your answer</h3>
            <input
              required
              type="text"
              value={AnswerVal}
              onChange={(e) => {
                setAnswerVal(e.target.value);
              }}
              placeholder="start your writing"
            />
            <input
              type="link"
              value={InputUrl}
              onChange={(e) => {
                setInputUrl(e.target.value);
              }}
              placeholder="Enter image link"
            />
          </div>
          <div className="modal-btn">
            <button onClick={modalCancel}>Cancel</button>
            <button type="submit" onClick={modalSave}>
              Save
            </button>
          </div>
        </ReactModal>
      </div>
    </div>
  );
}

export default QuoraFeedbox;
