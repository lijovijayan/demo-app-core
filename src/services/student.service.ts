import { Student } from '@models';
import { IStudent, IFStudent } from '@types';

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

    getStudentsWithFilter(filter: IFStudent): Promise<IStudent[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const students: IStudent[] = await Student.find(filter);
                resolve(students);
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
