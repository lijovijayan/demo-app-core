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

export type IFCollege = Partial<ICollege>;
