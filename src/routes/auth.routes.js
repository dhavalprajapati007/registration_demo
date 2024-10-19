import { Router } from "express";
import { registerStudent } from "../controllers/auth.controller.js";

const router = Router()

router.post('/register-student', registerStudent)

export default router