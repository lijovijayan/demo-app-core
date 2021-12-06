import { IPagination } from '@types';

export interface ICollege {
    id: number;
    name: string;
    year_founded: number;
    city: number;
    state: number;
    country: number;
    students: number[];
    cources: number[];
}

export interface IFCollege extends Partial<ICollege> {
    pagination: IPagination;
}
