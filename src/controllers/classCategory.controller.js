import { ClassCategory } from "../models/classCategory.models";

export const getClassCategory = async (req, res) => {
    try {
        let classCategory = await ClassCategory.find();
        if (classCategory && classCategory?.length > 0) {
            res.status(200).json({ data: classCategory, message: 'Data Fetched Successfully' })
        } else {
            res.status(204).json({ message: 'Data Not found' })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json({ message: 'Something went wrong!' })
    }
}