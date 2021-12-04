import { CityService } from '@services';
import { IFCity } from '@types';
import { Request, Response, NextFunction } from 'express';

export class CityController {
    constructor(private cityService: CityService) {}

    getCities = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const cities = await this.cityService.getCities();
            return res.json(cities);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getCitiesWithFilter = async (
        req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        const filter: IFCity = req.body;
        try {
            const cities = await this.cityService.getCitiesWithFilter(filter);
            return res.json(cities);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getCityById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const id: number = +req.params.id;
            const city = await this.cityService.getCityById(id);
            if (city) {
                return res.json(city);
            } else {
                throw `city id ${id} not found !`;
            }
        } catch (err) {
            return res.status(404).send(err);
        }
    };
}
