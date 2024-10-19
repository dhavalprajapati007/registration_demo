import { Student } from "../models/student.models.js"

export const registerStudent = async (req, res) => {
    try {
        const { name, institute, school, education_board, medium, class_category, standard, subjects, university, degree_type, exam_type } = req.body || {}

        if (institute == 'School') {
            if (!name || !school || !education_board || !medium || !class_category || !standard || !subjects) {
                res.status(400).json({ message: 'Invalid Payload' })
            }

            const student = await Student.create({
                name,
                institute,
                school,
                education_board,
                medium,
                class_category,
                standard,
                subjects
            })

            // create JWT access token for security

            res.status(200).json({ data: student, message: 'Student Created Successfully' })

        } else if (institute == 'College') {
            if (!name || !university || !degree_type) {
                res.status(400).json({ message: 'Invalid Payload' })
            }

            const student = await Student.create({
                name,
                institute,
                university,
                degree_type
            })

            res.status(200).json({ data: student, message: 'Student Created Successfully' })
        } else if (institute == 'Competitive Exam Center') {
            if (!name || !exam_type) {
                res.status(400).json({ message: 'Invalid Payload' })
            }

            const student = await Student.create({
                name,
                institute,
                exam_type
            })

            res.status(200).json({ data: student, message: 'Student Created Successfully' })
        } else {
            // Playhouse
            if (!name || !school) {
                res.status(400).json({ message: 'Invalid Payload' })
            }

            const student = await Student.create({
                name,
                institute,
                school
            })

            res.status(200).json({ data: student, message: 'Student Created Successfully' })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json({ message: 'Something went wrong!' })
    }
}