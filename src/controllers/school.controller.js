import { Exam } from "../models/exam.models.js";
import { School } from "../models/school.models.js"
import { University } from "../models/university.models.js";

const getSchoolList = async (req, res) => {
    try {
        let schools = await School.find();
        if (schools && schools?.length > 0) {
            res.status(200).json({ data: schools, message: 'Data Fetched Successfully' })
        } else {
            res.status(204).json({ message: 'Data Not found' })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json({ message: 'Something went wrong!' })
    }
}

const getUniversityList = async (req, res) => {
    try {
        let universities = await University.find();
        if (universities && universities?.length > 0) {
            res.status(200).json({ data: universities, message: 'Data Fetched Successfully' })
        } else {
            res.status(204).json({ message: 'Data Not found' })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json({ message: 'Something went wrong!' })
    }
}

const getExamList = async (req, res) => {
    try {
        let exams = await Exam.find();
        if (exams && exams?.length > 0) {
            res.status(200).json({ data: exams, message: 'Data Fetched Successfully' })
        } else {
            res.status(204).json({ message: 'Data Not found' })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json({ message: 'Something went wrong!' })
    }
}

export { getSchoolList, getUniversityList, getExamList }