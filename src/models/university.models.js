import { Schema, model } from 'mongoose';

const UniversitySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    short_name: {
        type: String,
        required: true,
    }
    // other fields like area, address can be implemented
}, { timestamps: true })

export const University = model('University', UniversitySchema)