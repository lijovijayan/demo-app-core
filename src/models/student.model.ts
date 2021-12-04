import { IStudent } from '@types';
import { Schema, model } from 'mongoose';

const schema = new Schema<IStudent>({
    name: { type: String, required: true },
    id: { type: Number, required: true },
    skills: { type: [Number], required: true },
    year_of_batch: { type: Number, required: true },
    college_id: { type: Number, required: true }
});

export const Student = model<IStudent>('Student', schema);
