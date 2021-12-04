export interface ICource {
    id: number;
    name: string;
    colleges: number[];
}

export type IFCource = Partial<ICource>;
