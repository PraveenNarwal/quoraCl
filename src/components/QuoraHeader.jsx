import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import "./css/QuoraHeader.css";
import Modal from "react-responsive-modal";
import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-modal/styles.css";
import { ExpandMore } from "@material-ui/icons";
import { Input } from "@mui/material";
const QuoraHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");

  const Close = <CloseIcon />;

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentIcon />
          </div>
          <div className="qHeader__icon">
            <PeopleAltIcon />
          </div>
          <div className="qHeader__icon">
            <NotificationsNoneOutlinedIcon />
          </div>
        </div>
        <div className="qHeader__input">
          <SearchIcon />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
          <Avatar />
          <Button onClick={() => setIsModalOpen(true)}>Add The Question</Button>
        </div>

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
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className="avatar" />
            <div className="modal__scope">
              <PeopleAltIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>

          <div className="modal__Field">
            <Input
              type=" text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                placeholder="Optional: inclue a link that gives context"
              />
              {inputUrl !== "" && (
                <img
                  style={{
                    height: "40vh",
                    objectFit: "contain",
                  }}
                  src={inputUrl}
                  alt="displayimage"
                />
              )}
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default QuoraHeader;
