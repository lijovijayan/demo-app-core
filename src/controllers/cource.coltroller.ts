import { CourceService } from '@services';
import { IFCource } from '@types';
import { Request, Response, NextFunction } from 'express';

export class CourceController {
    constructor(private courceService: CourceService) {}

    getCources = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const cources = await this.courceService.getCources();
            return res.json(cources);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getCourcesWithFilter = async (
        req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        const filter: IFCource = req.body;
        try {
            const cources = await this.courceService.getCourcesWithFilter(
                filter
            );
            return res.json(cources);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getCourceById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const id: number = +req.params.id;
            const cource = await this.courceService.getCourceById(id);
            if (cource) {
                return res.json(cource);
            } else {
                throw `cource id ${id} not found !`;
            }
        } catch (err) {
            return res.status(404).send(err);
        }
    };
}
