import { Standard } from "../models/standard.models.js"

const getStandardWithSubject = async (req, res) => {
    try {
        const { classCategoryId } = req.param;

        let standardWithSubject = await Standard.aggregate([
            {
                $match: {
                    class_category_id: classCategoryId
                },
                $lookup: {
                    from: 'subjects',
                    localField: '_id',
                    foreignField: 'standard_id',
                    as: 'Subjects'
                }
            }
        ])

        if (standardWithSubject) {
            res.status(200).json({ data: standardWithSubject, message: 'Data Fetched Successfully' })
        } else {
            res.status(204).json({ message: 'Data Not found' })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json({ message: 'Something went wrong!' })
    }
}

export { getStandardWithSubject }