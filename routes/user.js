import express from "express";
import {
  register,
  login,
  logout, 
  getMyProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
 
// router.get("/all", getAllUsers);

router.post("/new", register);
router.post("/login", login);
router.get("/me",isAuthenticated, getMyProfile);
router.get("/logout",logout);

// router.route("/userid/:id").get(getUserDetail);

export default router;
