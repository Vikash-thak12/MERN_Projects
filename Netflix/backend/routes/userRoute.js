import express from "express"
import { login, Signup } from "../controllers/user.js";


const router = express.Router();

router.route("/signup").post(Signup)
router.route("/login").post(login)
export default router