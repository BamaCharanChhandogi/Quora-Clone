import React, { useState } from "react";
import {
  Home,
  Notifications,
  Groups,
  QuestionAnswer,
  Search,
  Language,
  HomeOutlined,
  QuestionAnswerOutlined,
  Groups2Outlined,
  GroupsOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import "./Navbar.css";
import { Avatar, Button } from "@mui/material";
import { logout, selectUser } from "../features/counter/userSlice";
import db, { auth } from "../firebase";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import firebase from "firebase/compat/app";

const styleForAvatar = {
  width: "32px",
  height: "32px",
};

function Navigtationbar() {
  const user = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handleQuestion = (e) => {
    if (InputValue != "") {
      e.preventDefault();
      document.getElementById("quora").style.filter = "blur(0px)";
      setOpenModal(false);
      db.collection("question").add({
        question: InputValue,
        PostImg: inputUrl,
        postLike: 0,
        postDisLike: 0,
        timeStamp: firebase.firestore.Timestamp.now(),
        userId: user.uid,
        displayName: user.displayName,
        userImg: user.photo,
      });
      setInputValue("");
      setInputUrl("");
    } else {
      alert("Please enter a question");
    }
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://download.logo.wine/logo/Quora/Quora-Logo.wine.png"
          alt="logo"
        />
      </div>
      <div className="menu">
        <div className="nav-icon Home">
          <HomeOutlined />
        </div>
        <div className="nav-icon">
          <QuestionAnswerOutlined />
        </div>
        <div className="nav-icon">
          <GroupsOutlined />
        </div>
        <div className="nav-icon">
          <NotificationsOutlined />
        </div>
      </div>
      <div className="nav-search">
        <Search />
        <input type="text" placeholder="Search Question" />
      </div>
      <div className="nav-remaining">
        <div className="profile-avatar">
          <Avatar style={styleForAvatar} src={user.photo} />
        </div>
        <div className="nav-language">
          <Language sx={{ fontSize: 32 }} />
        </div>
        <div className="nav-button">
          <Button
            onClick={() => {
              document.getElementById("quora").style.filter = "blur(8px)";
              setOpenModal(true);
            }}
          >
            Add a question
          </Button>
        </div>
        <div
          onClick={() => {
            auth.signOut();
          }}
          className="logout-btn"
        >
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
            // width: '60%',
            // height: '60%',
            maxWidth: "60%", // Adjust as needed
            maxHeight: "60%", // Adjust as needed
            width: "auto", // Adjust as needed
            height: "auto", // Adjust as needed
            backgroundColor: "#c92c92",
            zIndex: "1000",
            top: "10%",
            left: "24%",
          },
          content: {
            WebkitOverflowScrolling: "touch",
            overflow: "auto",
            outline: "none",
            margin: "-15px",
          },
        }}
      >
        <div className="modal__title">
          <h5>Add Question</h5>
        </div>
        <div className="modal__info">
          <Avatar className="avatar" src={user.photo} />
          {/* <p>{user.disPlayName ? user.disPlayName : user.email} asked</p> */}
          <div className="modal__scope">
            <p>{user.displayName}</p>
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
          <div className="modal__fieldLink">
            <input
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              type="text"
              placeholder="Enter image link.."
            ></input>
          </div>
        </div>
        <div className="modal__buttons">
          <button
            className="cancel"
            onClick={() => {
              setOpenModal(false);
              document.getElementById("quora").style.filter = "blur(0px)";
            }}
          >
            Cancel
          </button>
          <button type="sumbit" onClick={handleQuestion} className="add">
            Add Question
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Navigtationbar;
