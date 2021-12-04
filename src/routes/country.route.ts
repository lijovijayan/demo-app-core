import { Router } from 'express';
import { CountryController } from '@controllers';
import { CountryService } from '@services';

const country = Router();

// controller and service instances
const countryService = new CountryService();
const countryController = new CountryController(countryService);
// end - controller and service instances

country.use('/', (req, res, next) => {
    next();
});

// routes
country.get('/', countryController.getCountries);
country.post('/', countryController.getCountriesWithFilter);
country.get('/:id', countryController.getCountryById);
// end - routes

export default country;
