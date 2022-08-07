import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/post";
import useStyles from "./styles";
function Posts() {
  const post = useSelector((state) => state.posts);
  console.log(post);
  const classes = useStyles();
  return (
    <>
      <h1>posts</h1>
      <Post />
    </>
  );
}

export default Posts;
