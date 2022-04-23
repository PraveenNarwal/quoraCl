import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./css/Post.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import RepeatOneOutlinedIcon from "@mui/icons-material/RepeatOneOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Modal from "react-responsive-modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactTimeAgo from "react-time-ago";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

const Post = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");

  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>gmail.com</h4>
        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{post?.questionName}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Anser
          </button>
          <Modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by <span className="name">usernamegmail.com</span> on{" "}
                <span className="name">{new Date().toLocaleString()}</span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill placeholder="Enter your answer" />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="submit" className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>

        <div className="post__footer">
          <div className="post__footerAction">
            <ArrowUpwardOutlinedIcon />
            <ArrowDownwardOutlinedIcon />
          </div>
          <RepeatOneOutlinedIcon />
          <ChatBubbleOutlineOutlinedIcon />
          <div className="post__footerLeft">
            <ShareOutlinedIcon />
            <MoreHorizOutlinedIcon />
          </div>
        </div>
        <p
          style={{
            color: "rgba(0,0,0,0.5)",
            fontSize: "12px",
            fontWeight: "bold",
            margin: "10px 0",
          }}
        >
          {post?.allAnswers.length}
        </p>
        <div
          style={{
            margin: "5px 0px 0px 0px ",
            padding: "5px 0px 0px 20px",
            borderTop: "1px solid lightgray",
          }}
          className="post__answer"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "10px 5px",
              borderTop: "1px solid lightgray",
            }}
            className="post-answer-container"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#888",
              }}
              className="post-answered"
            >
              <Avatar />
              <div
                style={{
                  margin: "0px 10px",
                }}
                className="post-info"
              >
                <p>username</p>
                <span>tiemstamps</span>
              </div>
            </div>
          </div>
          <div className="post-answer">this is test anser</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
