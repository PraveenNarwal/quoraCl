import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/Feed.css";
import Post from "./Post";
import QuoraBox from "./QuoraBox";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="feed">
      <QuoraBox />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      {/* <Post /> */}
    </div>
  );
};

export default Feed;
