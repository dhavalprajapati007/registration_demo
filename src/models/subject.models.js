import { Schema, model } from 'mongoose';

const subjectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    standard_id: {
        type: Schema.Types.ObjectId,
        ref: 'Standard'
    }
}, { timestamps: true })

export const Subject = model('Subject', subjectSchema)