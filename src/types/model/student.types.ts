import { ICollege, IPagination, ISkill } from '@types';

export interface IStudent {
    id: number;
    name: string;
    year_of_batch: number;
    college_id: number;
    skills: number[];
}

export interface IStudentObject {
    id: number;
    name: string;
    year_of_batch: number;
    college: ICollege;
    skills: ISkill[];
}

export interface IFStudent extends Partial<IStudent> {
    pagination: IPagination;
}
