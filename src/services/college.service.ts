import { COLLEGE_AGGREGATION } from '@aggregations';
import { College } from '@models';
import {
    ICollege,
    ICollegeObject,
    IFCollege,
    IPaginatedResponse
} from '@types';
import { getOrderByObject, getSearchKeyRegexExp } from '@utils';

export class CollegeService {
    constructor() {
        // do nothing.
    }

    getColleges(): Promise<ICollegeObject[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const colleges: ICollegeObject[] = await College.aggregate(
                    COLLEGE_AGGREGATION
                );
                resolve(colleges);
            } catch (err) {
                reject(err);
            }
        });
    }

    getCollegesWithFilter(
        _filter: IFCollege
    ): Promise<IPaginatedResponse<ICollegeObject[]>> {
        return new Promise(async (resolve, reject) => {
            try {
                let { pagination, name = '', ...filter }: IFCollege = _filter;

                const {
                    page,
                    pageSize,
                    orderBy: _orderBy = [],
                    searchKey: _searchKey = ''
                } = pagination;

                const searchKey = getSearchKeyRegexExp(_searchKey, name);
                const orderBy = getOrderByObject(_orderBy);

                filter = {
                    ...filter,
                    ...(searchKey ? { name: searchKey } : {})
                };

                const colleges: ICollegeObject[] = await College.aggregate([
                    {
                        $match: filter
                    },
                    ...COLLEGE_AGGREGATION
                ])
                    .sort(orderBy)
                    .skip((page - 1) * pageSize)
                    .limit(pageSize);

                const totalRecords = await College.countDocuments().exec();

                const response: IPaginatedResponse<ICollegeObject[]> = {
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
