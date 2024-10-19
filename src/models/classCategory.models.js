import { Schema, model } from 'mongoose';

const classCategorySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
}, { timestamps: true })

export const ClassCategory = model('ClassCategory', classCategorySchema)