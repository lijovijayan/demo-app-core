import { ICollege } from '@types';
import { Schema, model } from 'mongoose';

const schema = new Schema<ICollege>({
    name: { type: String, required: true },
    id: { type: Number, required: true },
    students: { type: [Number], required: true },
    city: { type: Number, required: true },
    country: { type: Number, required: true },
    state: { type: Number, required: true },
    cources: { type: [Number], required: true },
    year_founded: { type: Number, required: true }
});

export const College = model<ICollege>('College', schema);
