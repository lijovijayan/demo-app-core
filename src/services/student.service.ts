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
    constructor() {
        // do nothing.
    }

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
                let { pagination, name = '', ...filter }: IFStudent = _filter;

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

                const students: IStudentObject[] = await Student.aggregate([
                    {
                        $match: filter
                    },
                    ...STUDENT_AGGREGATION
                ])
                    .sort(orderBy)
                    .skip((page - 1) * pageSize)
                    .limit(pageSize);

                const totalRecords = await Student.countDocuments().exec();

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
