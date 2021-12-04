import { ISkill } from '@types';
import { Schema, model } from 'mongoose';

const schema = new Schema<ISkill>({
    name: { type: String, required: true },
    id: { type: Number, required: true },
    students: { type: [Number], required: true }
});

export const Skill = model<ISkill>('Skill', schema);
