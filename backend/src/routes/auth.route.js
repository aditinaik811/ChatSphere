import express from "express"
const router = express.Router()
import { signup ,login,logout } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfile } from "../controllers/auth.controller.js";

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);
router.put('/update-profile',protectRoute,updateProfile);
router.put("/check",protectRoute,(req,res)=>res.status(200).json(req.user));
export default router