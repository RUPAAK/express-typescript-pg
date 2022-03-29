import { Router } from "express";
import { postRouter } from "./post";

const router = Router();

router.use("/posts", postRouter);

export { router as indexAppRouter };
