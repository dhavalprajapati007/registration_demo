import { Schema, model } from 'mongoose';

const educationBoardSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    short_name: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export const EducationBoard = model('EducationBoard', educationBoardSchema)