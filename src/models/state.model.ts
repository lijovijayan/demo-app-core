import { IState } from '@types';
import { Schema, model } from 'mongoose';

const schema = new Schema<IState>({
    name: { type: String, required: true },
    id: { type: Number, required: true },
    country_id: { type: Number, required: true }
});

export const State = model<IState>('State', schema);
