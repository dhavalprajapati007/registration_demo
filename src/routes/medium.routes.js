import { Router } from "express";
import { getLanguageMedium } from "../controllers/medium.controller.js";

const router = Router()

router.get('/:educationBoardId', getLanguageMedium)

export default router