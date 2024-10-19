import { Schema, model } from 'mongoose';

const standardSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    class_category_id: {
        type: Schema.Types.ObjectId,
        ref: 'ClassCategory'
    }
}, { timestamps: true })

export const Standard = model('Standard', standardSchema)