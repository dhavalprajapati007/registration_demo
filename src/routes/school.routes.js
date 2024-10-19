import { Router } from "express";
import { getSchoolList } from "../controllers/school.controller.js";
import { getUniversityList } from "../controllers/school.controller.js";
import { getExamList } from "../controllers/school.controller.js";

const router = Router()

router.get('/schools', getSchoolList)
router.get('/universities', getUniversityList)
router.get('/exams', getExamList)


export default router;