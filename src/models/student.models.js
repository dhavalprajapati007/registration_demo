import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    institute: {
        type: String,
        required: true,
        enum: ['Playhouse', 'School', 'College', 'Competitive Exam Center']
    },
    school: {
        type: Schema.Types.ObjectId,
        ref: 'School',
        required: function () {
            return this.institute == 'School';
        },
    },
    education_board: {
        type: Schema.Types.ObjectId,
        ref: 'EducationBoard',
        required: function () {
            return this.institute == 'School';
        },
    },
    medium: {
        type: Schema.Types.ObjectId,
        ref: 'Medium',
        required: function () {
            return this.institute == 'School';
        },
    },
    class_category: {
        type: Schema.Types.ObjectId,
        ref: 'ClassCategory',
        required: function () {
            return this.institute == 'School';
        },
    },
    standard: {
        type: Schema.Types.ObjectId,
        ref: 'Standard',
        required: function () {
            return this.institute == 'School';
        },
    },
    subjects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subject',
            required: function () {
                return this.institute == 'School';
            },
        }
    ],
    university: {
        type: Schema.Types.ObjectId,
        ref: 'School',
        required: function () {
            return this.institute == 'College';
        },
    },
    degree_type: {
        type: String,
        enum: ['Bachelor', 'Master'],
        required: function () {
            return this.institute == 'College';
        },
    },
    exam_type: {
        type: Schema.Types.ObjectId,
        enum: 'Exam',
        required: function () {
            return this.institute == 'Competitive Exam Center';
        },
    }
}, { timestamps: true })

export const Student = model('Student', studentSchema)