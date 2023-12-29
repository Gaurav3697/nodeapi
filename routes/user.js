import express from "express";
import { CreateNewUser, getAllUsers, getUserId } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.get("/userid/:id",getUserId)

router.post("/new",CreateNewUser);


export default router;