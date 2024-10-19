import { Medium } from "../models/medium.models.js"

const getLanguageMedium = async (req, res) => {
    try {
        const { educationBoardId } = req.param;

        let languageMedium = await Medium.find({ education_board: educationBoardId });
        if (languageMedium && languageMedium?.length > 0) {
            res.status(200).json({ data: languageMedium, message: 'Data Fetched Successfully' })
        } else {
            res.status(204).json({ message: 'Data Not found' })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(500).json({ message: 'Something went wrong!' })
    }
}

export { getLanguageMedium }