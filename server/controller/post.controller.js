const postMessage = require("../models/postMessage");

const httpGetPost = async (res, req) => {
  try {
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const httpCreatePost = async (res, req) => {
  const post = req.body;

  const newPost = new postMessage(post);
  try {
    await newPost.save();
    res.sataus(201).json(newPost);
  } catch (error) {
    res.sataus(409).json({ error: error.message });
  }
};

module.exports = {
  httpGetPost,
  httpCreatePost,
};
