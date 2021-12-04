import { Router } from 'express';
import { CityController } from '@controllers';
import { CityService } from '@services';

const city = Router();

// controller and service instances
const cityService = new CityService();
const cityController = new CityController(cityService);
// end - controller and service instances

city.use('/', (req, res, next) => {
    next();
});

// routes
city.get('/', cityController.getCities);
city.post('/', cityController.getCitiesWithFilter);
city.get('/:id', cityController.getCityById);
// end - routes

export default city;
