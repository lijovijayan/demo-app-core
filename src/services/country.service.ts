import { Country } from '@models';
import { ICountry, IFCountry } from '@types';

export class CountryService {
    constructor() {
        // do nothing.
    }

    getCountrys(): Promise<ICountry[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const countries: ICountry[] = await Country.find();
                resolve(countries);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCountriesWithFilter(filter: IFCountry): Promise<ICountry[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const countries: ICountry[] = await Country.find(filter);
                resolve(countries);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCountryById(id: number): Promise<ICountry> {
        return new Promise(async (resolve, reject) => {
            try {
                const country: ICountry = await Country.findOne({ id });
                resolve(country);
            } catch (err) {
                reject(err);
            }
        });
    }
}
