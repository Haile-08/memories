const express = require("express");

const {
  httpCreatePost,
  httpGetPost,
} = require("../controller/post.controller");

const router = express.Router();

router.get("/", httpGetPost);
router.post("/", httpCreatePost);

module.exports = router;
