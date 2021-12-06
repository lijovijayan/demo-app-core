import { Student } from '@models';
import { IStudent, IFStudent, IPaginatedResponse } from '@types';
import { getOrderByObject, getSearchKeyRegexExp } from '@utils';

export class StudentService {
    constructor() {
        // do nothing.
    }

    getStudents(): Promise<IStudent[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const students: IStudent[] = await Student.find();
                resolve(students);
            } catch (err) {
                reject(err);
            }
        });
    }

    getStudentsWithFilter(
        _filter: IFStudent
    ): Promise<IPaginatedResponse<IStudent[]>> {
        return new Promise(async (resolve, reject) => {
            try {
                const { pagination, name = '', ...filter }: IFStudent = _filter;

                const {
                    page,
                    pageSize,
                    orderBy: _orderBy = [],
                    searchKey: _searchKey = ''
                } = pagination;

                const searchKey = getSearchKeyRegexExp(_searchKey, name);
                const orderBy = getOrderByObject(_orderBy);

                const students: IStudent[] = await Student.find({
                    ...filter,
                    ...(searchKey ? { name: searchKey } : {})
                })
                    .sort(orderBy)
                    .skip((page - 1) * pageSize)
                    .limit(pageSize);

                const totalRecords = await Student.countDocuments().exec();

                const response: IPaginatedResponse<IStudent[]> = {
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
