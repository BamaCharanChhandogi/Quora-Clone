import React, { useState } from "react";
import "./QuoraDefaultBox.css";
import { Avatar } from "@mui/material";
import db, { auth } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import firebase from "firebase/compat/app";

function QuoraDefaultBox() {
  const [Question, setquestion] = useState("");
  const user = useSelector(selectUser);

  const handleQuestion = () => {
    db.collection("question").add({
      question: Question,
      timeStamp: firebase.firestore.Timestamp.now(),
      userId: user.uid,
      displayName: user.displayName,
      userImg: user.photo,
    });
    setquestion("");
  };
  return (
    <div className="Quora-Box">
      <img src={auth.currentUser.photoURL} alt="" />
      <div className="QuoraBox-Info">
        <input
          type="text"
          value={Question}
          onChange={(e) => {
            setquestion(e.target.value);
          }}
          placeholder="What do you want share or ask?"
        />
        <div className="QuoraBox-function">
          <div className="fun-btn">
            <button type="button" onClick={handleQuestion}>
              Ask
            </button>
          </div>
          <div className="fun-btn">
            <button>Answer</button>
          </div>
          <div className="fun-btn">
            <button type="button" onClick={handleQuestion}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoraDefaultBox;
