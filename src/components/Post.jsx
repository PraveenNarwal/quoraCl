import React from "react";
import Avatar from "@mui/material/Avatar";
import "./css/post.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import RepeatOneOutlinedIcon from "@mui/icons-material/RepeatOneOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const Post = () => {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>gmail.com</h4>
        <small>time</small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>summaryofthe question</p>
          <button>Anser</button>
        </div>

        <div className="post__footer">
          <div className="post__footerAction">
            <ArrowDownwardOutlinedIcon />
            <ArrowUpwardOutlinedIcon />
          </div>
          <RepeatOneOutlinedIcon />
          <ChatBubbleOutlineOutlinedIcon />
          <div className="post__footerLeft">
            <ShareOutlinedIcon />
            <MoreHorizOutlinedIcon />
          </div>
        </div>
        <p>1 anser</p>
        <div className="post__answer-container">
          <div className="post__answered">
            <Avatar />
            <div className="post-info">
              <p>username</p>
              <span>tiemstamps</span>
            </div>
          </div>
          <div className="post__answer">this is test anser</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
