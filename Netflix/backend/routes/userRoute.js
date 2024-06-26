import express from "express"
import { login, logout, Signup } from "../controllers/user.js";


const router = express.Router();

router.route("/signup").post(Signup)
router.route("/login").post(login)
router.route("/logout").get(logout)
export default router