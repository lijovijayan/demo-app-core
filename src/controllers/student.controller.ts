import { StudentService } from '@services';
import { IFStudent } from '@types';
import { DEFAULT_FILTER } from 'constants/filter.costants';
import { Request, Response, NextFunction } from 'express';

export class StudentController {
    constructor(private skillService: StudentService) {}

    getStudents = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const skills = await this.skillService.getStudents();
            return res.json(skills);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getStudentsWithFilter = async (
        req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        const _filter: IFStudent = req.body;
        const filter: IFStudent = {
            ..._filter,
            pagination: _filter.pagination ? _filter.pagination : DEFAULT_FILTER
        };
        try {
            const skills = await this.skillService.getStudentsWithFilter(
                filter
            );
            return res.json(skills);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getStudentById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const id: number = +req.params.id;
            const skill = await this.skillService.getStudentById(id);
            if (skill) {
                return res.json(skill);
            } else {
                throw `skill id ${id} not found !`;
            }
        } catch (err) {
            return res.status(404).send(err);
        }
    };
}
