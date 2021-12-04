export interface IState {
    id: number;
    name: string;
    country_id: number;
}

export type IFState = Partial<IState>;
