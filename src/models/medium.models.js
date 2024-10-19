import { Schema, model } from 'mongoose';

const mediumSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    education_board: {
        type: Schema.Types.ObjectId,
        ref: 'EducationBoard',
        required: true,
    }
}, { timestamps: true })

export const Medium = model('Medium', mediumSchema)