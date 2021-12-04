import { StateService } from '@services';
import { IFState } from '@types';
import { Request, Response, NextFunction } from 'express';

export class StateController {
    constructor(private stateService: StateService) {}

    getStates = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const states = await this.stateService.getStates();
            return res.json(states);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getStatesWithFilter = async (
        req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        const filter: IFState = req.body;
        try {
            const states = await this.stateService.getStatesWithFilter(filter);
            return res.json(states);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getStateById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const id: number = +req.params.id;
            const state = await this.stateService.getStateById(id);
            if (state) {
                return res.json(state);
            } else {
                throw `state id ${id} not found !`;
            }
        } catch (err) {
            return res.status(404).send(err);
        }
    };
}
