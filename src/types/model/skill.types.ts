export interface ISkill {
    id: number;
    name: string;
    students: number[];
}

export type IFSkill = Partial<ISkill>;
