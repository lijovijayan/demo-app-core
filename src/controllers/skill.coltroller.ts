import { SkillService } from '@services';
import { IFSkill } from '@types';
import { Request, Response, NextFunction } from 'express';

export class SkillController {
    constructor(private skillService: SkillService) {}

    getSkills = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const skills = await this.skillService.getSkills();
            return res.json(skills);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getSkillsWithFilter = async (
        req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        const filter: IFSkill = req.body;
        try {
            const skills = await this.skillService.getSkillsWithFilter(filter);
            return res.json(skills);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getSkillById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const id: number = +req.params.id;
            const skill = await this.skillService.getSkillById(id);
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
