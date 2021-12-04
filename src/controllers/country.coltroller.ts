import { CountryService } from '@services';
import { IFCountry } from '@types';
import { Request, Response, NextFunction } from 'express';

export class CountryController {
    constructor(private countryService: CountryService) {}

    getCountries = async (
        _req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const countries = await this.countryService.getCountrys();
            return res.json(countries);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getCountriesWithFilter = async (
        req: Request,
        res: Response,
        _next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        const filter: IFCountry = req.body;
        try {
            const countries = await this.countryService.getCountriesWithFilter(
                filter
            );
            return res.json(countries);
        } catch (err) {
            return res.status(400).send(err);
        }
    };

    getCountryById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<any, Record<string, any>>> => {
        try {
            const id: number = +req.params.id;
            const country = await this.countryService.getCountryById(id);
            if (country) {
                return res.json(country);
            } else {
                throw `country id ${id} not found !`;
            }
        } catch (err) {
            return res.status(404).send(err);
        }
    };
}
