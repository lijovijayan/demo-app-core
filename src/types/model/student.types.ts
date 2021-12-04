export interface IStudent {
    id: number;
    name: string;
    year_of_batch: number;
    college_id: number;
    skills: number[];
}

export type IFStudent = Partial<IStudent>;
