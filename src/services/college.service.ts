import { College } from '@models';
import { ICollege, IFCollege } from '@types';

export class CollegeService {
    constructor() {
        // do nothing.
    }

    getColleges(): Promise<ICollege[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const city: ICollege[] = await College.find();
                resolve(city);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCollegesWithFilter(filter: IFCollege): Promise<ICollege[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const city: ICollege[] = await College.find(filter);
                resolve(city);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCollegeById(id: number): Promise<ICollege> {
        return new Promise(async (resolve, reject) => {
            try {
                const city: ICollege = await College.findOne({ id });
                resolve(city);
            } catch (err) {
                reject(err);
            }
        });
    }
}
