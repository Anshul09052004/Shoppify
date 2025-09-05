import { Router } from "express";
import { loginUser, logout, registerUser, } from "../Controllers/user.controller.js"
const router = Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logout);


export default router;