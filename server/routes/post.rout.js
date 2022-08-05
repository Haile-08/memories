import express from "express";
import httpGetPost from "../controller/post.controller";

const router = express.Router();

router.get("/", httpGetPost);

export default router;
