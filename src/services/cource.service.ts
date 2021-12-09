import { Cource } from '@models';
import { ICource, IFCource } from '@types';

export class CourceService {
    getCources(): Promise<ICource[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const cources: ICource[] = await Cource.find();
                resolve(cources);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCourcesWithFilter(filter: IFCource): Promise<ICource[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const cources: ICource[] = await Cource.find(filter);
                resolve(cources);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCourceById(id: number): Promise<ICource> {
        return new Promise(async (resolve, reject) => {
            try {
                const cource: ICource = await Cource.findOne({ id });
                resolve(cource);
            } catch (err) {
                reject(err);
            }
        });
    }
}
