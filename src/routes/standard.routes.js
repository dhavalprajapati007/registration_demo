import { Router } from "express";
import { getStandardWithSubject } from "../controllers/standard.controller.js";


const router = Router()

router.get('/:classCategoryId', getStandardWithSubject)



export default router;