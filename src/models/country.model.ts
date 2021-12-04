import { ICountry } from '@types';
import { Schema, model } from 'mongoose';

const schema = new Schema<ICountry>({
    name: { type: String, required: true },
    id: { type: Number, required: true }
});

export const Country = model<ICountry>('Country', schema);
