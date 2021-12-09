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
                let {
                    pagination,
                    name = '',
                    cources,
                    ...filter
                }: IFCollege = _filter;

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
                    ...(cources?.length > 0
                        ? { cources: cources[0] }
                        : undefined),
                    ...(searchKey ? { name: searchKey } : {})
                };

                const _result = await College.aggregate([
                    {
                        $match: filter
                    },
                    ...COLLEGE_AGGREGATION,
                    {
                        $facet: {
                            data: [
                                { $skip: (page - 1) * pageSize },
                                { $limit: pageSize }
                            ],
                            totalCount: [
                                {
                                    $count: 'count'
                                }
                            ]
                        }
                    }
                ]).sort(orderBy);

                const colleges: ICollegeObject[] = _result?.[0]?.data || [];

                const totalRecords = _result?.[0]?.totalCount?.[0]?.count || 0;

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
