import { IPagination } from '@types';

export interface IStudent {
    id: number;
    name: string;
    year_of_batch: number;
    college_id: number;
    skills: number[];
}

export interface IFStudent extends Partial<IStudent> {
    pagination: IPagination;
}
