import { Schema, model } from 'mongoose';

const SchoolSchema = new Schema({
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

export const School = model('School', SchoolSchema)