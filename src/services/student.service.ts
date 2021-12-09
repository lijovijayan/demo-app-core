import { STUDENT_AGGREGATION } from '@aggregations';
import { Student } from '@models';
import {
    IStudent,
    IFStudent,
    IPaginatedResponse,
    IStudentObject
} from '@types';
import { getOrderByObject, getSearchKeyRegexExp } from '@utils';

export class StudentService {
    getStudents(): Promise<IStudentObject[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const students: IStudentObject[] = await Student.aggregate(
                    STUDENT_AGGREGATION
                );
                resolve(students);
            } catch (err) {
                reject(err);
            }
        });
    }

    getStudentsWithFilter(
        _filter: IFStudent
    ): Promise<IPaginatedResponse<IStudentObject[]>> {
        return new Promise(async (resolve, reject) => {
            try {
                let {
                    pagination,
                    skills,
                    name = '',
                    ...filter
                }: IFStudent = _filter;

                const {
                    page,
                    pageSize,
                    orderBy: _orderBy = [],
                    searchKey: _searchKey = ''
                } = pagination;

                const searchKey = getSearchKeyRegexExp(_searchKey, name);
                const orderBy: Record<string, 1 | -1 | { $meta: 'textScore' }> =
                    getOrderByObject(_orderBy);

                filter = {
                    ...filter,
                    ...(searchKey ? { name: searchKey } : {}),
                    ...(skills?.length > 0 ? { skills: skills[0] } : undefined)
                };

                const _result = await Student.aggregate([
                    {
                        $match: filter
                    },
                    ...STUDENT_AGGREGATION,
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

                const students: IStudentObject[] = _result?.[0]?.data || [];

                const totalRecords = _result?.[0]?.totalCount?.[0]?.count || 0;

                const response: IPaginatedResponse<IStudentObject[]> = {
                    data: students,
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

    getStudentById(id: number): Promise<IStudent> {
        return new Promise(async (resolve, reject) => {
            try {
                const student: IStudent = await Student.findOne({ id });
                resolve(student);
            } catch (err) {
                reject(err);
            }
        });
    }
}
