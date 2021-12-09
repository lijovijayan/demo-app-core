import { City } from '@models';
import { ICity, IFCity } from '@types';

export class CityService {
    getCities(): Promise<ICity[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const city: ICity[] = await City.find();
                resolve(city);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCitiesWithFilter(filter: IFCity): Promise<ICity[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const city: ICity[] = await City.find(filter);
                resolve(city);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCityById(id: number): Promise<ICity> {
        return new Promise(async (resolve, reject) => {
            try {
                const city: ICity = await City.findOne({ id });
                resolve(city);
            } catch (err) {
                reject(err);
            }
        });
    }
}
