import React from "react";
import Post from "./post/post";
import useStyles from "./styles";
function Posts() {
  const classes = useStyles();
  return (
    <>
      <h1>posts</h1>
      <Post />
    </>
  );
}

export default Posts;
