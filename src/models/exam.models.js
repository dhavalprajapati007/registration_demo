import { Schema, model } from 'mongoose';

const ExamSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    short_name: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export const Exam = model('Exam', ExamSchema)