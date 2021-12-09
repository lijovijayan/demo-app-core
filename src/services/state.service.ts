import { State } from '@models';
import { IState, IFState } from '@types';

export class StateService {
    getStates(): Promise<IState[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const states: IState[] = await State.find();
                resolve(states);
            } catch (err) {
                reject(err);
            }
        });
    }

    getStatesWithFilter(filter: IFState): Promise<IState[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const states: IState[] = await State.find(filter);
                resolve(states);
            } catch (err) {
                reject(err);
            }
        });
    }

    getStateById(id: number): Promise<IState> {
        return new Promise(async (resolve, reject) => {
            try {
                const state: IState = await State.findOne({ id });
                resolve(state);
            } catch (err) {
                reject(err);
            }
        });
    }
}
