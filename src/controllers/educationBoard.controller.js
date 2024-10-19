import { EducationBoard } from "../models/educationBoard.models.js";

export const getEducationBoard = async (req, res) => {
    try {
        let educationBoard = await EducationBoard.find();
        if (educationBoard && educationBoard?.length > 0) {
            res.status(200).json({ data: educationBoard, message: 'Data Fetched Successfully' })
        } else {
            res.status(204).json({ message: 'Data Not found' })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json({ message: 'Something went wrong!' })
    }
}