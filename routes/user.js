import express from "express";
import { CreateNewUser, getAllUsers, getUserDetail,updateUser,deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new",CreateNewUser);

router.get("/userid/:id",getUserDetail)

router.put("/userid/:id",updateUser)

router.delete("/userid/:id",deleteUser)

export default router;