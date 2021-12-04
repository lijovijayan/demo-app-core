export interface ICity {
    id: number;
    name: string;
    state_id: number;
    country_id: number;
}

export type IFCity = Partial<ICity>;
