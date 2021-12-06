import { College } from '@models';
import { ICollege, IFCollege, IPaginatedResponse } from '@types';
import { getOrderByObject, getSearchKeyRegexExp } from '@utils';

export class CollegeService {
    constructor() {
        // do nothing.
    }

    getColleges(): Promise<ICollege[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const colleges: ICollege[] = await College.find();
                resolve(colleges);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCollegesWithFilter(
        _filter: IFCollege
    ): Promise<IPaginatedResponse<ICollege[]>> {
        return new Promise(async (resolve, reject) => {
            try {
                const { pagination, name = '', ...filter }: IFCollege = _filter;

                const {
                    page,
                    pageSize,
                    orderBy: _orderBy = [],
                    searchKey: _searchKey = ''
                } = pagination;

                const searchKey = getSearchKeyRegexExp(_searchKey, name);
                const orderBy = getOrderByObject(_orderBy);

                const colleges: ICollege[] = await College.find({
                    ...filter,
                    ...(searchKey ? { name: searchKey } : {})
                })
                    .sort(orderBy)
                    .skip((page - 1) * pageSize)
                    .limit(pageSize);

                const totalRecords = await College.countDocuments().exec();

                const response: IPaginatedResponse<ICollege[]> = {
                    data: colleges,
                    pagination: {
                        ...pagination,
                        totalRecords: totalRecords
                    }
                };

                resolve(response);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCollegeById(id: number): Promise<ICollege> {
        return new Promise(async (resolve, reject) => {
            try {
                const college: ICollege = await College.findOne({ id });
                resolve(college);
            } catch (err) {
                reject(err);
            }
        });
    }
}
