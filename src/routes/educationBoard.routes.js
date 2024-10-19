import { Router } from "express";
import { getEducationBoard } from "../controllers/educationBoard.controller.js";

const router = Router()

router.get('/', getEducationBoard)

export default router