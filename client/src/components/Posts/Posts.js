import React from "react";
import post from "./post/post";
import useStyles from "./styles";
function Posts() {
  const classes = useStyles();
  return (
    <>
      <h1>posts</h1>
      <post />
    </>
  );
}

export default Posts;
