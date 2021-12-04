import { ICity } from '@types';
import { Schema, model } from 'mongoose';

const schema = new Schema<ICity>({
    name: { type: String, required: true },
    id: { type: Number, required: true },
    country_id: { type: Number, required: true },
    state_id: { type: Number, required: true }
});

export const City = model<ICity>('City', schema);
