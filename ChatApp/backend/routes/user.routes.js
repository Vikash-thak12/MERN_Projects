import express from "express"
import { findAllUsers } from "../controllers/user.controller.js";
import protectRoute from "../middlewares/protect.routes.js";
const router = express.Router();

router.get("/", protectRoute, findAllUsers)
// router.get("/", findAllUsers)

export default router