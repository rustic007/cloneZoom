import express from "express"
import { getStreamToken } from "../controllers/chat.controller.js"
import { userAuthenticated } from "../middlewares/auth.user.js";

const router = express.Router()

router.get("/token",userAuthenticated, getStreamToken)

export default router;