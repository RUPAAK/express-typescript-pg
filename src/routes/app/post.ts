import { Router, Request, Response } from "express";
import { Post } from "../../controllers/app/post";

const router = Router();

router.get("/", Post.getPosts);

export { router as postRouter };
