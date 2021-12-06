import { CollegeService } from '@services';
import { IFCollege } from '@types';
import { DEFAULT_FILTER } from 'constants/filter.costants';
import { Request, Response, NextFunction } from 'express';

export class CollegeController {
    constructor(private collegeService: CollegeService) {}

    getColleges = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const colleges = await this.collegeService.getColleges();
            return res.json(colleges);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getCollegesWithFilter = async (
        req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        const _filter: IFCollege = req.body;
        const filter: IFCollege = {
            ..._filter,
            pagination: _filter.pagination ? _filter.pagination : DEFAULT_FILTER
        };
        try {
            const colleges = await this.collegeService.getCollegesWithFilter(
                filter
            );
            return res.json(colleges);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getCollegeById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const id: number = +req.params.id;
            const college = await this.collegeService.getCollegeById(id);
            if (college) {
                return res.json(college);
            } else {
                throw `college id ${id} not found !`;
            }
        } catch (err) {
            return res.status(404).send(err);
        }
    };
}
