import { ICource } from '@types';
import { Schema, model } from 'mongoose';

const schema = new Schema<ICource>({
    name: { type: String, required: true },
    id: { type: Number, required: true },
    colleges: { type: [Number], required: true }
});

export const Cource = model<ICource>('Cource', schema);
